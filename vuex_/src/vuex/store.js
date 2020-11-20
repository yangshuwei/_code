import {
	forEachValue
} from './util'
import ModeluCollection from './module/module-collection'
let Vue;

export class Store {
	constructor(options) {
		const state = options.state;
		// const computed = {}
		// this.getters = {};

		this._modules = new ModeluCollection(options);
		console.log(this._modules)
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
		this.mutations[type](payload)
	}
	dispatch = (type, payload) => {
		this.actions[type](payload)
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