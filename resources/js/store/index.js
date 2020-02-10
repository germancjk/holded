import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taxes: [],
    stores: [],
    suppliers: [],
    categories: [],
    baseApiUrl: 'http://localhost:8000',
  },
  mutations: {
    loadCategories (state) {
      let token = localStorage.getItem('jwt')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.get(`${state.baseApiUrl}/api/category`).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.categories = [...data]
      })
    },
    loadStores (state) {
      let token = localStorage.getItem('jwt')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.get(`${state.baseApiUrl}/api/store`).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.stores = [...data]
      })
    },
    loadSuppliers (state) {
      let token = localStorage.getItem('jwt')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.get(`${state.baseApiUrl}/api/supplier`).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.suppliers = [...data]
      })
    },
    loadTaxes (state) {
      let token = localStorage.getItem('jwt')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.get(`${state.baseApiUrl}/api/tax`).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.taxes = [...data]
      })
    },
  },
  actions: {
    getCategories ({ commit }) {
      commit('loadCategories')
    },
    getStores ({ commit }) {
      commit('loadStores')
    },
    getTaxes ({ commit }) {
      commit('loadTaxes')
    },
    getSuppliers ({ commit }) {
      commit('loadSuppliers')
    },
  },
  modules: {
    //
  },
  getters: {
    categories (state) {
      return state.categories
    },
    stores (state) {
      return state.stores
    },
    taxes (state) {
      return state.taxes
    },
    suppliers (state) {
      return state.suppliers
    },
    baseApiUrl (state) {
      return state.baseApiUrl
    },
  }
})
