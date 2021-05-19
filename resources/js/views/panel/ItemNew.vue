<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item"><router-link :to="{ name: 'items' }">Items</router-link> ></li>
          <li class="list-inline-item">Nuevo Item</li>
        </ul>
      </small>

      <p class="lead">{{ submitName }} Item</p>

      <div class="row" v-if="showError || showAdd">
        <div class="col-12">
          <div class="alert alert-danger" v-if="showError">
            <div v-for="element in messageError">{{ element }}</div>
          </div>
          <div class="alert alert-success" v-if="showAdd">
            Item agregado/editado!
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
                    <label for="name">Nombre <span class="text-danger">*</span></label>
                    <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                    <small id="name" class="form-text text-muted">Este será el nombre genérico del artículo</small>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="categories">Categoria <span class="text-danger">*</span></label>
                    <v-select v-model="category" label="name" :options="categories" :reduce="categories => categories.id" placeholder="Select..."></v-select>
                  </div>

                  <div class="form-group col-6">
                    <label for="supplier">Proveedor <span class="text-danger">*</span></label>
                    <v-select v-model="supplier" label="name" :options="suppliers" :reduce="suppliers => suppliers.id" placeholder="Select..."></v-select>
                  </div>
                </div>

                <div class="form-row">
                  <div class="form-group col-6">
                    <label for="tax">Impuesto <span class="text-danger">*</span></label>
                    <v-select v-model="tax" label="name" :options="taxes" :reduce="taxes => taxes.id" placeholder="Select..."></v-select>
                  </div>

                  <div class="form-group col-6">
                    <label for="store">Tienda <span class="text-danger">*</span></label>
                    <v-select v-model="store" label="name" :options="stores" :reduce="stores => stores.id" placeholder="Select..."></v-select>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <!-- init skus -->
        <p class="lead mt-2">Skus - <i>SKU es el nombre único de cada variante.</i></p>

        <div class="row mb-2">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <div class="form-row">
                  <div class="form-group col">
                    <label for="sku">Nombre <span class="text-danger">*</span></label>
                  </div>
                  <div class="form-group col-2">
                    <label for="cost">Código de barras</label>
                  </div>
                  <div class="form-group col-2">
                    <label for="cost">Costo</label>
                  </div>
                  <div class="form-group col-2">
                    <label for="sale_price">Precio de venta</label>
                  </div>
                  <div v-if="!id" class="form-group col-2">
                    <label for="quantity">Cantidad</label>
                  </div>
                  <div class="form-group col-1">
                  </div>
                </div>
                <div class="form-row" v-for="(sku, index) in skus" :key="index">
                  <div class="form-group col">
                    <input  v-model="sku.name" :name="`skus[${index}][name]`" type="text" class="form-control"
                            required autofocus
                            placeholder="SKU / Talla / Modelo / Color"
                    >
                  </div>
                  <div class="form-group col-2">
                    <input v-model="sku.barcode" :name="`skus[${index}][barcode]`" type="text" class="form-control" value="0">
                  </div>
                  <div class="form-group col-2">
                    <input v-model="sku.cost" :name="`skus[${index}][cost]`" type="text" class="form-control" value="0">
                  </div>
                  <div class="form-group col-2">
                    <input v-model="sku.sale_price" :name="`skus[${index}][sale_price]`" type="text" class="form-control" value="0">
                  </div>
                  <div v-if="!id" class="form-group col-2">
                    <input v-model="sku.quantity" :name="`skus[${index}][quantity]`" type="text" class="form-control" value="0">
                  </div>
                  <div class="form-group col-1">
                    <label for="delete">
                      <button class="btn btn-outline-danger" type="button" name="button" @click="remove(index, sku)">
                          <font-awesome-icon icon="trash" />
                      </button>
                    </label>
                  </div>
                </div>
                <div class="form-row">
                  <button type="button" class="btn btn-success btn-sm" @click="addSku">+ Agregar Nuevo</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <p class="text-right">
          <button type="button" :disabled="btnDisabled" class="btn btn-primary" @click="submit">{{ submitName }}</button>
        </p>

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
        name: null,
        supplier: 0,
        category: 0,
        tax: 0,
        store: 0,
        skus: [
          {
            id: 0,
            barcode: null,
            name: null,
            cost: 0,
            sale_price: 0,
            quantity: 0
          }
        ],
        submitName: 'Crear',
        showError: false,
        btnDisabled: false,
        messageError: [],
        showAdd: false,
        submitedLeft: 0,
      }
    },
    methods : {
      loadSkus(){
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get(`${this.baseApiUrl}/api/item/sku/${this.id}`).then(response => {
          this.skus = []
          response.data.forEach(element => {
            this.skus.push({
              id: element.id,
              name: element.name,
              cost: element.cost,
              sale_price: element.sale_price,
              barcode: element.barcode,
              quantity: null
            })

            this.btnDisabled = false
          })
        })
      },
      checkEdit() {
        if (this.id) {
          this.edit = true
          let token = localStorage.getItem('jwt')

          axios.defaults.headers.common['Content-Type'] = 'application/json'
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

          axios.get(`${this.baseApiUrl}/api/item/${this.id}`).then(response => {
            this.submitName = 'Actualizar'
            this.name = response.data.name
            this.supplier = response.data.supplier_id
            this.category = response.data.category_id
            this.tax = response.data.tax_id
            this.store = 0
          })

          this.loadSkus()
        }
      },
      addSku () {
        this.skus.push({
          id: 0,
          name: null,
          barcode: null,
          cost: 0,
          sale_price: 0,
          quantity: 0
        })
      },
      submit(e) {
        e.preventDefault()
        this.messageError = []
        this.btnDisabled = true

        if (!this.name) {
          this.messageError.push('- Completa Nombre')
        }
        if (this.category == 0) {
          this.messageError.push('- Selecciona Categoria')
        }
        if (this.supplier == 0) {
          this.messageError.push('- Selecciona Proveedor')
        }
        if (this.tax == 0) {
          this.messageError.push('- Ingresa Impuesto')
        }
        if (this.store == 0) {
          this.messageError.push('- Selecciona Tienda (para ingresar nuevos SKU)')
        }
        if (!this.skus[0].name) {
          this.messageError.push('- Por favor, ingresa al menos una variante')
        }

        const params = {
          user_id: this.userId,
          item_id: this.id,
          name: this.name,
          category_id: this.category,
          supplier_id: this.supplier,
          tax_id: this.tax,
          skus: this.skus,
          store: this.store,
          quantity: this.quantity,
        }

        if (this.messageError.length === 0) {
          if (this.id) {
            // update item
            axios.patch(`${this.baseApiUrl}/api/item/${this.id}`, params).then(response => {
              if(response.data.status === true){
                this.showAdd = true
                this.showError = false
                // reload to get sku_id, it's ok!
                this.loadSkus()
              }
            })
          } else {
            // new item
            axios.post(`${this.baseApiUrl}/api/item`, params).then(response => {
              if(response.data.status === true){
                this.showAdd = true
                this.btnDisabled = false
                this.clearForm()
              }
            })
          }
        } else {
          this.messageError.unshift('Corrige los siguientes errores:')
          this.showError = true
          this.btnDisabled = false
        }
      },
      remove(index, sku) {
        if (sku) {
          this.$swal({
            title: `¿Eliminar '${sku.name}'?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'No, cancelar',
            showCloseButton: true,
          }).then((result) => {
            if(result.value) {
              if(sku.id > 0){
                axios.delete(`${this.baseApiUrl}/api/itemsku/${sku.id}`, { user_id: this.userId }).then(response => {
                  // console.log(response)
                })
              }

              this.skus.splice(index, 1)
            }
          })
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
            name: null,
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
