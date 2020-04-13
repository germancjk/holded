<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item">Items ></li>
          <li class="list-inline-item">New</li>
        </ul>
      </small>

      <p class="lead">Create an Item</p>

      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger" v-if="showError">
            <div v-for="element in messageError">{{ element }}</div>
          </div>
          <div class="alert alert-success" v-if="showAdd">
            Item Added
          </div>
        </div>
      </div>

      <form @submit.prevent="submit">
        <!-- item description -->
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col-12">
                    <label for="name">Name <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                    <small id="name" class="form-text text-muted">This will be the generic name of the item</small>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="categories">Category <span class="text-danger">*</span></label>
                    <v-select v-model="category" label="name" :options="categories" :reduce="categories => categories.id" placeholder="Select..."></v-select>
                  </div>

                  <div class="form-group col-6">
                    <label for="supplier">Supplier <span class="text-danger">*</span></label>
                    <v-select v-model="supplier" label="name" :options="suppliers" :reduce="suppliers => suppliers.id" placeholder="Select..."></v-select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="tax">Tax <span class="text-danger">*</span></label>
                    <v-select v-model="tax" label="name" :options="taxes" :reduce="taxes => taxes.id" placeholder="Select..."></v-select>
                  </div>

                  <div class="form-group col-6">
                    <label for="store">Store (default) <span class="text-danger">*</span></label>
                    <v-select v-model="store" label="name" :options="stores" :reduce="stores => stores.id" placeholder="Select..."></v-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- init skus -->
        <p class="lead mt-2">Skus - <i>The SKU is an unique name of each variant.</i></p>

        <div class="row mb-2">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="sku">Name <span class="text-danger">*</span></label>
                  </div>
                  <div class="form-group col-3">
                    <label for="cost">Barcode</label>
                  </div>
                  <div class="form-group col-1">
                    <label for="cost">Cost</label>
                  </div>
                  <div class="form-group col-1">
                    <label for="sale_price">Sale Price</label>
                  </div>
                  <div class="form-group col-1">
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
                  <div class="form-group col-1">
                    <input v-model="sku.cost" :name="`skus[${index}][cost]`" type="text" class="form-control" value="0">
                  </div>
                  <div class="form-group col-1">
                    <input v-model="sku.sale_price" :name="`skus[${index}][sale_price]`" type="text" class="form-control" value="0">
                  </div>
                  <div class="form-group col-1">
                    <input v-model="sku.quantity" :name="`skus[${index}][quantity]`" type="text" class="form-control" value="0">
                  </div>
                </div>
                <div class="form-row">
                  <button type="button" class="btn btn-success btn-sm" @click="addSku">+ Add New</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <button type="button" :disabled="btnDisabled" class="btn btn-primary" @click="submit">{{ submitName }}</button>
      </form>
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
        edit: false,
        name: '',
        supplier: 0,
        category: 0,
        tax: 0,
        store: 0,
        skus: [
          {
            barcode: '',
            name: '',
            cost: 0,
            sale_price: 0,
            quantity: 0
          }
        ],
        submitName: 'Add',
        showError: false,
        btnDisabled: false,
        messageError: [],
        showAdd: false,
        submitedLeft: 0,
      }
    },
    methods : {
      checkEdit() {
        if (this.id) {
          this.edit = true
          let token = localStorage.getItem('jwt')

          axios.defaults.headers.common['Content-Type'] = 'application/json'
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

          axios.get(`${this.baseApiUrl}/api/item/${this.id}`).then(response => {
            this.submitName = 'Update'
            this.name = response.data.name
            this.supplier = response.data.supplier_id
            this.category = response.data.category_id
            this.tax = response.data.tax_id
            this.store = response.data.store_id
          })

          axios.get(`${this.baseApiUrl}/api/item/sku/${this.id}`).then(response => {
            this.skus = []
            response.data.forEach(element => {
              this.skus.push({
                name: element.name,
                cost: element.cost,
                sale_price: element.sale_price,
                quantity: 0
              })
            })
          })
        }
      },
      addSku () {
        this.skus.push({
          name: '',
          barcode: '',
          cost: 0,
          sale_price: 0,
          quantity: 0
        })
      },
      submitStock(stock) {
        // submit stock
        const total = this.skus.length;
        axios.post(`${this.baseApiUrl}/api/stock`, stock).then(response => {
          this.submitedLeft++;
          // clear when fits total of skus
          if (total == this.submitedLeft) {
            this.showAdd = true
            this.clearForm()
          }
        })
      },
      submitSku(item_id) {
        // submit new sku
        this.skus.forEach(element => {
          if (element.name.length > 0) {
            let params = {
              user_id: this.userId,
              item_id: item_id,
              barcode: element.barcode,
              name: element.name,
              cost: element.cost,
              sale_price: element.sale_price,
            }
            axios.post(`${this.baseApiUrl}/api/itemsku`, params).then(response => {
              let stock = {
                user_id: this.userId,
                item_sku_id: response.data.data.id,
                store_id: this.store,
                quantity: element.quantity
              }
              this.submitStock(stock)
            })
          }
        });
      },
      submit(e) {
        e.preventDefault()
        this.messageError = []
        this.btnDisabled = true

        if (this.name.length == 0) {
          this.messageError.push('Name is empty')
        }
        if (this.category == 0) {
          this.messageError.push('Select Category')
        }
        if (this.supplier == 0) {
          this.messageError.push('Select Supplier')
        }
        if (this.tax == 0) {
          this.messageError.push('Select Tax')
        }
        if (this.store == 0) {
          this.messageError.push('Select Store')
        }
        if (this.skus[0].name.length == 0) {
          this.messageError.push('Please add at least one Sku')
        }

        const params = {
          user_id: this.userId,
          name: this.name,
          category_id: this.category,
          supplier_id: this.supplier,
          tax_id: this.tax,
        }

        // add new item
        if (this.messageError.length === 0) {
          axios.post(`${this.baseApiUrl}/api/item`, params).then(response => {
            this.submitSku(response.data.data.id)
          })
        } else {
          this.messageError.unshift('Errors below:')
          this.showError = true
          this.btnDisabled = false
        }
      },
      clearForm() {
        // clean objects
        this.messageError = []
        this.showError = false
        this.btnDisabled = false
        this.name = ''
        this.category = 0
        this.supplier = 0
        this.store = 0
        this.tax = 0
        this.skus = [
          {
            name: '',
            cost: 0,
            sale_price: 0,
            quantity: 0
          }
        ]
        this.getCategories()
        this.getSuppliers()
        this.getStores()
        this.getTaxes()
      },
      ...mapActions(['getSuppliers', 'getTaxes', 'getCategories', 'getStores'])
    },
    mounted() {
      this.showError = false
      this.checkEdit()
      this.getCategories()
      this.getSuppliers()
      this.getStores()
      this.getTaxes()
    },
    computed: {
      ...mapGetters(['suppliers', 'taxes', 'categories', 'stores', 'baseApiUrl'])
    }
}
</script>
