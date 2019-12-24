import Vue from 'vue'
import VueRouter from 'vue-router'
// router-views
const Root = () => import('@/views/Root.vue')
const User = () => import('@/views/User.vue')

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
  },
  {
    path: '/user',
    name: 'User',
    component: User,
    beforeRouteEnter(to, from, next) {
      console.log('to', to)
      next()
    },
    children: [
      {
        path: '/build',
        component: () => import('@/views/user/ships/FleetBuilder.vue')
      },
    ]
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
