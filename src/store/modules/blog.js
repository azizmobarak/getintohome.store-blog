const state = {
    list: []
}
const getters = {
    getlist: state => state.list
}
const actions = {
    async addtolist({ commit }) {
        var obj = [{
                name: "user name 2",
                picture: "https://google.com 2",
                text: "hello this is a few word about what people like to hear about! 2"
            }, {
                name: "user name 2",
                picture: "https://google.com 2",
                text: "hello this is a few word about what people like to hear about! 2"
            }, {
                name: "user name 2",
                picture: "https://google.com 2",
                text: "hello this is a few word about what people like to hear about! 2"
            },
            {
                name: "user name",
                picture: "https://google.com",
                text: "hello this is a few word about what people like to hear about!"
            }
        ];
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