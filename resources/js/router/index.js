import Vue from 'vue'
import VueRouter from 'vue-router'
import Welcome from '../views/Welcome'

Vue.use(VueRouter)

const routes = [
        {
            path: '/',
            name: 'home',
            component: Welcome
        },
        {
            path: '/login',
            name: 'login',
            component: () => import ('../views/Login.vue'),
        },
        {
            path: '/logout',
            name: 'logout',
            component: () => import ('../views/Logout.vue'),
        },
        {
            path: '/register',
            name: 'register',
            component: () => import ('../views/Register.vue'),
        },
        {
            path: '/forgot',
            name: 'forgot',
            component: () => import ('../views/Forgot.vue'),
        },
        {
            path: '/panel/board',
            name: 'board',
            component: () => import ('../views/panel/Board.vue'),
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
        // movements
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
        {
          path: '/panel/movement/:id',
          name: 'movement',
          component: () => import ('../views/panel/Movement.vue')
        },
        // sales
        {
          path: '/panel/sales',
          name: 'sales',
          component: () => import ('../views/panel/Sales.vue')
        },
        {
          path: '/panel/sales/new',
          name: 'sales.new',
          component: () => import ('../views/panel/SalesNew.vue')
        },
        {
          path: '/panel/sale/:id',
          name: 'sale',
          component: () => import ('../views/panel/Sale.vue')
        },
        // profile
        {
          path: '/panel/profile',
          name: 'profile',
          component: () => import ('../views/panel/Profile.vue')
        },
        // pages
        {
          path: '/about',
          name: 'about',
          component: () => import ('../views/About.vue')
        },
        {
          path: '/prices',
          name: 'prices',
          component: () => import ('../views/Prices.vue')
        },
    ]

const router = new VueRouter({
  mode: 'history',
  routes
})

export default router
