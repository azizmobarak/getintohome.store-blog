import Vue from 'vue'
import App from './App.vue'
import Vuerouter from 'vue-router';
import Home from './components/Home.vue';
import Contact from './components/Contact.vue';
import store from './store';
import Login from './components/Login.vue';
import Register from './components/Register.vue';
import Blog from './components/Blog.vue';
import test from './components/test.vue';

Vue.use(Vuerouter);

const routes = [
    { path: "/", name: "home", component: Home },
    { path: '/contact', name: "contact", component: Contact },
    { path: "/login", name: "login", component: Login },
    { path: "/register", name: "register", component: Register },
    { path: "/blog", name: "blog", component: Blog },
    { path: "/test", name: "test", component: test }
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