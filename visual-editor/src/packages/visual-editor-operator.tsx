import deepcopy from 'deepcopy';
import { ElButton, ElColorPicker, ElForm, ElFormItem, ElInput, ElInputNumber, ElOption, ElSelect } from "element-plus";
import { defineComponent, PropType, reactive, watch } from "vue";
import { VisualEditorProps, VisualEditorPropsType } from "./visual-editor-props";
import { VisualEditorBlockData, VisualEditorConfig, VisualEditorModelValue } from "./visual-editor.utils";

export const VisualOperatorEditor = defineComponent({
    props: {
        block: { type: Object as PropType<VisualEditorBlockData> },
        config: { type: Object as PropType<VisualEditorConfig>, required: true },
        dataModel:{type:Object as PropType<{value:VisualEditorModelValue}>,reuqired:true},
        updateBlock:{type:Function as PropType<(newBlock:VisualEditorBlockData,oldBlock:VisualEditorBlockData)=>void >,required:true}, 
        updateModelValue :{type:Function as PropType<(val:VisualEditorModelValue)=>void>,required:true}
    },
    setup(props) {
        const state = reactive({
            editData:'' as any,
        })
        const methods = {
            apply: () => { 
                if(!props.block){
                    // props.updateModelValue()
                    props.updateModelValue({
                        ...props.dataModel!.value,
                        container:state.editData
                    })
                }else{
                    const newBlocks = {
                        ...props.block,
                        props: state.editData
                    }
                    // props.updateBlock({
                    //     ...props.block,
                    //     props:state.editData
                    // },props.block)
                    props.updateBlock(newBlocks,props.block)
                }
            },
            reset: () => {
                if (!props.block) {
                    state.editData = deepcopy(props.dataModel!.value.container)
                } else {
                    state.editData = deepcopy(props.block.props || {})
                }
            }
        }
        watch(()=>props.block,(val)=>{
            // if(!val){ //编辑容器属性
            //     state.editData = deepcopy(props.dataModel?.value.container)
            // }else{ //编辑组件属性
            //     state.editData = deepcopy(val.props||{})
            // }
            methods.reset()
        },{immediate:true})
        const renderEditor = (propName:string,propConfig:VisualEditorProps)=>{
            return {
                [VisualEditorPropsType.input]: ()=>(<ElInput v-model={state.editData[propName]}/>),
                [VisualEditorPropsType.color]: () => (<ElColorPicker v-model={state.editData[propName]} />),
                [VisualEditorPropsType.select]: () => (<ElSelect v-model={state.editData[propName]}>
                    {(()=>{
                        return propConfig.options!.map(opt => (
                            <ElOption label={opt.label} value={opt.val} />
                        ))
                    })()}
                </ElSelect>)
            }[propConfig.type]()
        }
       
        return () => {
            let content: JSX.Element | null = null
            if (!props.block) {
                content = <>
                    <ElFormItem label="容器宽度">
                        <ElInputNumber v-model={state.editData.width}/>
                    </ElFormItem>
                    <ElFormItem label="容器高度">
                        <ElInputNumber v-model={state.editData.height}/>
                    </ElFormItem>
                </>
            } else {
                const { componentKey } = props.block;
                const component = props.config.componentMap[componentKey];
                if (!!component && !!component.props) {
                    content = <>
                        {
                            Object.entries(component.props).map(([propName, propConfig]) => {
                                return <ElFormItem label={propConfig.label} key={propName}>
                                    {renderEditor(propName,propConfig)}
                                </ElFormItem>
                            })
                        }</>
                }

            }
            return (
                <div class="visual-editor-operator">
                    <ElForm labelPosition="top">
                        {content}
                        <ElFormItem>
                            <ElButton type="primary" {...{ onClick: methods.apply} as any}>应用</ElButton>
                            <ElButton {...{ onClick: methods.reset } as any}>重置</ElButton>
                            </ElFormItem>
                    </ElForm>
                    
                </div>
            )

        }
    }
})