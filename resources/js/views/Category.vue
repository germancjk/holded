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
          <!-- <ul>
            <li v-for="element,index in categories">{{element.name}}</li>
          </ul> -->
            <div class="card">
              <div class="card-body">
                <h5 class="card-title">Categories</h5>
                <!-- <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p> -->
                <!-- init -->
                <form>
                  <div class="form-group">
                    <div class="col-12">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                      <small id="name" class="form-text text-muted">We'll never share your email with anyone else.</small>
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
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in categories">
                      <th scope="row">{{ element.id }}</th>
                      <td>{{ element.name }}</td>
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
export default {
    components: {
        //
    },
    data(){
      return {
        name: '',
        edit: false,
        itemId: null,
        submitName: 'Add',
        categories : [],
        showError: false,
        messageError: ''
      }
    },
    methods : {
      handleSubmit(e) {
        e.preventDefault()
        if (this.name.length > 0) {
          if (this.edit) {
            axios.patch(`api/category/${this.itemId}`, { name: this.name }).then(response => {
                console.log('Categoria modificada:', this.name)
                this.name = ''
                this.submitName = 'Add'
                this.loadList()
            })
          } else {
            axios.post('api/category', { name: this.name }).then(response => {
                console.log('Categoria ingresada:', this.name)
                this.name = ''
                this.loadList()
            })
          }
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      update(id) {
        this.edit = true

        axios.get(`api/category/${id}`).then(response => {
          console.log('Data:', response)
          this.submitName = 'Update'
          this.name = response.data.name
          this.itemId = id
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`api/category/${id}`).then(response => {
            console.log('Categoria eliminada:', id)
            this.loadList()
          })
        }
      },
      loadList() {
        let token = localStorage.getItem('jwt')

        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + token

        axios.get('api/category').then(response => {
          this.categories = []
          response.data.forEach((data) => {
            this.categories.push({
              id : data.id,
              name : data.name
            })
          })
        })
      },
      endEditing(task) {
        axios.patch(`api/task/${task.id}`, {name: task.name}).then(response => {
            // You can do anything you wan't here.
        })
      }
    },
    mounted() {
      this.showError = false
      this.loadList()
    },
    computed: {
      //
    }
}
</script>
