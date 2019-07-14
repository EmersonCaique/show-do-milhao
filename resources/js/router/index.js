import VueRouter from 'vue-router'
import Vue from  'vue'
import Home from '../pages/Home'
import Quiz from '../pages/Quiz'
import Score from '../pages/Score'
import SaberMais from '../pages/SaberMais'


Vue.use(VueRouter)

export default new VueRouter({
    mode: 'history',
    routes:[
        {
            path: '',
            component: Home
        },
        {
            path: '/quiz',
            component: Quiz
        },
        {
            path: '/score',
            component: Score
        },
        {
            path: '/sabe-mais',
            component: SaberMais
        }
    ]
})
