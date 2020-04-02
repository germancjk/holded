<template>
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item">Sales</li>
        </ul>
      </small>

      <p class="lead">
        Sales
        <router-link :to="{ name: 'sales.new' }" class="btn btn-sm btn-success float-right">+ New Sale</router-link>
      </p>

      <div class="row mt-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Store</th>
                    <th scope="col">Date</th>
                    <th scope="col">SubTotal</th>
                    <th scope="col">Total</th>
                    <th scope="col"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.store_name }}</td>
                    <td scope="row">{{ element.created_at }}</td>
                    <td scope="row">{{ element.subtotal }}</td>
                    <td scope="row">{{ element.total }}</td>
                    <td scope="row">
                      <router-link class="btn btn-sm btn-outline-info" :to="{ name: 'sale', params: { id: element.id }}">
                        <font-awesome-icon icon="edit" /> Details
                      </router-link>
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
        userId: localStorage.getItem('user_id'),
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
          user_id: this.userId,
        }
        axios.post(`${this.baseApiUrl}/api/sales`, params).then(response => {
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
    },
    computed: {
      ...mapGetters(['baseApiUrl'])
    }
}
</script>
