import Vue from 'vue';
import Vuex from 'vuex';
import location from './modules/loacation';
import contact from './modules/contact';

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        location,
        contact
    }
});