import React from 'react';
import RouterContext from './RouterContext';
import matchPath from './matchPath';
//Switch 是为了路由匹配的优化，如果不加Switch的话 配置多少个Route 在初始化或者跳转的时候  所有的Route都会被匹配到一次
// 这样比较浪费性能 其中Switch包裹一层后，所有的Route都是他的儿子们，遍历儿子们，只要其中某一个儿子匹配上了就返回，后面的儿子路由就不会被触发
class Switch extends React.Component {
  static contextType = RouterContext;
  render() {
    const { location, history } = this.context;
    let { children } = this.props;
    children = Array.isArray(children) ? children : [children];
    for (let i = 0; i < children.length; i++) {
      console.log('match')
      let match = matchPath(location.pathname, children[i].props);
      if (match)
        //react中  element props 是只读的不能被修改  （Object.frazz()冻住了）所以想要增假额外的属性要通过cloneElement包装一层
        return React.cloneElement(children[i], { ...children[i].props, computedMatch: match })
    }
    return null;
  }
}

export default Switch;