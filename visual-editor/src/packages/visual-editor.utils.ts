
import { VisualEditor } from './visual-editor';

export interface VisualEditorBlockData {
  top: number,
  left: number
}


export interface VisualEditorModelValue {
  container: {
    width: number,
    height: number
  },
  blocks: VisualEditorBlockData[]
}
export interface VisualEditorComponent { //自定义组件类型
  key: string,
  label: string,
  preview: () => JSX.Element;
  render: () => JSX.Element;
}

export function createVisualEditorConfig() {
  const componentList: VisualEditorComponent[] = []; //将自定义的组件保存起来
  const componentMap: Record<string, VisualEditorComponent> = {}; //通过map映射表  通过name来查找对应组件
  return {
    componentList,
    componentMap,
    registry: (key: string, component: Omit<VisualEditorComponent, 'key'>) => { //注册组件
      let comp = { ...component, key };
      componentList.push(comp);
      componentMap[key] = comp;
    },
  }
}
export type VisualEditorConfig = ReturnType<typeof createVisualEditorConfig>