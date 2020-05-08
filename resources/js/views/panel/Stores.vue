<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><router-link :to="{ name: 'board' }">Panel</router-link> ></li>
          <li class="list-inline-item">Herramientas ></li>
          <li class="list-inline-item">Tiendas</li>
        </ul>
      </small>

      <p class="lead">Tiendas</p>

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
                      <small id="name" class="form-text text-muted">Debe ser único</small>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in stores">
                      <td>{{ element.name }}</td>
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
            axios.patch(`${this.baseApiUrl}/api/store/${this.id}`, { user_id: this.userId, name: this.name }).then(response => {
                this.name = ''
                this.submitName = 'Hecho'
                this.getStores()
            })
          } else {
            axios.post(`${this.baseApiUrl}/api/store`, { user_id: this.userId, name: this.name }).then(response => {
                this.name = ''
                this.getStores()
            })
          }
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      update(id) {
        this.edit = true

        axios.get(`${this.baseApiUrl}/api/store/${id}`).then(response => {
          this.submitName = 'Actualizar'
          this.id = id
          this.name = response.data.name
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
              axios.delete(`${this.baseApiUrl}/api/store/${id}`, { user_id: this.userId }).then(response => {
                this.getStores()
              })
            }
          })
        }
      },
      ...mapActions(['getStores'])
    },
    mounted() {
      this.showError = false
      this.getStores()
    },
    computed: {
      ...mapGetters(['stores', 'baseApiUrl'])
    }
}
</script>
