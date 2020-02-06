import Vue from 'vue'
import router from './router'
import store  from './store'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faEdit, faTrash, faSpinner } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

import App from './views/App'

library.add(faEdit, faTrash, faSpinner)

Vue.component('font-awesome-icon', FontAwesomeIcon)

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
