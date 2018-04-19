import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Artists from '@/views/Artists'
import Artist from '@/views/Artist'
import Releases from '@/views/Releases'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/artists',
            name: 'Artists',
            component: Artists
        },
        {
            path: '/artist',
            name: 'Artist',
            component: Artist
        },
        {
            path: '/releases',
            name: 'Releases',
            component: Releases
        }
    ]
})
