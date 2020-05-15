<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item">Control de Stock</li>
        </ul>
      </small>

      <p class="lead">Control de Stock</p>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm">
                  <v-select class="newSelect" v-model="store" label="name" :options="stores" :reduce="stores => stores.id" placeholder="Selecciona tienda..."></v-select>
                </div>
                <div class="form-group col-sm">
                  <input type="text" v-model="search" class="form-control" placeholder="Buscar por nombre">
                </div>
                <div class="form-group col-sm">
                  <button class="btn btn-primary" type="button" name="button" @click="find()">
                    Buscar
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Tienda</th>
                    <th scope="col" class="text-right">Cantidad</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.name }}</td>
                    <td scope="row">{{ element.store_name }}</td>
                    <td scope="row" class="text-right">{{ element.quantity }}</td>
                    <td scope="row" class="text-right">
                      <button
                        @click="id=element.id; name=element.name; quantity=element.quantity; store_id=element.store_id"
                        type="button" class="btn btn-sm btn-outline-primary" data-toggle="modal" data-target="#exampleModal">
                        <font-awesome-icon icon="edit" /> Editar
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Actualizar Cantidad</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Cerrar">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <div class="form-row">
              <div class="form-group lead">
                <label>{{ name }}</label>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-6">
                <label for="quantity">Cantidad <span class="text-danger">*</span></label>
                <input type="text" class="form-control" id="quantity" aria-describedby="quantity" v-model="quantity" required autofocus>
              </div>
            </div>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Cerrar</button>
            <button type="button" class="btn btn-primary" @click="update()">Actualizar</button>
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
        list: [],
        search: null,
        store: null,
        id: 0,
        name: null,
        store_id: 0,
        quantity: 0,
        loading: false,
      }
    },
    methods : {
      find() {
        this.loading = true
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        const params = {
          user_id: this.userId,
          store_id: this.store_id,
          search: this.search,
        }
        axios.post(`${this.baseApiUrl}/api/stock/search`, params).then(response => {
          this.loading = false
          this.list = response['data']
        })
      },
      update() {
        const params = {
          quantity: this.quantity,
        }

        axios.patch(`${this.baseApiUrl}/api/stock/${this.id}`, params).then(response => {
          console.log(response)
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`${this.baseApiUrl}/api/item/${id}`).then(response => {
            this.items()
          })
        }
      },
      ...mapActions(['getStores']),
    },
    mounted() {
      this.showError = false
      this.find()
      this.getStores()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    }
}
</script>
