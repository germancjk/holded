<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item"><a href="#">Tools</a> ></li>
          <li class="list-inline-item">Taxes</li>
        </ul>
      </small>

      <p class="lead">Taxes</p>

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
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                    </div>
                    <div class="col-12">
                      <label for="percent">Percent</label>
                      <input type="text" class="form-control" id="percent" aria-describedby="percent" v-model="percent" required>
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
                      <th scope="col">Percent</th>
                      <th scope="col"></th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr v-for="element,index in taxes">
                      <th scope="row">{{ element.id }}</th>
                      <td>{{ element.name }}</td>
                      <td>{{ element.percent }}</td>
                      <td class="text-right">
                        <button class="btn btn-sm btn-outline-info" type="button" name="button" @click="update(element.id)">
                          <font-awesome-icon icon="edit" /> Edit
                        </button>
                        <button class="btn btn-sm btn-outline-danger" type="button" name="button" @click="remove(element.id)">
                          <font-awesome-icon icon="trash" /> Remove
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
        percent: '',
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
            axios.patch(`${this.baseApiUrl}/api/tax/${this.id}`, { user_id: this.userId, name: this.name, percent: this.percent }).then(response => {
                this.name = ''
                this.percent = ''
                this.submitName = 'Add'
                this.getTaxes()
            })
          } else {
            axios.post(`${this.baseApiUrl}/api/tax`, { user_id: this.userId, name: this.name, percent: this.percent }).then(response => {
                this.name = ''
                this.percent = ''
                this.getTaxes()
            })
          }
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      update(id) {
        this.edit = true

        axios.get(`${this.baseApiUrl}/api/tax/${id}`).then(response => {
          this.submitName = 'Update'
          this.id = id
          this.name = response.data.name
          this.percent = response.data.percent
        })
      },
      remove(id) {
        if (id > 0) {
          axios.delete(`${this.baseApiUrl}/api/tax/${id}`, { user_id: this.userId }).then(response => {
            this.getTaxes()
          })
        }
      },
      ...mapActions(['getTaxes'])
    },
    mounted() {
      this.showError = false
      this.getTaxes()
    },
    computed: {
      ...mapGetters(['taxes'])
    }
}
</script>
