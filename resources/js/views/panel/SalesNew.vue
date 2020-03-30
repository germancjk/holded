<template>
  <div class="container">

    <small>
      <ul class="list-inline-mb-0 pl-0">
        <li class="list-inline-item"><a href="#">Board</a> ></li>
        <li class="list-inline-item"><a href="#">Sales</a> ></li>
        <li class="list-inline-item">New Sale</li>
      </ul>
    </small>

    <!-- <p class="lead">New Sale</p> -->

    <!-- messages -->
    <div v-if="done" class="alert alert-success" role="alert">
      Sale done!
    </div>

    <!-- init search -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <div class="form-row">
              <div class="form-group col-6">
                <label for="tax">From <span class="text-danger">*</span></label>
                <v-select v-model="from" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
              </div>
              <div class="form-group col-3">
                <label>Quantity <span class="text-danger">*</span></label>
                <input type="text" v-model="quantity" class="form-control">
              </div>
              <div class="form-group col-3">
                <label>Discount %</label>
                <input type="text" v-model="discount" class="form-control">
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="name">Search by: Name, Name + SKU or Barcode <span class="text-danger">*</span></label>
                <v-select v-model="item" label="name" :options="list" ></v-select>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

    <!-- init cart -->
    <p class="lead mt-2">Cart</p>

    <div class="row mt-2 mb-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <!-- <h5 class="card-title">To move</h5> -->
            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th class="text-right">Discount %</th>
                  <th class="text-right">Quantity</th>
                  <th class="text-right">Total</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(row, index) in cart" :key="index">
                  <td scope="row">{{ row.name }}</td>
                  <td scope="row">
                    <input
                      v-model="row.discount"
                      type="text"
                      class="form-control col-sm-6 text-right float-right"
                      max="100"
                      @keyup="updateDiscount(row.discount, index)"
                    >
                  </td>
                  <td scope="row">
                    <input
                      v-model="row.quantity"
                      type="text"
                      class="form-control col-sm-6 text-right float-right"
                      min="1"
                      @keyup="updateQuantity(row.quantity, index)"
                    >
                  </td>
                  <td scope="row">
                    <input
                      v-model="row.total"
                      type="text"
                      class="form-control col-sm-6 text-right float-right"
                      min="1"
                      @keyup="updateTotal(row.total, index)"
                    >
                  </td>
                  <td scope="row">
                    <button type="button" class="btn btn-sm btn-outline-danger float-right" @click="deleteItem(index)">Borrar</button>
                  </td>
                </tr>
              </tbody>
            </table>

          </div>
        </div>
      </div>
    </div>
    <button type="button" :disabled="btnDisabled" class="btn btn-primary" @click="submit">{{ submitName }}</button>
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
        name: '',
        item: 0,
        from: 0,
        quantity: 1,
        discount: 0,
        cart: [],
        list: [],
        btnDisabled: false,
        submitName: 'Done',
        done: false,
      }
    },
    methods : {
      find() {
        const params = {
          user_id: this.userId,
          store_id: this.from,
          search: '',
        }
        axios.post(`${this.baseApiUrl}/api/search`, params).then(response => {
          this.list = response['data']
        })
      },
      inCart(item) {
        return this.cart.find( line => line.sku_id === item.sku_id )
      },
      addCart(item) {
        const total = this.quantity * item.sku_sale_price

        this.cart.push({
          sku_id: item.sku_id,
          name: item.name,
          cost: item.cost,
          price: item.sku_sale_price,
          priceCart: item.sku_sale_price,
          quantity: this.quantity,
          discount: this.discount,
          total: total,
        })
        this.item = 0
        console.log(this.cart)
      },
      updateQuantity(quantity, index){
        this.cart[index].total = this.cart[index].price * quantity
      },
      updateDiscount(discount, index){
        const percent = (discount / 100) * this.cart[index].price
        this.cart[index].priceCart = this.cart[index].price - percent
        this.cart[index].total = this.cart[index].priceCart * this.cart[index].quantity
      },
      updateTotal(total, index){
        this.cart[index].total = total
        this.cart[index].discount = 0
      },
      deleteItem: function(index) {
        this.cart.splice(index, 1)
        this.item = 0
      },
      submit() {
        this.btnDisabled = true
        const params = {
          user_id: this.userId,
          from: this.from,
          cart: this.cart,
        }
        console.log(params)
        return
        axios.post(`${this.baseApiUrl}/api/sales.new`, params).then(response => {
          if (response.data.status == true) {
            this.clean()
          }
        })
      },
      clean() {
        this.done = true
        this.name = ''
        this.item = 0
        this.from = 0
        this.cart = []
        this.list = []
      },
      ...mapActions(['getStores'])
    },
    mounted() {
      this.getStores()
      this.find()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    },
    watch: {
      item: function (item) {
        // search availability
        if(item !== undefined) {
          if(this.inCart(item) === undefined){
            if(item != 0){
              this.addCart(item)
            }
          }
        }
      },
    }
}
</script>
