<template>
    <div class="container mb-5 mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card rounded shadow p-5 bg-white border-0">
                    <h3 class="text-center">Recuperar Clave</h3>

                    <div class="card-body">
                      <div class="alert alert-danger" role="alert" v-if="error">
                        Hemos enviado un email con los pasos a seguir.
                      </div>
                        <form method="POST" action="/login">
                            <div class="form-group row">
                                <label for="email" class="col-sm-4 col-form-label text-md-right">E-Mail</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="email" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-8 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                        Recuperar
                                    </button>
                                </div>
                            </div>
                        </form>
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
        error: false
      }
    },
    methods : {
      handleSubmit(e){
        e.preventDefault()
        if (this.email) {
          axios.post(`${this.baseApiUrl}/api/password/create`, {
              email: this.email,
            })
            .then(response => {
                console.log(response)
            })
            .catch(function (error) {
              console.log(error)
              this.error = true
            });
        }
      },
    },
    computed: {
      ...mapGetters(['baseApiUrl'])
    }
  }
</script>
