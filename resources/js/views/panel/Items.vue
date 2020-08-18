<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item"><router-link :to="{ name: 'items' }">Items</router-link> ></li>
          <li class="list-inline-item">Listado</li>
        </ul>
      </small>

      <p class="lead">
        Listado de Items
        <router-link :to="{ name: 'item.new' }" class="btn btn-sm btn-success float-right">+ Nuevo Item</router-link>
      </p>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm">
                  <v-select v-model="category" label="name" :options="categories" :reduce="categories => categories.id" placeholder="Selecciona categoria..."></v-select>
                </div>
                <div class="form-group col-sm">
                  <input type="text" v-model="search" class="form-control" placeholder="Buscar por nombre / SKU">
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

      <div class="row mt-3">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Nombre</th>
                    <th scope="col">Categoria</th>
                    <th scope="col" class="text-right">Precio de venta</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <template v-for="element,index in list">
                    <tr style="background-color:#f8f8f8;">
                      <td>{{ element.item_name }}</td>
                      <td>{{ element.category_name }}</td>
                      <td></td>
                      <td class="text-right">
                        <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'item.edit', params: { id: element.item_id }}">
                          <font-awesome-icon icon="edit" /> Editar
                        </router-link>
                        <button class="btn btn-sm btn-outline-danger" type="button" name="button" @click="remove(element.item_id)">
                          <font-awesome-icon icon="trash" /> Eliminar
                        </button>
                      </td>
                    </tr>
                    <tr v-for="subelement, subindex in element.skus">
                      <td> > <i>{{ subelement.item_name }} {{ subelement.sku_name}}</i></td>
                      <td></td>
                      <td class="text-right">{{ subelement.sku_sale_price | currency }}</td>
                      <td class="text-right"></td>
                    </tr>
                  </template>
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
        list: [],
        search: null,
        category: null,
        userId: localStorage.getItem('user_id'),
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
          user_id: this.userId,
          category_id: this.category,
          search: this.search,
        }
        axios.post(`${this.baseApiUrl}/api/items`, params).then(response => {
          this.loading = false
          this.list = response['data']
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`${this.baseApiUrl}/api/item/${id}`).then(response => {
            this.items()
          })
        }
      },
      ...mapActions(['getCategories'])
    },
    mounted() {
      this.showError = false
      // this.find()
      this.loading = false
      this.getCategories()
    },
    computed: {
      ...mapGetters(['categories', 'baseApiUrl'])
    }
}
</script>
