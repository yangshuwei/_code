import createRouteMap from "./create-route-map"
import { createRoute } from './history/base'
export default function createMatcher(routes) {
  // 收集所有的路由路径, 收集路径的对应渲染关系
  // pathMap = {'/':'/的记录','/about':'/about记录'...}
  let { pathMap } = createRouteMap(routes); //把路由扁平化  多层级的路由数组 变成一层的对象
  function addRoutes(routes) {  //手动添加的路由要与原来的pathMap进行合并
    createRouteMap(routes, pathMap)
  }
  function match(location) {
    let record = pathMap[location]
    if (record) {
      return createRoute(record,{
        path:location
      })
    }

    return createRoute(null, {
      path: location
    })
  }

  return {
    addRoutes,
    match
  }
}