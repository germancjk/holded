<template>
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item">Items ></li>
          <li class="list-inline-item">List</li>
        </ul>
      </small>

      <p class="lead">Items list</p>

      <div class="row">
        <div class="col-12">
          <div class="card shadow-sm">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-4">
                  <v-select v-model="category" label="name" :options="categories" :reduce="categories => categories.id" placeholder="Select a category..."></v-select>
                </div>
                <div class="form-group col-4">
                  <input type="text" v-model="search" class="form-control" placeholder="Search by Name / SKU">
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
                    <th scope="col">Name</th>
                    <th scope="col">Category</th>
                    <th scope="col" class="text-right">Sale Price</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.name }}</td>
                    <td scope="row">{{ element.category_name }}</td>
                    <td scope="row" class="text-right">{{ element.sku_sale_price }} €</td>
                    <td class="text-right">
                      <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'item.edit', params: { id: element.item_id }}">
                        <font-awesome-icon icon="edit" /> Edit
                      </router-link>
                      <button class="btn btn-sm btn-outline-danger" type="button" name="button" @click="remove(element.sku_id)">
                        <font-awesome-icon icon="trash" /> Remove
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
      }
    },
    methods : {
      find() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        const params = {
          user_id: this.userId,
          category_id: this.category,
          search: this.search,
        }
        axios.post(`${this.baseApiUrl}/api/search`, params).then(response => {
          console.log(response)
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
      this.find()
      this.getCategories()
    },
    computed: {
      ...mapGetters(['categories', 'baseApiUrl'])
    }
}
</script>
