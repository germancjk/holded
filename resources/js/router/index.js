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
        },
        {
          path: '/stores',
          name: 'stores',
          component: () => import ('../views/Stores.vue')
        },
        {
          path: '/taxes',
          name: 'taxes',
          component: () => import ('../views/Tax.vue')
        },
        {
          path: '/suppliers',
          name: 'suppliers',
          component: () => import ('../views/Supplier.vue')
        },
        {
          path: '/item',
          name: 'item.new',
          component: () => import ('../views/Item.vue')
        },
        {
          path: '/item/:id',
          name: 'item.edit',
          component: () => import ('../views/Item.vue')
        },
        {
          path: '/items',
          name: 'items',
          component: () => import ('../views/Items.vue')
        },
        {
          path: '/stock',
          name: 'stock',
          component: () => import ('../views/Stock.vue')
        },
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
