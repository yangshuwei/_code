import { mergeOptions } from "../util";
import initExtend from "./extend";

export function initGlobalApi(Vue) {
  Vue.options = {};
  Vue.mixin = function (mixin) {
    this.options = mergeOptions(this.options, mixin)
    // console.log(this.options)
  }
  initExtend(Vue);
  Vue.options._base = Vue; // _base 最终的Vue的构造函数我保留在options对象中
  Vue.options.components = {} //全局组件
  Vue.component = function (id, definition) {
    definition.name = definition.name || id;
    // 根据当前组件对象 生成了一个子类的构造函数
    // 用的时候得 new definition().$mount()
    definition = this.options._base.extend(definition) //就是extend中的Sub类

    // Vue.component 注册组件 等价于  Vue.options.components[id] = definition
    Vue.options.components[id] = definition;
  }
}