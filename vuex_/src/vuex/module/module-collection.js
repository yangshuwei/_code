import {
	forEachValue
} from '../util'
class ModeluCollection {
	constructor(options) {
		this.register([], options);
	}
	register(path, rootModule) {
		let newModule = {
			_raw: rootModule,
			_children: {},
			state: rootModule.state
		}
		if (path.length == 0) {
			this.root = newModule;
		} else {
			let parent = path.slice(0, -1).reduce((memo, current) => {
				return memo._children[current]
			}, this.root)
			parent._children[path[path.length - 1]] = newModule
		}

		if (rootModule.modules) {
			forEachValue(rootModule.modules, (module, moduleName) => {
				this.register(path.concat(moduleName), module)
			})
		}
	}
}

export default ModeluCollection;



// /**
//  * this.root = {
//  *    _raw: '根模块',
//  *    _children:{
//  *        a:{
//  *          _raw:"a模块",
//  *          _children:{
//  *              c:{
//  *                  .....
//  *              }
//  *          },
//  *          state:'a的状态'  
//  *        },
//  *        b:{
//  *          _raw:"b模块",
//  *          _children:{},
//  *          state:'b的状态'  
//  *        }
//  *    },
//  *    state:'根模块自己的状态'
//  * }
//  * /