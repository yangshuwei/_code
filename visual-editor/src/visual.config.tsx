import { createVisualEditorConfig } from "./packages/visual-editor.utils";
import {ElButton,ElInput} from 'element-plus'
import { createEditorColorProp, createEditorInputProp, createEditorSelectProp } from "./packages/visual-editor-props";
export const visualConfig = createVisualEditorConfig();
visualConfig.registry('text',{
  label:'文本',
  preview:()=>'预览文本',
render:({props})=><span style={{color:props.color,fontSize:props.size}} >{props.text||'默认文本'}</span>,
  props:{
    text:createEditorInputProp('显示文本'),
    color:createEditorColorProp('字体颜色'),
    size:createEditorSelectProp('字体大小',[
      {label:'14px',val:'14px'},
      {label:'18px',val:'18px'},
      {label:'20px',val:'20px'}
    ])
  }
})
visualConfig.registry('button', {
  label: '按钮',
  preview: () => <ElButton>按钮</ElButton>,
  render: ({props}) => <ElButton type={props.type} size={props.size}>{props.text||'按钮'}</ElButton>,
  props:{
    text:createEditorInputProp('显示文本'),
    type:createEditorSelectProp('按钮类型',[
      { label: '基础', val:'primary'},
      { label: '成功', val:'success'},
      { label: '警告', val:'warning'}
    ]),
    size:createEditorSelectProp('按钮大小',[
      {label:'默认',val:'14px'},
      {label:'中等',val:'medium'},
      {label:'小',val:'small'}
    ])
  },
})

visualConfig.registry()
visualConfig.registry('input', {
  label: '输入框',
  preview: () => <ElInput />,
  render: () => <ElInput />
})