<template>
    <div class="container board">

      <small>
        <ul class="list-inline-mb-0 pl-0">
          <li class="list-inline-item"><a href="#">Board</a> ></li>
          <li class="list-inline-item">Profile</li>
        </ul>
      </small>

        <div class="row">
          <div class="col-6">

            <p class="lead">Profile</p>

            <div class="card">
              <div class="card-body">
                <div class="alert alert-success" v-if="showSuccessUpdate">
                  {{ messageSuccessUpdate }}
                </div>
                <div class="alert alert-danger" v-if="showError">
                  {{ messageError }}
                </div>
                <!-- init -->
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <div class="col-12">
                      <label for="name">Email</label>
                      <p><strong>{{ email }}</strong></p>
                    </div>
                    <div class="col-12">
                      <label for="name">Name</label>
                      <input type="text" class="form-control" id="name" aria-describedby="name" v-model="name" required autofocus>
                    </div>
                    <div class="col-12">
                      <label for="business_name">Business Name</label>
                      <input type="text" class="form-control" id="business_name" aria-describedby="business_name" v-model="business_name" required>
                    </div>
                    <div class="col-12">
                      <label for="business_ruc">RUT</label>
                      <input type="text" class="form-control" id="business_ruc" aria-describedby="business_ruc" v-model="business_ruc" required>
                    </div>
                    <div class="col-12">
                      <label for="business_address">Address</label>
                      <input type="text" class="form-control" id="business_address" aria-describedby="business_address" v-model="business_address" required>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="update">{{ submitName }}</button>
                </form>
                <!-- end -->
              </div>
            </div>
          </div>

          <div class="col-6">

            <p class="lead">Change Password</p>

            <div class="card">
              <div class="card-body">
                <div class="alert alert-success" v-if="showSuccessUpdatePassword">
                  {{ messageSuccessUpdatePassword }}
                </div>
                <div class="alert alert-danger" v-if="showErrorPassword">
                  {{ messageErrorPassword }}
                </div>
                <!-- init -->
                <form @submit.prevent="handleSubmit">
                  <div class="form-group">
                    <div class="col-12">
                      <label for="password">Actual Password</label>
                      <input type="text" class="form-control" id="password" aria-describedby="password" v-model="password" required autofocus>
                    </div>
                    <div class="col-12">
                      <label for="new_password">New Password</label>
                      <input type="text" class="form-control" id="new_password" aria-describedby="new_password" v-model="new_password" required>
                    </div>
                    <div class="col-12">
                      <label for="new_password_confirmation">Repeat New Password</label>
                      <input type="text" class="form-control" id="new_password_confirmation" aria-describedby="new_password_confirmation" v-model="new_password_confirmation" required>
                    </div>
                  </div>
                  <button type="button" class="btn btn-primary" @click="updatePasssword">{{ submitName }}</button>
                </form>
                <!-- end -->
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
        email: '',
        business_name: '',
        business_ruc: '',
        business_address: '',
        password: '',
        new_password: '',
        new_password_confirmation: '',
        submitName: 'Update',
        showError: false,
        showSuccessUpdate: false,
        messageSuccessUpdate: 'Updated!',
        showSuccessUpdatePassword: false,
        messageSuccessUpdatePassword: 'Updated!',
      }
    },
    methods : {
      update(e) {
        e.preventDefault()
        if (this.name.length > 0) {
          const params = {
            user_id: this.userId,
            name: this.name,
            business_name: this.business_name,
            business_ruc: this.business_ruc,
            business_address: this.business_address,
          }
          axios.patch(`${this.baseApiUrl}/api/user/update`, params).then(response => {
            if(response.status == 200){
              this.showSuccessUpdate = true;
            }
          })
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      updatePasssword(e) {
        e.preventDefault()
        if (this.name.length > 0) {
          const params = {
            user_id: this.userId,
            password: this.password,
            new_password: this.new_password,
            new_password_confirmation: this.new_password_confirmation,
          }
          axios.patch(`${this.baseApiUrl}/api/user/updatePassword`, params).then(response => {
            if(response.status == 200){
              this.showSuccessUpdatePassword = true;
            }
          })
        } else {
          this.showError = true
          this.messageError = 'Error chars length'
        }
      },
      info() {
        axios.defaults.headers.common['Content-Type'] = 'application/json'
        axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

        axios.post(`${this.baseApiUrl}/api/user/info`, {user_id: this.userId}).then(response => {
          this.name = response.data.name
          this.email = response.data.email
          this.business_name = response.data.business_name
          this.business_ruc = response.data.business_ruc
          this.business_address = response.data.business_address
        })
      },
    },
    mounted() {
      this.showError = false
      this.info()
    },
    computed: {
      ...mapGetters(['baseApiUrl'])
    }
}
</script>
