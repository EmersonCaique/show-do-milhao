import store from './store'
import router from './router'

window.Vue = require('vue');

Vue.component('home', require('./pages/Home.vue').default)
Vue.component('quiz', require('./pages/Quiz.vue').default)
Vue.component('app', require('./App.vue').default)


const app = new Vue({
    el: '#app',
    store,
    router
});
