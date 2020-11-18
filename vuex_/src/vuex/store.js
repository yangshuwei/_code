let Vue;

export class Store {
	constructor(options) {
		const state = options.state;

		this._vm = new Vue({
			data: {
				$$state: state
			}
		})

		this.mutations = options.mutations;
		Object.keys(this.mutations).forEach((key) => {
			console.log(key)
			Object.defineProperty(this.mutations, key, {
				get: () => {
					return key(state, payload)
				}
			})
		})
	}
	get state() {
		return this._vm._data.$$state
	}
	commit(type, payload) {
		this.mutations[type](state, payload)
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