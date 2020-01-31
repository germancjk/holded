import Vue from 'vue'
import router from './router'
import store  from './store'

import App from './views/App'

const app = new Vue({
    el: '#app',
    components: { App },
    router,
    store,
});
