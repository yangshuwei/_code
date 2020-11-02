import { mergeOptions } from "../util";

export default function initExtend(Vue) {
  Vue.extend = function (extendOptions) {
    const Super = this;
    const Sub = function VueComponent(options) {
      console.log(options)
      this._init(options)
    }
    // 子类要继承父类原型上的方法, 原型继承
    Sub.prototype = Object.create(Super.prototype);
    Sub.prototype.constructor = Sub;
    Sub.options = mergeOptions(Super.options, extendOptions);
    Sub.components = Super.components;
    return Sub;
  }
}

//组件渲染流程
//1.调用Vue.component
//2.内部调用Vue.extend 产生一个子类继承父类
//3.等会创建子类实例时会调用父类的_init方法，再$mount
//4.组件的初始化就是 new这个组件的构造函数并且调用$mount方法