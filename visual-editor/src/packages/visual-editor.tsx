import { ref,computed, defineComponent, PropType, withCtx } from 'vue';
import { useModel } from './utils/useModule';
import { useVisualCommand } from './utils/visual.command';
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
    //双向数据绑定
    const dataModel = useModel(() => props.modelValue, (val) => ctx.emit('update:modelValue', val));
    const containerStyle = computed(()=>({
      width: `${dataModel.value?.container.width}px`,
      height: `${dataModel.value?.container.height}px`
    }))

    //ref  获取dom元素对象
    const containerRef = ref({} as HTMLDivElement);

    const focusData = computed(()=>{
      let focus :VisualEditorBlockData[] = [];//选中的数据
      let unFocus:VisualEditorBlockData[] = [];
      (dataModel.value.blocks || []).forEach(block => (block.focus ? focus : unFocus).push(block));
      return {
        focus, 
        unFocus
      }
    })

    const methods = {
      //清除选中状态
      clearFocus:(block?:VisualEditorBlockData)=>{
        let blocks = (dataModel.value.blocks||[]);
        if(blocks.length === 0) return;
        if(!!block){
          blocks = blocks.filter(b=>b!==block);
        }
        blocks.forEach(block=>block.focus = false);
      },
      updateBlocks:(blocks:VisualEditorBlockData[])=>{
        dataModel.value = {
          ...dataModel.value,blocks
        }
      }
    }
    const menuDraggier = (()=>{
      //闭包只对外暴露start，end
      let component = null as null | VisualEditorComponent;
      const blockHandler = { //左侧组件库拖拽相关
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
      const containerHandler = { //容器内可放置拖进来的组件
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
          
          const blocks = [...dataModel.value.blocks || []];
          blocks.push(createNewBlock({component:component!,top:e.offsetY,left:e.offsetX}))  //创建容器中已放置的组件
          methods.updateBlocks(blocks)
          // dataModel.value = {...dataModel.value,blocks}
        }
      }
      return blockHandler;
       

    })()
    const focusHandler = (()=>{
      return {
        container:{ //容器空白触发清除所有已选组件状态
          onMousedown:(e:MouseEvent)=>{
            e.stopPropagation();
            e.preventDefault();
            methods.clearFocus()
          }
        },
        block:{
          onMousedown:(e:MouseEvent,block:VisualEditorBlockData)=>{
            e.stopPropagation();
            e.preventDefault();
            if(e.shiftKey){
              if(focusData.value.focus.length<=1){
                block.focus = true;
              }else{
                block.focus = !block.focus
              }
            }else{
              if(!block.focus){
                block.focus = true;
                methods.clearFocus(block);
              }
            }
            blcokDraggier.mousedown(e);
          }
        }
      }
    })();


    const blcokDraggier = (()=>{  //容器内已选取组件拖拽 位置调整
      let dragState={
        startX:0,
        startY:0,
        startPos:[] as {left:number,top:number}[]
      }
      const mousedown = (e:MouseEvent)=>{
        dragState = {
          startX:e.clientX,
          startY:e.clientY,
          startPos:focusData.value.focus.map(({top,left})=>({top,left}))
        }
        document.addEventListener('mousemove',mousemove);
        document.addEventListener('mouseup', mouseup);
      }
      const mousemove = (e:MouseEvent) => {
        const durX = e.clientX - dragState.startX;
        const durY = e.clientY - dragState.startY;
        focusData.value.focus.forEach((block,index)=>{
          block.top = dragState.startPos[index].top + durY;
          block.left = dragState.startPos[index].left +durX;
        })
       }
      const mouseup = (e:MouseEvent) => { 
        document.removeEventListener('mousemove', mousemove);
        document.removeEventListener('mouseup', mouseup);
      }
      return {mousedown};
    })()
    const commander = useVisualCommand({
        focusData,
        updateBlocks:methods.updateBlocks,
        dataModel
      });
    const buttons = [
      {label:'撤销',icon:'icon-back',handler:commander.undo,tip:'ctrl+z'},
      { label: '重做', icon: 'icon-back', handler: commander.redo, tip: 'ctrl+z'},
      { label: '删除', icon: 'icon-delete', handler: ()=>commander.delete(), tip: 'ctrl+d,backspace,delete' },
    ]
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
        <div class="visual-editor-head">
          {
            buttons.map((btn,index)=>
              (<div key={index} class="visual-editor-head-button" onClick={btn.handler}>
              <i class={`iocnfont ${btn.icon}`}></i>
              <span>{btn.label}</span>
            </div>)
            )
          }
        </div>
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