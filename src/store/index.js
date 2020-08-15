import Vue from 'vue';
import Vuex from 'vuex';
import location from './modules/loacation';
import contact from './modules/contact';
import user from './modules/user';
import blog from './modules/blog';
import response from './modules/response';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        location,
        contact,
        user,
        blog,
        response
    }
});