<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item">Herramientas ></li>
          <li class="list-inline-item">Proveedores</li>
        </ul>
      </small>

      <p class="lead">Proveedores</p>

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
                <!-- init -->
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <div class="col-12">
                      <label for="name">Nombre</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                    </div>
                    <div class="col-12">
                      <label for="address">Dirección</label>
                      <input type="text" class="form-control" id="address" aria-describedby="address" v-model="address" required>
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
                      <th scope="col">Nombre</th>
                      <th scope="col">Dirección</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in suppliers">
                      <td>{{ element.name }}</td>
                      <td>{{ element.address }}</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-outline-info" type="button" name="button" @click="update(element.id)">
                          <font-awesome-icon icon="edit" /> Editar
                        </button>
                        <button class="btn btn-sm btn-outline-danger" type="button" name="button" @click="remove(element.id, element.name)">
                          <font-awesome-icon icon="trash" /> Eliminar
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
        submitName: 'Hecho',
        showError: false,
        messageError: ''
      }
    },
    methods : {
      handleSubmit(e) {
        e.preventDefault()
        if (this.name.length > 0) {
          if (this.edit) {
            axios.patch(`${this.baseApiUrl}/api/supplier/${this.id}`, { user_id: this.userId, name: this.name, address: this.address }).then(response => {
                this.name = ''
                this.address = ''
                this.submitName = 'Hecho'
                this.getSuppliers()
            })
          } else {
            axios.post(`${this.baseApiUrl}/api/supplier`, { user_id: this.userId, name: this.name, address: this.address }).then(response => {
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

        axios.get(`${this.baseApiUrl}/api/supplier/${id}`).then(response => {
          this.submitName = 'Actualizar'
          this.id = id
          this.name = response.data.name
          this.address = response.data.address
        })
      },
      remove(id, name) {
        if (id > 0) {
          this.$swal({
            title: `¿Eliminar '${name}'?`,
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Si, borrar',
            cancelButtonText: 'No, cancelar',
            showCloseButton: true,
          }).then((result) => {
            if(result.value) {
              axios.delete(`${this.baseApiUrl}/api/supplier/${id}`, { user_id: this.userId }).then(response => {
                this.getSuppliers()
              })
            }
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
      ...mapGetters(['suppliers', 'baseApiUrl'])
    }
}
</script>
