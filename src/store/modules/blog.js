const state = {
    list: []
}
const getters = {
    getlist: state => state.list
}
const actions = {
    async addtolist({ commit }) {

        var obj = [];
        await fetch("http://localhost:2222/scrap", {
                method: "post"
            })
            .then(response => response.json())
            .then(data => obj = data);
        console.log(obj)
        commit('setlist', obj)
    }
}
const mutations = {
    setlist: (state, arr) => state.list = arr,
}

export default ({
    state,
    getters,
    actions,
    mutations
})