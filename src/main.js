import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import store from './store';

Vue.use(Vuerouter);

const routes = [
    { path: "/", component: Home },
    { path: '/contact', component: Contact }
]

const router = new Vuerouter({
    routes,
    mode: "history"
});

Vue.config.productionTip = false

new Vue({
    store,
    router,
    render: h => h(App),
}).$mount('#app')