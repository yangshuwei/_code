import { ref,computed, defineComponent, PropType, withCtx } from 'vue';
import { useModel } from './utils/useModule';
import { VisualEditorBlock } from './visual-editor-block';
import './visual-editor.scss';
import { createNewBlock, VisualEditorBlockData, VisualEditorComponent, VisualEditorConfig, VisualEditorModelValue } from './visual-editor.utils';
export const VisualEditor = defineComponent({
  props: {
    modelValue: { type: Object as PropType<VisualEditorModelValue>, required: true },
    config: { type: Object as PropType<VisualEditorConfig>,required:true}
  },
  emits: {
    'update:modelValue': (val?: VisualEditorModelValue) => true,
  },
  setup(props, ctx) {
    const dataModel = useModel(() => props.modelValue, (val) => ctx.emit('update:modelValue', val));
    const containerStyle = computed(()=>({
      width: `${dataModel.value?.container.width}px`,
      height: `${dataModel.value?.container.height}px`
    }))
    const containerRef = ref({} as HTMLDivElement);
    const menuDraggier = (()=>{
      //闭包只对外暴露start，end
      let component = null as null | VisualEditorComponent;
      const blockHandler = {
        dragstart:(e:DragEvent,current:VisualEditorComponent)=>{
          containerRef.value.addEventListener('dragenter',containerHandler.dragenter);
          containerRef.value.addEventListener('dragover',containerHandler.dragover);
          containerRef.value.addEventListener('dragleave',containerHandler.dragleave);
          containerRef.value.addEventListener('drop',containerHandler.drop);
          component = current; 
        },
        dragend:(e:DragEvent)=>{
          containerRef.value.removeEventListener('dragenter',containerHandler.dragenter);
          containerRef.value.removeEventListener('dragover',containerHandler.dragover);
          containerRef.value.removeEventListener('dragleave',containerHandler.dragleave);
          containerRef.value.removeEventListener('drop',containerHandler.drop);
          component = null; 
        },
      }
      const containerHandler = {
        dragenter:(e:DragEvent)=>{
          e.dataTransfer!.dropEffect = 'move';
        },
        dragover:(e:DragEvent)=>{
          e.preventDefault();
        },
        dragleave:(e:DragEvent)=>{
          e.dataTransfer!.dropEffect = 'none'
        },
        drop:(e:DragEvent)=>{
          
          const blocks = dataModel.value.blocks || [];
          blocks.push(createNewBlock({component:component!,top:e.offsetY,left:e.offsetX}))
          dataModel.value = {...dataModel.value,blocks}
        }
      }
      return blockHandler;
       

    })()
    const focusHandler = (()=>{
      return {
        container:{
          onMousedown:(e:MouseEvent)=>{
            (dataModel.value.blocks ||[]).forEach(block=>block.focus=false)
          }
        },
        block:{
          onMousedown:(e:MouseEvent,block:VisualEditorBlockData)=>{
            e.stopPropagation();
            block.focus = !block.focus
          }
        }
      }
    }
    )();
    return () => (
      <div class="visual-editor">
        <div class="visual-editor-menu">
          {props.config.componentList.map(component=>
          <div class="visual-editor-menu-item" 
          draggable 
          onDragstart={(e)=>menuDraggier.dragstart(e,component)}
          onDragend={menuDraggier.dragend}
          >
            <span class="visual-editor-menu-item-label">{component.label}</span>
            {component.preview()}
          </div>
          )}
        </div>
        <div class="visual-editor-head">visual-editor-head</div>
        <div class="visual-editor-operator">visual-editor-operator</div>
        <div class="visual-editor-body">
          <div class="visual-editor-content">
            <div class="visual-editor-container" style={containerStyle.value} ref={containerRef} {...focusHandler.container}>
              {
                !!dataModel.value && !!dataModel.value.blocks && (dataModel.value.blocks.map((block, index) => (
                  <VisualEditorBlock config={props.config} block={block} key={index} {...{
                    onMousedown:(e:MouseEvent)=>focusHandler.block.onMousedown(e,block)
                  }}/>
                ))
              )}
            </div>

          </div>
        </div>
      </div>
    )
  }
})