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
            path: '/panel/board',
            name: 'board',
            component: () => import ('../views/panel/Board.vue'),
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import ('../views/Login.vue'),
        },
        {
          path: '/panel/categories',
          name: 'categories',
          component: () => import ('../views/panel/Category.vue')
        },
        {
          path: '/panel/stores',
          name: 'stores',
          component: () => import ('../views/panel/Stores.vue')
        },
        {
          path: '/panel/taxes',
          name: 'taxes',
          component: () => import ('../views/panel/Tax.vue')
        },
        {
          path: '/panel/suppliers',
          name: 'suppliers',
          component: () => import ('../views/panel/Supplier.vue')
        },
        {
          path: '/panel/item/new',
          name: 'item.new',
          component: () => import ('../views/panel/ItemNew.vue')
        },
        {
          path: '/panel/item/:id',
          name: 'item.edit',
          component: () => import ('../views/panel/ItemNew.vue')
        },
        {
          path: '/panel/items',
          name: 'items',
          component: () => import ('../views/panel/Items.vue')
        },
        {
          path: '/panel/stock',
          name: 'stock',
          component: () => import ('../views/panel/Stock.vue')
        },
        {
          path: '/panel/movement/new',
          name: 'movement.new',
          component: () => import ('../views/panel/MovementNew.vue')
        },
        {
          path: '/panel/movements',
          name: 'movements',
          component: () => import ('../views/panel/Movements.vue')
        },
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
