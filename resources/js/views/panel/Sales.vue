<template>
  <div class="container-fluid" id="board">
    <div class="container">
      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item">Ventas</li>
        </ul>
      </small>

      <p class="lead">
        Ventas
        <router-link :to="{ name: 'sales.new' }" class="btn btn-sm btn-success float-right">+ Nueva Venta</router-link>
      </p>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-sm">
                  <select class="form-control" v-model="date">
                    <option value="1" selected>Hoy</option>
                    <option value="2">Ayer</option>
                    <option value="3">Mes Actual</option>
                    <option value="4">Mes Pasado</option>
                    <option value="5">Personalizado</option>
                  </select>
                </div>
                <div class="form-group col-sm" v-if="date==5">
                  <date-picker
                    v-model="range" range
                    format="DD/MM/YYYY"
                    value-type="YYYY-MM-DD"
                    placeholder="Selecciona fechas..."
                  ></date-picker>
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

      <div class="row mt-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Tienda</th>
                    <th scope="col">Fecha</th>
                    <th scope="col" class="text-right">SubTotal</th>
                    <th scope="col" class="text-right">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.store_name }}</td>
                    <td scope="row">{{ element.created_at | moment("DD/MM/YYYY HH:mm") }}</td>
                    <td scope="row" class="text-right">{{ element.subtotal | currency }}</td>
                    <td scope="row" class="text-right">{{ element.total | currency }}</td>
                    <td scope="row" class="text-right">
                      <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'sale', params: { id: element.id }}">
                        <font-awesome-icon icon="edit" /> Detalle
                      </router-link>
                    </td>
                  </tr>
                </tbody>
              </table>

              <nav>
                <ul class="pagination">
                  <li v-for="page in totalPages" class="page-item" v-bind:class="{'active':(page === currentPage)}">
                    <button class="page-link" @click="currentPage = page">{{ page }}</button>
                  </li>
                </ul>
              </nav>

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

import DatePicker from 'vue2-datepicker';
import 'vue2-datepicker/index.css';

export default {
    components: {
      vSelect,
      DatePicker
    },
    data(){
      return {
        userId: localStorage.getItem('user_id'),
        list: [],
        loading: true,
        currentPage: 1,
        perPage: 25,
        totalPages: 0,
        date: 1,
        range: null,
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
          currentPage: this.currentPage,
          perPage: this.perPage,
          date: this.date,
          range: this.range,
        }
        axios.post(`${this.baseApiUrl}/api/sales`, params).then(response => {
          this.loading = false
          this.list = response['data']['results']
          this.totalPages = response['data']['totalPages']
        })
      },
    },
    mounted() {
      this.showError = false
      this.find()
    },
    computed: {
      ...mapGetters(['baseApiUrl'])
    },
    watch: {
      currentPage: function () {
        this.find()
      },
    }
}
</script>
