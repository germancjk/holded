import Vue from 'vue'
import router from './router'
import store  from './store'

import VueSweetalert2 from 'vue-sweetalert2'
import 'sweetalert2/dist/sweetalert2.min.css';

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSpinner, faUserCog, faBox, faHandHoldingUsd, faGem } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './views/App'

library.add(faEdit, faTrash, faSpinner, faUserCog, faBox, faHandHoldingUsd, faGem)

Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(require('vue-moment'));
Vue.use(VueSweetalert2);

// filters
Vue.filter('currency', function (value) {
  if(value == undefined) return
  return value.toFixed(2) + '€'
})

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
