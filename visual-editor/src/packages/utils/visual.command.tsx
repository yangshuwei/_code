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
          updateBlocks(data.after)
        },
        undo: () => {

          console.log('撤回删除命令');
          // data.before = dataModel.value.blocks || []
          // const {focus,unFocus} = focusData.value;
          updateBlocks(data.before);
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
        after: null as null | VisualEditorBlockData[],
      }
      const handler = {
        dragstart:()=>this.data.before = deepcopy(dataModel.value.blocks||[]),
        dragend:()=>this.data.after = commander.state.commands.drag()
        
      }
      dragstart.on(handler.dragstart)
      dragend.on(handler.dragend)
      return () => {
        dragstart.off(handler.dragstart)
        dragend.off(handler.dragend)
      }
    },
    execute: () => {
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
  commander.init()
  return {
    undo: () => commander.state.commands.undo(),
    redo: () => commander.state.commands.redo(),
    delete: () => commander.state.commands.delete()
  }
}