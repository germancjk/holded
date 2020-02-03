<template>
  <div class="container">

    <div class="row">
      <div class="col-12">
        <div class="alert alert-danger" v-if="showError">
          <div v-for="element in messageError">{{ element }}</div>
        </div>
      </div>
    </div>

    <form @submit.prevent="submit">
      <!-- item description -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Items</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="name">Name</label>
                  <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                  <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-6">
                  <label for="categories">Category</label>
                  <v-select v-model="category" label="name" :options="categories" :reduce="categories => categories.id"></v-select>
                </div>

                <div class="form-group col-6">
                  <label for="supplier">Supplier</label>
                  <v-select v-model="supplier" label="name" :options="suppliers" :reduce="suppliers => suppliers.id" ></v-select>
                </div>
              </div>

              <div class="form-row">
                <div class="form-group col-12">
                  <label for="tax">Tax</label>
                  <v-select v-model="tax" label="name" :options="taxes" :reduce="taxes => taxes.id" ></v-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- init skus -->
      <div class="row mt-2 mb-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <h5 class="card-title">Skus</h5>
              <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
              <div class="form-row">
                <div class="form-group col-6">
                  <label for="sku">Name</label>
                  <input type="text" class="form-control" id="sku" aria-describedby="sku" v-model="sku" required autofocus>
                  <small id="sku" class="form-text text-muted">We'll never share your email with anyone else.</small>
                </div>
                <div class="form-group col-2">
                  <label for="cost">Cost</label>
                  <input type="text" class="form-control" id="cost" aria-describedby="cost" v-model="cost" value="0">
                </div>
                <div class="form-group col-2">
                  <label for="sale_price">Sale Price</label>
                  <input type="text" class="form-control" id="sale_price" aria-describedby="sale_price" v-model="sale_price" value="0">
                </div>
                <div class="form-group col-2">
                  <label for="quantity">Quantity</label>
                  <input type="text" class="form-control" id="quantity" aria-describedby="quantity" v-model="quantity" value="0">
                </div>
              </div>
              <div class="form-row">
                <button type="button" class="btn btn-success btn-sm">+ Add New</button>
              </div>
            </div>
          </div>
        </div>
      </div>
      <button type="button" class="btn btn-primary" @click="submit">{{ submitName }}</button>
    </form>
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
        supplier: 0,
        category: 0,
        cost: 0,
        tax: 0,
        sku: '',
        sale_price: 0,
        quantity: 0,
        submitName: 'Add',
        showError: false,
        messageError: [],
      }
    },
    methods : {
      submit(e) {
        e.preventDefault()
        this.messageError = []
        this.messageError.push('Errors below:')

        if (this.name.length === 0) {
          this.messageError.push('Name is empty')
        }
        if (this.category.length === 0) {
          this.messageError.push('Select Category')
        }
        if (this.supplier.length === 0) {
          this.messageError.push('Select Supplier')
        }
        if (this.cost.length === 0) {
          this.cost = 0
        }
        if (this.tax.length === 0) {
          this.messageError.push('Select Tax')
        }

        const params = {
          name: this.name,
          category_id: this.category,
          supplier_id: this.supplier,
          cost: this.cost,
          tax_id: this.tax,
        }

        if (this.messageError.length === 1) {
          axios.post('api/item', params).then(response => {
            this.showError = false
            this.name = ''
            this.category = 0
            this.supplier = 0
            this.cost = 0
            this.tax = 0
            this.getCategories()
            this.getSuppliers()
            this.getTaxes()
          })
        } else {
          console.log('Error', this.messageError.length)
          this.showError = true
        }
      },
      ...mapActions(['getSuppliers', 'getTaxes', 'getCategories'])
    },
    mounted() {
      this.showError = false
      this.getCategories()
      this.getSuppliers()
      this.getTaxes()
    },
    computed: {
      ...mapGetters(['suppliers', 'taxes', 'categories'])
    }
}
</script>
