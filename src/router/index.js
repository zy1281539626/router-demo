import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/token',
    name: 'Token', // token列表
    component: () => import('../views/Token.vue')
  },
  {
    path: '/token-manage',
    name: 'TokenManage', // token列表
    component: () => import('../views/Manage.vue'),
    children: [
      {
        path: ':ticker/aa',
        name: 'AA',
        component: () => import('../views/AA.vue')
      },
      {
        path: ':ticker/bb',
        name: 'BB',
        component: () => import('../views/BB.vue')
      }
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

export default router
