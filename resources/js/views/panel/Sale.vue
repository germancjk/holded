<template>
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item"><a href="#">Sales</a> ></li>
          <li class="list-inline-item">Sale</li>
        </ul>
      </small>

      <p class="lead">Sale </p>

      <div class="row mt-2">
        <div class="col-6">
          <ul class="list-group">
            <li class="list-group-item">Store: <span class="float-right">{{ item.store_name }}</span></li>
            <li class="list-group-item">Date: <span class="float-right">{{ item.created_at }}</span></li>
            <li class="list-group-item">Taxes: <span class="float-right">{{ item.taxes | currency }}</span></li>
            <li class="list-group-item">SubTotal: <span class="float-right">{{ item.subtotal | currency }}</span></li>
            <li class="list-group-item">Total: <span class="float-right">{{ item.total | currency }}</span></li>
          </ul>
        </div>
        <div class="col-6">
          <ul class="list-group">
            <li class="list-group-item">Cost: <span class="float-right">{{ item.cost | currency }}</span></li>
            <li class="list-group-item">Profit: <span class="float-right">{{ item.profit | currency }}</span></li>
          </ul>
        </div>
      </div>

      <p class="lead mt-4">Sale Items </p>

      <div class="row mt-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <p class="text-center" v-if="loading"><font-awesome-icon icon="spinner" spin /></p>
              <table class="table table-hover" v-if="!loading">
                <thead>
                  <tr>
                    <th scope="col">Item</th>
                    <th scope="col" class="text-right">Quantity</th>
                    <th scope="col" class="text-right">Discount</th>
                    <th scope="col" class="text-right">Cost</th>
                    <th scope="col" class="text-right">Taxes</th>
                    <th scope="col" class="text-right">SubTotal</th>
                    <th scope="col" class="text-right">Total</th>
                    <th scope="col" class="text-right">Profit</th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="element,index in list">
                    <td scope="row">{{ element.name }}</td>
                    <td scope="row" class="text-right">{{ element.quantity }}</td>
                    <td scope="row" class="text-right">{{ element.discount }}%</td>
                    <td scope="row" class="text-right">{{ element.cost | currency }}</td>
                    <td scope="row" class="text-right">{{ element.taxes | currency }}</td>
                    <td scope="row" class="text-right">{{ element.subtotal | currency }}</td>
                    <td scope="row" class="text-right">{{ element.total | currency }}</td>
                    <td scope="row" class="text-right">{{ element.profit | currency }}</td>
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
        id: this.$route.params.id,
        item: [],
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
        axios.post(`${this.baseApiUrl}/api/sale`, params).then(response => {
          this.loading = false
          this.item = response['data'][0]
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
        axios.post(`${this.baseApiUrl}/api/sale/items`, params).then(response => {
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
