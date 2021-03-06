import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    taxes: [],
    stores: [],
    suppliers: [],
    categories: [],
    searches: [],
    baseApiUrl: 'http://localhost:8000'
    // baseApiUrl: 'http://saletransit.com'
  },
  mutations: {
    loadCategories (state) {
      let token = localStorage.getItem('jwt')
      let user_id = localStorage.getItem('user_id')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.post(`${state.baseApiUrl}/api/categories`, { user_id: user_id }).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.categories = [...data]
      })
    },
    loadStores (state) {
      let token = localStorage.getItem('jwt')
      let user_id = localStorage.getItem('user_id')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.post(`${state.baseApiUrl}/api/stores`, { user_id: user_id }).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.stores = [...data]
      })
    },
    loadSuppliers (state) {
      let token = localStorage.getItem('jwt')
      let user_id = localStorage.getItem('user_id')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.post(`${state.baseApiUrl}/api/suppliers`, { user_id: user_id }).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.suppliers = [...data]
      })
    },
    loadTaxes (state) {
      let token = localStorage.getItem('jwt')
      let user_id = localStorage.getItem('user_id')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.post(`${state.baseApiUrl}/api/taxes`, { user_id: user_id }).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.taxes = [...data]
      })
    },
    searchItems (state, search) {
      let token = localStorage.getItem('jwt')

      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

      axios.post(`${state.baseApiUrl}/api/search`, { search }).then(response => {
        let data = []
        response.data.forEach((item) => {
          data.push(item)
        })
        state.searches = [...data]
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
    findItems ({ commit }, data) {
      commit('searchItems', data)
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
    searches (state) {
      return state.searches
    },
  }
})
