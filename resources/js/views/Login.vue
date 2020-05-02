<template>
    <div class="container mb-5 mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card rounded shadow p-5 bg-white border-0">
                    <h3 class="text-center">Ingresar al Panel</h3>

                    <div class="card-body">
                      <div class="alert alert-danger" role="alert" v-if="error">
                        El usuario o clave no es válido.
                      </div>
                        <form method="POST" action="/login">
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="email" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Clave</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="password" required>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                        Ingresar
                                    </button>
                                </div>
                            </div>
                        </form>

                        <hr>
                        <p class="text-center">Olvidé mi clave <a href="/forgot">Recupérala</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    data(){
      return {
        email : null,
        password : null,
        error: false
      }
    },
    methods : {
      handleSubmit(e){
        e.preventDefault()

        if (this.email && this.password) {
          axios.post('api/login', {
              email: this.email,
              password: this.password
            })
            .then(response => {
              localStorage.setItem('user_id', response.data.success.id)
              localStorage.setItem('user', response.data.success.name)
              localStorage.setItem('jwt', response.data.success.token)

              if (localStorage.getItem('jwt') != null){
                // set on store
                this.setUser(response.data.success)
                window.location = '/panel/board';
              }
            })
            .catch(function (error) {
              this.error = true
            });
        }
      },
    },
    beforeRouteEnter (to, from, next) {
      if (localStorage.getItem('jwt')) {
        return next('board');
      }

      next();
    }
  }
</script>
