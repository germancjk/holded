import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Welcome'

Vue.use(VueRouter)

const routes = [
        {
            path: '/',
            name: 'home',
            component: Home
        },
        {
            path: '/login',
            name: 'login',
            component: () => import ('../views/Login.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import ('../views/Register.vue'),
        },
        {
            path: '/board',
            name: 'board',
            component: () => import ('../views/Board.vue'),
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import ('../views/Login.vue'),
        },
        {
          path: '/categories',
          name: 'categories',
          component: () => import ('../views/Category.vue')
        }
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router