<template>
    <div class="container">
      <div class="row">
        <div class="col-12">
          <div class="alert alert-danger" v-if="showError">
            {{ messageError }}
          </div>
        </div>
      </div>
        <div class="row">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Suppliers</h5>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <!-- init -->
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <div class="col-12">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                      <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                    <div class="col-12">
                      <label for="address">Address</label>
                      <input type="text" class="form-control" id="address" aria-describedby="address" v-model="address" required>
                      <small id="address" class="form-text text-muted">We'll never share your email with anyone else.</small>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="handleSubmit">{{ submitName }}</button>
                </form>
                <!-- end -->
              </div>
            </div>
          </div>
        </div>

        <div class="row mt-5">
          <div class="col-12">
            <div class="card">
              <div class="card-body">
                <table class="table table-hover">
                  <thead>
                    <tr>
                      <th scope="col">#</th>
                      <th scope="col">Name</th>
                      <th scope="col">Address</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in suppliers">
                      <th scope="row">{{ element.id }}</th>
                      <td>{{ element.name }}</td>
                      <td>{{ element.address }}</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-warning" type="button" name="button" @click="update(element.id)">
                          <i class="fa fa-edit"></i> Edit
                        </button>
                        <button class="btn btn-sm btn-danger" type="button" name="button" @click="remove(element.id)">
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
        userId: localStorage.getItem('user_id'),
        name: '',
        address: '',
        edit: false,
        id: null,
        submitName: 'Add',
        showError: false,
        messageError: ''
      }
    },
    methods : {
      handleSubmit(e) {
        e.preventDefault()
        if (this.name.length > 0) {
          if (this.edit) {
            axios.patch(`api/supplier/${this.id}`, { user_id: this.userId, name: this.name, address: this.address }).then(response => {
                this.name = ''
                this.address = ''
                this.submitName = 'Add'
                this.getSuppliers()
            })
          } else {
            axios.post('api/supplier', { user_id: this.userId, name: this.name, address: this.address }).then(response => {
                this.name = ''
                this.address = ''
                this.getSuppliers()
            })
          }
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      update(id) {
        this.edit = true

        axios.get(`api/supplier/${id}`).then(response => {
          this.submitName = 'Update'
          this.id = id
          this.name = response.data.name
          this.address = response.data.address
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`api/supplier/${id}`, { user_id: this.userId }).then(response => {
            this.getSuppliers()
          })
        }
      },
      ...mapActions(['getSuppliers'])
    },
    mounted() {
      this.showError = false
      this.getSuppliers()
    },
    computed: {
      ...mapGetters(['suppliers'])
    }
}
</script>
