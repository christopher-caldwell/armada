import Vue from 'vue'
import VueRouter from 'vue-router'
// router-views
const Root = () => import('@/views/Root.vue')
const Visitor = () => import('@/views/Visitor.vue')
const User = () => import('@/views/User.vue')

// visitors
const Login = () => import('@/views/visitor/Login.vue')
const Register = () => import('@/views/visitor/Register.vue')
const ForgotPassword = () => import('@/views/visitor/ForgotPassword.vue')

// authenticated
const Profile = () => import('@/views/user/Profile.vue')



Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Root',
    component: Root,
  },
  {
    path: '/visitor',
    name: 'Visitor',
    component: Visitor,
    children: [
      {
        path: '/register',
        name: 'Register',
        component: Register
      },
      {
        path: '/login',
        name: 'Login',
        component: Login
      },
      {
        path: '/forgot-password',
        name: 'ForgotPassword',
        component: ForgotPassword
      },
    ]
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
        path: '/profile',
        component: Profile
      },
    ]
  },
]

export default new VueRouter({
  mode: 'history',
  routes
})
