const state = {
    message: ""
}
const getters = {
    getmessage: state => state.message
}
const actions = {
    changemessage({ commit }, message) {
        commit("setmessgae", message)
    }
}
const mutations = {
    setmessgae: (state, m) => state.message = m,
}


export default {
    state,
    actions,
    mutations,
    getters
}