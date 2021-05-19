<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item"><router-link :to="{ name: 'sales' }">Ventas</router-link> ></li>
          <li class="list-inline-item">Nueva Venta</li>
        </ul>
      </small>

      <!-- messages -->
      <div v-if="done" class="alert alert-success" role="alert">
        Sale done!
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
                  <label for="tax">Tienda <span class="text-danger">*</span></label>
                  <v-select v-model="from" label="name" :options="stores" :reduce="stores => stores.id" ></v-select>
                </div>
                <div class="form-group col-3">
                  <label>Cantidad <span class="text-danger">*</span></label>
                  <input type="text" v-model="quantity" class="form-control">
                </div>
                <div class="form-group col-3">
                  <label>Descuento %</label>
                  <input type="text" v-model="discount" class="form-control">
                </div>
              </div>
              <div class="form-row">
                <div class="form-group col-12">
                  <label for="name">Buscar por: Nombre, Nombre + SKU <span class="text-danger">*</span></label>
                  <v-select v-model="item" label="name" :options="list" ></v-select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- init cart -->
      <p class="lead mt-2">Cesta</p>

      <div class="row mt-2 mb-2">
        <div class="col-12">
          <div class="card">
            <div class="card-body">
              <table class="table table-hover">
                <thead>
                  <tr>
                    <th>Nombre</th>
                    <th class="text-right">Descuento %</th>
                    <th class="text-right">Cantidad</th>
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

              <table class="table table-hover">
                <tbody>
                  <tr class="text-right">
                    <td>Ganancia: {{ cartProfit }} €</td>
                  </tr>
                  <tr class="text-right">
                    <td>Impuestos: {{ cartTaxes }} €</td>
                  </tr>
                  <tr class="text-right">
                    <td><strong>Total: {{ cartTotal }} €</strong> </td>
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
        quantity: 1,
        discount: 0,
        list: [],
        cart: [],
        btnDisabled: false,
        submitName: 'Hecho',
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
      addCart(item) {
        const total = this.quantity * item.sku_sale_price
        const taxes = (total * item.percent) / 100
        const profit = (total - taxes) - (item.cost * this.quantity)
        const cartCost = item.cost * this.quantity

        this.cart.push({
          sku_id: item.sku_id,
          name: item.name,
          cost: item.cost,
          percent: item.percent,
          price: item.sku_sale_price,
          priceCart: item.sku_sale_price,
          cartCost: cartCost,
          quantity: this.quantity,
          discount: this.discount,
          taxes: taxes,
          total: total,
          profit: profit,
        })
        this.item = 0
      },
      updateQuantity(quantity, index){
        const total = this.cart[index].price * quantity
        const taxes = (total * this.cart[index].percent) / 100
        const profit = (total - taxes) - (this.cart[index].cost * this.cart[index].quantity)

        this.cart[index].total = total
        this.cart[index].taxes = taxes
        this.cart[index].profit = profit
        this.cart[index].cartCost = this.cart[index].quantity * this.cart[index].cost
      },
      updateDiscount(discount, index){
        const percent = (discount / 100) * this.cart[index].price
        const price = this.cart[index].price - percent
        const total = price * this.cart[index].quantity
        const taxes = (total * this.cart[index].percent) / 100
        const profit = total - taxes - (this.cart[index].cost * this.cart[index].quantity)

        this.cart[index].priceCart = price
        this.cart[index].total = total
        this.cart[index].taxes = taxes
        this.cart[index].profit = profit
        this.cart[index].cartCost = this.cart[index].quantity * this.cart[index].cost
      },
      updateTotal(total, index){
        total = (total !== '') ? parseInt(total) : 0
        const taxes = (total * this.cart[index].percent) / 100
        const profit = total - taxes - (this.cart[index].cost * this.cart[index].quantity)

        this.cart[index].discount = 0
        this.cart[index].taxes = taxes
        this.cart[index].total = total
        this.cart[index].profit = profit
      },
      deleteItem: function(index) {
        this.cart.splice(index, 1)
        this.item = 0
      },
      submit() {
        this.btnDisabled = true
        this.messageError = []

        if(this.from === 0){
          this.messageError.push('- Selecciona Tienda')
        }

        if(this.cart.length === 0){
          this.messageError.push('- Agrega al menos un artículo')
        }

        if (this.messageError.length === 0) {
          const params = {
            user_id: this.userId,
            from: this.from,
            cart: this.cart,
            taxes: this.cartTaxes,
            total: this.cartTotal,
            profit: this.cartProfit,
            cost: this.cartCost,
          }

          axios.post(`${this.baseApiUrl}/api/sales.new`, params).then(response => {
            if (response.data.status == true) {
              this.clean()
            }
          })
        } else {
          this.messageError.unshift('Chequea los siguientes errores:')
          this.showError = true
          this.btnDisabled = false
        }
      },
      clean() {
        this.done = true
        this.showError = false
        this.name = ''
        this.item = 0
        this.from = 0
        this.cart = []
      },
      ...mapActions(['getStores'])
    },
    mounted() {
      this.getStores()
      this.find()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl']),
      cartTotal () {
        const items = this.cart
        let suma = 0
        if(items.length > 0){
          items.forEach(element => (suma += parseInt(element.total)))
        }

        return suma.toFixed(2)
      },
      cartTaxes () {
        const items = this.cart
        let suma = 0
        items.forEach(element => (suma += element.taxes))

        return suma.toFixed(2)
      },
      cartProfit () {
        const items = this.cart
        let suma = 0
        items.forEach(element => (suma += element.profit))

        return suma.toFixed(2)
      },
      cartCost () {
        const items = this.cart
        let suma = 0
        items.forEach(element => (suma += element.cartCost))

        return suma.toFixed(2)
      },
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
