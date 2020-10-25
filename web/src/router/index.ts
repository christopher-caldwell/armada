import Vue from 'vue'
import VueRouter, { RouteConfig } from 'vue-router'

Vue.use(VueRouter)

// const isRunningLocally = process.env.NODE_ENV !== 'production'
const Root = () => import('@/views/Root.vue')
const User = () => import('@/views/User.vue')

Vue.use(VueRouter)

const routes: Array<RouteConfig> = [
  {
    path: '/',
    name: 'Root',
    component: Root,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    beforeEnter(to, from, next) {
      console.log('to', to)
      next()
    },
    children: [],
  },
  {
    path: '/build',
    name: 'FleetBuild',
    component: () => import('@/views/user/ships/FleetBuilder.vue'),
  },
  {
    path: '/upgrades',
    name: 'Upgrades',
    component: () => import('@/views/user/ships/Upgrades.vue'),
  },
]

export default new VueRouter({
  mode: 'history',
  routes,
})
