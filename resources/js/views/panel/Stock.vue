<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item">Stock control</li>
        </ul>
      </small>

      <p class="lead">Stock control</p>

      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-4">
                  <v-select class="newSelect" v-model="store" label="name" :options="stores" :reduce="stores => stores.id" placeholder="Select a store..."></v-select>
                </div>
                <div class="form-group col-4">
                  <input type="text" v-model="search" class="form-control" placeholder="Search by Name">
                </div>
                <div class="form-group col-4">
                  <button class="btn btn-primary" type="button" name="button" @click="find()">
                    Search
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
                    <th scope="col">Name</th>
                    <th scope="col">Store</th>
                    <th scope="col" class="text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.name }}</td>
                    <td scope="row">{{ element.store_name }}</td>
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
        list: [],
        search: null,
        store: null,
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
          store_id: this.store,
          search: this.search,
        }
        axios.post(`${this.baseApiUrl}/api/stock/search`, params).then(response => {
          this.loading = false
          this.list = response['data']
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`${this.baseApiUrl}/api/item/${id}`).then(response => {
            console.log(response)
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
