<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item"><router-link :to="{ name: 'movements' }">Movements</router-link> ></li>
          <li class="list-inline-item">Listado</li>
        </ul>
      </small>

      <p class="lead">Movimientos <i>Mueve items de una tienda a otra</i></p>

      <!-- messages -->
      <div v-if="done" class="alert alert-success" role="alert">
        Movimiento realizado!
      </div>

      <div class="alert alert-danger" v-if="showError">
        <div v-for="element in messageError">{{ element }}</div>
      </div>

      <!-- init search -->
      <div class="row">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <div class="form-row">
                <div class="form-group col-6">
                  <label for="tax">Desde <span class="text-danger">*</span></label>
                  <v-select v-model="from" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
                </div>

                <div class="form-group col-6">
                  <label for="store">Hacia <span class="text-danger">*</span></label>
                  <v-select v-model="to" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="name">Buscar por: Nombre, Nombre + SKU o Código de barras <span class="text-danger">*</span></label>
                  <v-select :disabled="from == 0" v-model="item" label="name" :options="list" ></v-select>
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="comments">Comentarios <i>(opcional)</i> </label>
                  <textarea v-model="comments" class="form-control"></textarea>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- init cart -->
      <p class="lead mt-2">Items a mover</p>

      <div class="row mt-2 mb-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th class="text-right">Disponible</th>
                    <th class="text-right">Cantidad</th>
                    <th ></th>
                  </tr>
                </thead>
                <tbody>
                  <tr v-for="(row, index) in cart" :key="index">
                    <td scope="row">{{ row.name }}</td>
                    <td scope="row" class="text-right">{{ row.available }} </td>
                    <td scope="row">
                      <input
                        v-model="row.quantity"
                        type="number"
                        class="form-control col-sm-6 text-right float-right"
                        min="1" :max="row.available"
                      >
                    </td>
                    <td scope="row">
                      <button type="button" class="btn btn-sm btn-outline-danger float-right" @click="deleteItem(index)">Eliminar</button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
      <p class="text-right">
        <button type="button" :disabled="btnDisabled" class="btn btn-primary" @click="submit">{{ submitName }}</button>
      </p>
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
        name: '',
        item: 0,
        from: 0,
        to: 0,
        comments: '',
        cart: [],
        list: [],
        btnDisabled: false,
        submitName: 'Mover',
        done: false,
        showError: false,
        messageError: [],
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
          this.item = 0
        })
      },
      addCart(item) {
        this.cart.push(item)
      },
      deleteItem: function(index) {
        this.cart.splice(index, 1)
        this.item = 0
      },
      submit() {
        this.btnDisabled = true
        this.messageError = []

        if(this.from === 0){
          this.messageError.push('Selecciona Desde')
        }
        if(this.to === 0){
          this.messageError.push('Selecciona Hacia')
        }
        if(this.cart.length === 0){
          this.messageError.push('Selecciona Item/s')
        }

        if (this.messageError.length === 0) {
          const params = {
            user_id: this.userId,
            from: this.from,
            to: this.to,
            cart: this.cart,
            comments: this.comments,
          }
          axios.post(`${this.baseApiUrl}/api/movement.new`, params).then(response => {
            if (response.data.status == true) {
              this.clean()
            }
          })
        } else {
          this.messageError.unshift('Errors below:')
          this.showError = true
          this.btnDisabled = false
        }
      },
      clean() {
        this.done = true
        this.name = ''
        this.item = 0
        this.from = 0
        this.to = 0
        this.comments = ''
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
        if(item !== undefined){
          if(this.inCart(item) === undefined){
            if(item != 0){
              this.stock(item)
            }
          }
        }
      },
    }
}
</script>
