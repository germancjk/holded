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
                <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                <small>Test of name of a product</small>
              </div>
            </div>
            <div class="form-row">
              <button type="button" class="btn btn-success btn-sm" @click="addItem">Add Item</button>
            </div>
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
            <div class="form-row">
              <div class="form-group col-6">
                <label for="sku">Name <span class="text-danger">*</span></label>
              </div>
              <div class="form-group col-3">
                <label for="cost">Barcode</label>
              </div>
              <div class="form-group col-3">
                <label for="quantity">Quantity</label>
              </div>
            </div>
            <div class="form-row" v-for="(sku, index) in skus" :key="index">
              <div class="form-group col-6">
                <input v-model="sku.name" :name="`skus[${index}][name]`" type="text" class="form-control" required autofocus placeholder="SKU Name - must be unique" >
              </div>
              <div class="form-group col-3">
                <input v-model="sku.barcode" :name="`skus[${index}][barcode]`" type="text" class="form-control" value="0">
              </div>
              <div class="form-group col-3">
                <input v-model="sku.quantity" :name="`skus[${index}][quantity]`" type="text" class="form-control" value="0">
              </div>
            </div>
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
        from: 0,
        to: 0,
        skus: [],
        searchedData: {
          sku_id: 0,
          item_name: '',
          sku_name: '',
          barcode: '',
          quantity: 0,
        },
        btnDisabled: false,
        submitName: 'Add'
      }
    },
    methods : {
      find() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get('api/movements').then(response => {
          console.log(response)
          this.searchedData = {
            sku_id: response['sku_id'],
            item_name: response['item_name'],
            sku_name: response['sku_name'],
            barcode: response['barcode'],
            quantity: response['quantity'],
          }
        })
      },
      addItem() {
        this.skus.push({
          sku_id: this.searchedData.sku_id,
          name: this.searchedData.item_name + ' ' + this.searchedData.sku_name,
          barcode: this.searchedData.barcode,
          quantity: this.searchedData.quantity,
        })
      },
      submit() {
        //
      },
      ...mapActions(['getStores'])
    },
    mounted() {
      this.getStores()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    }
}
</script>
