<template>
    <div class="container">
      <div class="row mt-5">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-4">
                  <v-select v-model="store" label="name" :options="stores" :reduce="stores => stores.id"></v-select>
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
              <table class="table table-hover">
                <thead>
                  <tr>
                    <!-- <th scope="col">#</th> -->
                    <th scope="col">Name</th>
                    <th scope="col">Store</th>
                    <th scope="col" class="text-right">Quantity</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.item_name }} - {{ element.sku_name }}</td>
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
        store: null,
      }
    },
    methods : {
      items() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get(`${this.baseApiUrl}/api/stock`).then(response => {
          console.log(response)
          this.list = response['data']
        })
      },
      find() {
        const params = {
          store_id: this.store,
          search: this.search,
        }
        axios.post(`${this.baseApiUrl}/api/stock/search`, params).then(response => {
          console.log(response)
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
      this.items()
      this.getStores()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    }
}
</script>
