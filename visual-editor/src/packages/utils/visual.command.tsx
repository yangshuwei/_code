import { useCommander } from '../plugins/command.plugin';
import { VisualEditorBlockData, VisualEditorModelValue } from '../visual-editor.utils';
import deepcopy from 'deepcopy';
export function useVisualCommand(
  {
    focusData,
    updateBlocks,
    dataModel,
    dragstart,
    dragend

  }: {
    focusData: { value: { focus: VisualEditorBlockData[], unFocus: VisualEditorBlockData[] } },
    updateBlocks: (blocks: VisualEditorBlockData[]) => void,
    dataModel: { value: VisualEditorModelValue },
    dragstart: { on: (cb: () => void) => void, off: (cb: () => void) => void },
    dragend: { on: (cb: () => void) => void, off: (cb: () => void) => void },
  }
) {
  const commander = useCommander();
  commander.registry({
    name: 'delete',
    keyboard: [
      'backspace', 'delete', 'ctrl+d'
    ],
    execute: () => {
      console.log('执行删除操作');

      let data = {
        before: dataModel.value.blocks || [],
        after: focusData.value.unFocus,
      }


      return {
        redo: () => {
          console.log('重做删除命令');
          updateBlocks(deepcopy(data.after))
        },
        undo: () => {

          console.log('撤回删除命令');
          // data.before = dataModel.value.blocks || []
          // const {focus,unFocus} = focusData.value;
          updateBlocks(deepcopy(data.before));
          // data.after = unFocus;

        },

      }
    }
  })
  commander.registry({
    name: 'drag',
    init(){
       this.data = {
        before: null as null | VisualEditorBlockData[],
        // after: null as null | VisualEditorBlockData[],
      }
      const handler = {
        dragstart:()=>this.data.before = deepcopy(dataModel.value.blocks||[]),
        dragend:()=>  commander.state.commands.drag()
        
      }
      dragstart.on(handler.dragstart)
      dragend.on(handler.dragend)
      return () => {
        dragstart.off(handler.dragstart)
        dragend.off(handler.dragend)
      }
    },
    execute() {
      let before = this.data.before;
      let after = deepcopy(dataModel.value.blocks||[])
      return {
        redo: () => {
          updateBlocks(deepcopy(after))
         },
        undo: () => {
          updateBlocks(deepcopy(before))
        },
        
      }
    }
  })
  commander.registry({
    name:'clear',
    execute:()=>{
      let data = {
        before: deepcopy(dataModel.value.blocks),
        after:deepcopy([])
      }
      return {
        redo:()=>{
          updateBlocks(deepcopy(data.after))
        },
        undo:()=>{
          updateBlocks(deepcopy(data.before||[]))
        }
      }
    }
  })
  commander.registry({
    name:'placeTop',
    keyboard:'ctrl+up',
    execute:()=>{
      let data = {
        before:deepcopy(dataModel.value.blocks),
        after:deepcopy((()=>{
          const {focus,unFocus} = focusData.value;
          const maxZIndex = unFocus.reduce((prev,block)=>{
            return Math.max(prev,block.zIndex)
          },0) +1;
          focus.forEach(block=>block.zIndex=maxZIndex)
          return deepcopy(dataModel.value.blocks)
        })())
      }
      return{
        redo:()=>{
          updateBlocks(deepcopy(data.after||[]))
        },
        undo:()=>{
          updateBlocks(deepcopy(data.before||[]))
        }
      }
    }
  })
  commander.registry({
    name: 'placeBottom',
    keyboard: 'ctrl+down',
    execute: () => {
      let data = {
        before: deepcopy(dataModel.value.blocks),
        after: deepcopy((() => {
          const { focus, unFocus } = focusData.value;
          let minZIndex = unFocus.reduce((prev, block) => {
            return Math.min(prev, block.zIndex)
          }, Infinity) -1;
          if(minZIndex<0){
            const dur = Math.abs(minZIndex)
            unFocus.forEach(block=>block.zIndex+=dur)
            minZIndex=0
          }
          focus.forEach(block => block.zIndex = minZIndex)
          return deepcopy(dataModel.value.blocks)
        })())
      }
      return {
        redo: () => {
          updateBlocks(deepcopy(data.after||[]))
        },
        undo: () => {
          updateBlocks(deepcopy(data.before||[]))
        }
      }
    }
  })

  commander.registry({
    name:'udateBlock',
    execute: (newBlock: VisualEditorBlockData, oldBlock: VisualEditorBlockData)=>{
      let blocks = deepcopy(dataModel.value.blocks||[])
      let data = {
        before:deepcopy(dataModel.value.blocks),
        after:(()=>{
          blocks = [...blocks]
          const index = dataModel.value.blocks!.indexOf(oldBlock);
          if(index>-1){
            blocks.splice(index,1,newBlock)
          }
          return deepcopy(blocks)
        })()
      }
      return {
        redo:()=>{
          updateBlocks(deepcopy(data.after))
        },
        undo:()=>{
          updateBlocks(deepcopy(data.before||[]))
        }
      }

    }
  })
  commander.registry({
    name:'updateModelValue',
    execute:(val:VisualEditorModelValue)=>{
      let data = {
        before:deepcopy(dataModel.value),
        after:deepcopy(val)
      }
     return {
       redo: () => { 
         dataModel.value = data.after
       },
       undo:()=>{
         dataModel.value = data.before;
       }
     }

    }
  })
  commander.init()
  return {
    undo: () => commander.state.commands.undo(),
    redo: () => commander.state.commands.redo(),
    delete: () => commander.state.commands.delete(),
    clear:()=> commander.state.commands.clear(),
    placeTop: () => commander.state.commands.placeTop(),
    placeBottom: () => commander.state.commands.placeBottom(),
    updateBlock: (newBlock: VisualEditorBlockData, oldBlock: VisualEditorBlockData) => commander.state.commands.udateBlock(newBlock, oldBlock),
    updateModelValue: (val:VisualEditorModelValue) => commander.state.commands.updateModelValue(val),

  }
}