<template>
    <div class="container">
        <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <!-- <th scope="col">#</th> -->
                      <th scope="col">Name</th>
                      <th scope="col">Category</th>
                      <th scope="col" class="text-right">Sale Price</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in list">
                      <!-- <td scope="row">{{ element.item_id }}</td> -->
                      <td scope="row">{{ element.item_name }} - {{ element.sku_name }}</td>
                      <td scope="row">{{ element.category_name }}</td>
                      <td scope="row" class="text-right">{{ element.sku_sale_price }}</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-warning" type="button" name="button" @click="update(element.sku_id)">
                          <i class="fa fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" type="button" name="button" @click="remove(element.sku_id)">
                          <i class="fa fa-trash"></i> Remove
                        </button>
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

export default {
    components: {
        //
    },
    data(){
      return {
        list: [],
      }
    },
    methods : {
      items() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get('api/items').then(response => {
          console.log(response)
          this.list = response['data']
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`api/item/${id}`).then(response => {
            console.log(response)
            this.items()
          })
        }
      },
    },
    mounted() {
      this.showError = false
      this.items()
    },
    computed: {
      //
    }
}
</script>
