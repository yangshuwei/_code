import { initGlobalApi } from './global-api/index';
import {initMixin} from './init'
import { lifecycleMixin } from './lifecycle';
import { renderMixin } from './vdom/index';

function Vue(options){
    this._init(options) //入口方法，进行初始化
}
initMixin(Vue) //写成一个插件 对原型进行扩展
lifecycleMixin(Vue)
renderMixin(Vue)
initGlobalApi(Vue)
export default Vue;