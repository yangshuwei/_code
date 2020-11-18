import Vue from 'vue'
import Vuex from '../vuex/index.js'

Vue.use(Vuex)

export default new Vuex.Store({
	state: {
		age: 30
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
			commit('changeAge', payload)
		}
	},
	modules: {}
})