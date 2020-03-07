<template>
  <div class="container">

    <!-- init search -->
    <div class="row">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">Movements</h5>
            <p class="card-text">You can move items between stores with tracking.</p>
            <div class="form-row">
              <div class="form-group col-6">
                <label for="tax">From <span class="text-danger">*</span></label>
                <v-select v-model="from" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
              </div>

              <div class="form-group col-6">
                <label for="store">To <span class="text-danger">*</span></label>
                <v-select v-model="to" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
              </div>
            </div>
            <div class="form-row">
              <div class="form-group col-12">
                <label for="name">Search by: Name, Name + SKU or Barcode <span class="text-danger">*</span></label>
                <v-select v-model="item" label="name" :options="list" ></v-select>
                <small>Test of name of a product</small>
              </div>
            </div>
            <!-- <div class="form-row">
              <button type="button" class="btn btn-success btn-sm" @click="addItem">Add Item</button>
            </div> -->
          </div>
        </div>
      </div>
    </div>

    <!-- init cart -->
    <div class="row mt-2 mb-2">
      <div class="col-12">
        <div class="card">
          <div class="card-body">
            <h5 class="card-title">To move</h5>

            <table class="table table-hover">
              <thead>
                <tr>
                  <th>Name</th>
                  <th class="text-right">Quantity</th>
                  <th class="text-right">Available</th>
                  <th ></th>
                </tr>
              </thead>
              <tbody>
                <tr v-for="(sku, index) in cart" :key="index">
                  <td scope="row">{{ cart[index].name }}</td>
                  <td scope="row">
                    <input v-model="sku.quantity" :name="`cart[${index}][quantity]`" type="text" class="form-control col-2 text-right" value="0">
                  </td>
                  <td scope="row" class="text-right">{{ cart[index].available }}</td>
                  <td scope="row" >
                    <button type="button" class="btn btn-sm btn-outline-danger">Borrar</button>
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
        name: '',
        item: 0,
        from: 0,
        to: 0,
        cart: [],
        list: [],
        btnDisabled: false,
        submitName: 'Add'
      }
    },
    methods : {
      find() {
        const params = {
          store_id: this.from,
          search: '',
        }
        axios.post(`${this.baseApiUrl}/api/search`, params).then(response => {
          this.list = response['data']
        })
      },
      stock(item) {
        const params = {
          item_sku_id: item.sku_id,
          store_id: this.from,
        }
        axios.post(`${this.baseApiUrl}/api/stock/item`, params).then(response => {
          // add to cart
          this.addCart({
            sku_id: item.sku_id,
            name: item.name,
            quantity: 0,
            available: response['data'][0].quantity,
          })
        })
      },
      addCart(item) {
        this.cart.push(item)
      },
      submit() {
        //
      },
      ...mapActions(['getStores'])
    },
    mounted() {
      this.getStores()
      this.find()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    }
    ,
    watch: {
      item: function (item) {
        // search availability
        this.stock(item)
      },
    }
}
</script>
