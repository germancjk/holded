<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item"><router-link :to="{ name: 'movements' }">Movimientos</router-link> ></li>
          <li class="list-inline-item">Movimiento</li>
        </ul>
      </small>

      <p class="lead">Movimiento </p>

      <div class="row mt-2">
        <div class="col-12">
          <ul class="list-group">
            <li class="list-group-item">Desde: {{ move.store_name_from }}</li>
            <li class="list-group-item">Hacia: {{ move.store_name_to }}</li>
            <li class="list-group-item">Fecha: {{ move.created_at | moment("DD/MM/YYYY HH:mm") }}</li>
            <li class="list-group-item">Comentario: {{ move.comments }}</li>
          </ul>
        </div>
      </div>

      <p class="lead mt-4">Items </p>

      <div class="row mt-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col" class="text-right">Cantidad</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.name }}</td>
                    <td scope="row" class="text-right">{{ element.quantity }}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import vSelect from 'vue-select'

import 'vue-select/dist/vue-select.css';

export default {
    components: {
      vSelect
    },
    data(){
      return {
        userId: localStorage.getItem('user_id'),
        id: this.$route.params.id,
        move: [],
        list: [],
        loading: true,
      }
    },
    methods : {
      find() {
        this.loading = true
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        const params = {
          id: this.id,
          user_id: this.userId,
        }
        axios.post(`${this.baseApiUrl}/api/movement`, params).then(response => {
          this.loading = false
          this.move = response['data'][0]
        })
      },
      items() {
        this.loading = true
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        const params = {
          id: this.id,
          user_id: this.userId,
        }
        axios.post(`${this.baseApiUrl}/api/movement/items`, params).then(response => {
          this.loading = false
          this.list = response['data']
        })
      },
      remove(id) {
        if (id > 0) {
          // axios.delete(`${this.baseApiUrl}/api/item/${id}`).then(response => {
          //   console.log(response)
          //   this.items()
          // })
        }
      },
    },
    mounted() {
      this.showError = false
      this.find()
      this.items()
    },
    computed: {
      ...mapGetters(['baseApiUrl'])
    }
}
</script>
