import Vue from 'vue'
import Router from 'vue-router'
import intro from '@/components/intro.vue'
import main from '@/components/main.vue'
import signup from '@/components/signup.vue'
import whatisit from '@/components/whatisit.vue'
import FAQ from '@/components/FAQ.vue'
import weather from '@/components/weather.vue'
import recommend from '@/components/recommend.vue'
import trend from '@/components/trend.vue'


Vue.use(Router)

export default new Router({
    routes: [{
            path: '/',
            name: 'intro',
            component: intro
        },
        {
            path: '/main',
            name: 'main',
            component: main
        },
        {
            path: '/signup',
            name: 'signup',
            component: signup
        },
        {
            path: '/whatisit',
            name: 'whatisit',
            component: whatisit
        },
        {
            path: '/FAQ',
            name: 'FAQ',
            component: FAQ
        },
        {
            path: '/weather',
            name: 'weather',
            component: weather
        },
        {
            path: '/recommend',
            name: 'recommend',
            component: recommend
        },
        {
            path: '/trend',
            name: 'trend',
            component: trend
        }
    ]
})