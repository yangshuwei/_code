export default {
	state: {
		age: 30
	},
	getters: {
		myAge(state) {
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
}