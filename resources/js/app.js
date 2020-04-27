import Vue from 'vue'
import router from './router'
import store  from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSpinner, faUserCog, faBox, faHandHoldingUsd, faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './views/App'

library.add(faEdit, faTrash, faSpinner, faUserCog, faBox, faHandHoldingUsd, faGem)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'));

// filters
Vue.filter('currency', function (value) {
  if(value == undefined) return
  return value.toFixed(2) + ' €'
})

// Vue.filter('currencyColor', function (value) {
//   if (!value) return ''
//
//   return (value > 0) ? '<span class="green">' + value.toFixed(2) + ' €</span>' : '<span class="red">' + value.toFixed(2) + ' €</span>'
// })

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
