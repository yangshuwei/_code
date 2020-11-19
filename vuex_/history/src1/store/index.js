import Vue from 'vue'
import Vuex from '../vuex/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		age: 30
	},
	getters: {
		myAge(state) {
			console.log(1)
			return state.age + 20
		}
	},
	mutations: {
		changeAge(state, payload) {
			state.age += payload
		}
	},
	actions: {
		changeAge({
			commit
		}, payload) {
			setTimeout(() => {
				commit('changeAge', payload)
			}, 1000)

		}
	},
	modules: {}
})