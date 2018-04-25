import Vue from 'vue'
import Router from 'vue-router'

import Home from '@/views/Home'
import Artists from '@/views/Artists'
import Artist from '@/views/Artist'
import Releases from '@/views/Releases'
import ReleaseItem from '@/views/ReleaseItem'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/artists',
            name: 'artists',
            component: Artists
        },
        {
            path: '/artist',
            name: 'artist',
            component: Artist
        },
        {
            path: '/releases',
            name: 'releases',
            component: Releases
        },
        {
            path: '/release',
            name: 'ReleaseItem',
            component: ReleaseItem
        }
    ]
})
