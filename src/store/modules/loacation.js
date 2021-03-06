const state = {
    location: "Home",
    btnname: ""
}
const getters = {
    getlocation: state => state.location,
    getbtnname: state => state.btnname
}
const actions = {
    async locationname({ commit }) {
        var url = window.location.toString();
        var location = url.slice(8, url.length);
        var directory = location.slice(location.indexOf("/") + 1, location.length);
        if (directory === "contact") {
            directory = "Welcome to Contact page , feel free to contact us Now!"
        } else {
            if (directory === "login") {
                directory = "Login to your account Now! and get in touch with world!"
            } else {
                if (directory === "register") {
                    directory = "Welcome to your App , let's create New Account to discover more!"
                } else {
                    if (directory === "blog") {
                        directory = "blog";
                    } else {
                        directory = "Welcome to GetIntoHome Blog site!"
                    }
                }

            }
        }
        commit('setlocation', directory);
    },
    changebtnname({ commit }) {
        if (state.location === "blog") {
            commit("setbtnname", "Logout!");
        } else {
            commit("setbtnname", "Join!")
        }
    }
}
const mutations = {
    setlocation: (state, location) => state.location = location,
    setbtnname: (state, name) => state.btnname = name,
}

export default ({
    state,
    getters,
    actions,
    mutations
})