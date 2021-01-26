import { reactive } from 'vue';

export interface CommandExecute {
  undo?: () => void,
  redo: () => void,
}
export interface Command {
  name: string, //命令唯一标识
  keyboard?: string | string[], //命令快捷键
  execute: (...args: any[]) => CommandExecute, //执行命令函数
  followQueue?: boolean,//执行完毕后是否将undo，redo存到队列
}

export function useCommander() {
  let state = reactive({
    current: -1,
    queue: [] as CommandExecute[],
    commands: {} as Record<string, (...args: any[]) => void>, //key是字符串，值是Command对象
  })
  const registry = (command: Command) => {
    state.commands[command.name] = (...args) => {
      const { undo, redo,} = command.execute(...args);
      redo()
      if(command.followQueue==false){
        return
      }
      
      let {queue,current} = state;
      if(queue.length>0){
        queue = queue.slice(0,current+1);
        state.queue = queue;
      }
      queue.push({undo,redo});
      state.current = current+1
    }

  }
  registry({
    name: 'undo',
    keyboard: 'ctrl+z',
    followQueue: false,
    execute: () => {
      return {
        redo: () => { //重做
          if(state.current === -1){
            return;
          }
          const queueItem = state.queue[state.current];
          if(!!queueItem){
            !!queueItem.undo && queueItem.undo();
            state.current--;
          }
          // let { current } = state;
          // if (current === -1) return;
          // const { undo } = state.queue[current];
          // !!undo && undo();
          // state.current --;
        },
      }
    }
  })

  registry({
    name:'redo',
    keyboard:[
      'ctrl+y',
      'ctrl+shift+z'
    ],
    followQueue:false,
    execute:()=>{
      return {
        redo:()=>{
          const queueItem = state.queue[state.current +1];
          if(!!queueItem){
            queueItem.redo();
            state.current++;
          }
          // let {current} = state;
          // if(!state.queue[current]) return;
          // const {redo} = state.queue[current+1];
          // redo();
          // state.current++;
        }
      }
    }
  })
  return {
    state,
    registry
  }
}



export interface CommandManager {
  queue: CommandExecute[],
  current: number
}