import { useCommander } from '../plugins/command.plugin';
import { VisualEditorBlockData, VisualEditorModelValue } from '../visual-editor.utils';

export function useVisualCommand(
  {
    focusData,
    updateBlocks,
    dataModel,
  }:{
    focusData:{value:{focus:VisualEditorBlockData[],unFocus:VisualEditorBlockData[]}},
    updateBlocks:(blocks:VisualEditorBlockData[])=>void,
      dataModel: { value: VisualEditorModelValue}
  }
){
  const commander = useCommander();
  commander.registry({
    name:'delete',
    keyboard:[
      'backspace','delete','ctrl+d'
    ],
    execute:()=>{
      console.log('执行删除操作');
      
      let data = {
        before:dataModel.value.blocks||[],
        after:focusData.value.unFocus,
      }
     
      
      return{
        redo: () => {
          console.log('重做删除命令');
          updateBlocks(data.after)
        },
        undo:()=>{
          
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
    name:'updateBlocks',
    execute:(blocks:VisualEditorBlockData[])=>{
      let data = {
        before: deepcopy(dataModel.value.blocks||[]),
        after: deepcopy(blocks),
      }
    }
  })
  return {
    undo:()=>commander.state.commands.undo(),
    redo:()=>commander.state.commands.redo(),
    delete:()=>commander.state.commands.delete()
  }
}