import {
	forEachValue
} from './util'
import ModeluCollection from './module/module-collection'
let Vue;
function installModule(store, rootState, path, module) {

	const namespace = store._modules.getNamespaced(path)

	if (path.length > 0) {
		let parent = path.slice(0, -1).reduce((memo, current) => {
			return memo[current]
		}, rootState)
		Vue.set(parent, path[path.length - 1], module.state)
	}

	module.forEachMutation((mutation, key) => {
		store._mutations[namespace + key] = (store._mutations[namespace + key] || []);
		store._mutations[namespace + key].push((payload) => {
			mutation.call(store, module.state, payload)
		})
	})

	module.forEachAction((action, key) => {
		store._actions[namespace + key] = (store._actions[namespace + key] || []);
		store._actions[namespace + key].push((payload) => {
			action.call(store, store, payload)
		})
	})

	module.forEachGetter((getter, key) => {
		store._wrappedGetters[namespace + key] = function () {
			return getter(module.state)
		}
	})

	module.forEachChild((child, key) => {
		installModule(store, rootState, path.concat(key), child)
	})
}

function resetStoreVM(store, state) {
	const computed = {};
	store.getters = {};

	forEachValue(store._wrappedGetters, (fn, key) => {
		computed[key] = () => {
			return fn()
		}
		Object.defineProperty(store.getters, key, {
			get: () => store._vm[key]
		})
	})


	store._vm = new Vue({
		data: {
			$$state: state
		},
		computed
	})
}
export class Store {
	
	constructor(options) {
		debugger
		const state = options.state;
		this._actions = {}
		this._mutations = {}
		this._wrappedGetters = {}
		// const computed = {}
		// this.getters = {};
		
		this._modules = new ModeluCollection(options);
		// console.log(this._modules)

		installModule(this, state, [], this._modules.root)


		resetStoreVM(this, state)
		// forEachValue(options.getters, (fn, key) => {
		// 	computed[key] = () => {
		// 		return fn(this.state)
		// 	}
		// 	Object.defineProperty(this.getters, key, {
		// 		get: () => this._vm[key]
		// 		// get() {
		// 		// 	return options.getters[key](state)
		// 		// }
		// 	})
		// })

		// this._vm = new Vue({
		// 	data: {
		// 		$$state: state,
		// 	},
		// 	computed
		// })
		// // export const forEachValue = (obj, callback) => {
		// // 	Object.keys(obj).forEach(key => callback(obj[key], key));
		// // }



		// this.mutations = {}
		// this.actions = {}
		// //订阅
		// forEachValue(options.mutations, (fn, key) => {

		// 	this.mutations[key] = (payload) =>
		// 		fn(this.state, payload)

		// })

		// forEachValue(options.actions, (fn, key) => {
		// 	this.actions[key] = (payload) => fn(this, payload)
		// })
	}
	get state() {
		return this._vm._data.$$state
	}

	// changeAge:(payload)

	commit = (type, payload) => {
		//发布
		this._mutations[type].forEach(mutation => mutation.call(this, payload))
	}
	dispatch = (type, payload) => {
		this._actions[type].forEach(action => action.call(this, payload))
	}
}



export const install = (_Vue) => {
	Vue = _Vue;
	Vue.mixin({
		beforeCreate() {
			const options = this.$options;
			if (options.store) {
				this.$store = options.store;
			} else if (options.parent && options.parent.$store) {
				this.$store = options.parent.$store
			}

		}
	})
}