import { ElColorPicker, ElFormItem, ElInput, ElInputNumber, ElOption, ElSelect } from "element-plus";
import { defineComponent, PropType } from "vue";
import { VisualEditorPropsType } from "./visual-editor-props";
import { VisualEditorBlockData, VisualEditorConfig } from "./visual-editor.utils";

export const VisualOperatorEditor = defineComponent({
    props: {
        block: { type: Object as PropType<VisualEditorBlockData> },
        config: { type: Object as PropType<VisualEditorConfig>, required: true }
    },
    setup(props) {
        return () => {
            let content: JSX.Element | null = null
            if (!props.block) {
                content = <>
                    <ElFormItem label="容器宽度">
                        <ElInputNumber {...{modelValue:1}}/>
                    </ElFormItem>
                    <ElFormItem label="容器高度">
                        <ElInputNumber {...{modelValue:1}}/>
                    </ElFormItem>
                </>
            } else {
                const { componentKey } = props.block;
                const component = props.config.componentMap[componentKey];
                if (!!component && !!component.props) {
                    content = <>
                        {
                            Object.entries(component.props).forEach(([propName, propConfig]) => {
                                return <ElFormItem label={propConfig.label}>
                                    {{
                                        [VisualEditorPropsType.input]:(<ElInput />),
                                        [VisualEditorPropsType.color]:(<ElColorPicker />),
                                        [VisualEditorPropsType.select]:(<ElSelect>
                                        {propConfig.options!.map(opt=>(
                                            <ElOption label={opt.label} value={opt.val} />
                                        ))}
                                        </ElSelect>),

                                    }[propConfig.type]}
                                </ElFormItem>
                            })
                        }</>
                }

            }
            return (
                <div class="visual-editor-operator">
                    {content}
                </div>
            )

        }
    }
})