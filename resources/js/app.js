import Vue from 'vue'
import router from './router'
import store  from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSpinner, faUserCog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './views/App'

library.add(faEdit, faTrash, faSpinner, faUserCog)

Vue.component('font-awesome-icon', FontAwesomeIcon)

// Vue.filter('capitalize', function (value) {
//   if (!value) return ''
//   value = value.toString()
//   return value.charAt(0).toUpperCase() + value.slice(1)
// })

Vue.filter('currency', function (value) {
  if (!value) return ''

  return value.toFixed(2) + ' €'
})

Vue.filter('currencyColor', function (value) {
  if (!value) return ''
  
  return (value > 0) ? '<span class="green">' + value.toFixed(2) + ' €</span>' : '<span class="red">' + value.toFixed(2) + ' €</span>'
})

// Vue.filter('fecha', (valor) => {
//   if (valor=='') return
//
//   const convertirFecha = value => moment(String(value)).format('DD/MM/YYYY')
//   const fechaArray = valor.split('/')
//   return convertirFecha(2020 + fechaArray[1] + fechaArray[0])
// })

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
