const state = {
    email: "",
    subject: "",
    message: "",
}
const getters = {
    getemail: state => state.email,
    getsubject: state => state.subject,
    getmessage: state => state.message,
}
const actions = {
    async changeemail({ commit }, e) {
        commit("setemail", e);
    },
    async changesubject({ commit }, e) {
        commit("setsubject", e);
    },
    async changemessage({ commit }, e) {
        commit("setmessage", e);
    },
}
const mutations = {
    setemail: (state, e) => state.email = e,
    setsubject: (state, e) => state.subject = e,
    setmessage: (state, e) => state.message = e,
}

export default {
    state,
    actions,
    getters,
    mutations
}