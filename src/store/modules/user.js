const state = {
    email: "",
    password: "",
    name: "",
}
const getters = {
    getemail: state => state.email,
    getpassword: state => state.password,
    getname: state => state.name
}
const actions = {
    changeemail({ commit }, e) {
        commit('setemail', e.target.value);
    },
    changepassword({ commit }, e) {
        commit('setpassword', e.target.value);
    },
    changename({ commit }, e) {
        commit('setname', e.target.value);
    },
}
const mutations = {
    setemail: (state, e) => state.email = e,
    setpassword: (state, e) => state.password = e,
    setname: (state, e) => state.name = e,
}

export default ({
    state,
    getters,
    actions,
    mutations
})