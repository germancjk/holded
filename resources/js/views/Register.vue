<template>
    <div class="container mb-5 mt-5">
        <div class="row justify-content-center">
            <div class="col-md-8">
                <div class="card rounded shadow p-5 bg-white border-0">
                    <h3 class="text-center">Registrate Gratis!</h3>
                    <p class="text-center">Aprovecha el descuento! Acceso total GRATIS!</p>
                    <hr>

                    <div class="card-body">
                        <form method="POST" action="/register">
                          <div class="alert alert-danger" role="alert" v-if="errors.length">
                            <p>
                              <b>Por favor, corrija el(los) siguiente(s) error(es):</b>
                              <ul>
                                <li v-for="error in errors">{{ error }}</li>
                              </ul>
                            </p>
                          </div>

                            <div class="form-group row">
                                <label for="name" class="col-md-4 col-form-label text-md-right">Nombre</label>

                                <div class="col-md-6">
                                    <input id="name" type="text" class="form-control" v-model="name" required autofocus>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="email" class="col-md-4 col-form-label text-md-right">E-Mail</label>

                                <div class="col-md-6">
                                    <input id="email" type="email" class="form-control" v-model="email" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password" class="col-md-4 col-form-label text-md-right">Clave</label>

                                <div class="col-md-6">
                                    <input id="password" type="password" class="form-control" v-model="password" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right">Confirmar Clave</label>

                                <div class="col-md-6">
                                    <input id="password-confirm" type="password" class="form-control" v-model="password_confirmation" required>
                                </div>
                            </div>

                            <div class="form-group row">
                                <label for="password-confirm" class="col-md-4 col-form-label text-md-right"></label>

                                <div class="col-md-6">
                                    <input type="checkbox" name="terms" id="terms" v-model="terms" value="1">
                                    <label for="terms">acepto los términos y condiciones</label>
                                </div>
                            </div>

                            <div class="form-group row mb-0">
                                <div class="col-md-6 offset-md-4">
                                    <button type="submit" class="btn btn-primary" @click="handleSubmit">
                                        Registrarme
                                    </button>
                                </div>
                            </div>
                        </form>

                        <hr>
                        <p class="text-center">Ya tengo cuenta <a href="/login">Ingresar</a> </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data(){
            return {
                name : null,
                email : null,
                password : null,
                password_confirmation : null,
                terms: null,
                errors: [],
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()
                this.errors = [];

                if (!this.name) {
                  this.errors.push('El nombre es obligatorio.');
                }

                if (!this.email) {
                  this.errors.push('El correo electrónico es obligatorio.');
                } else if (!this.validEmail(this.email)) {
                  this.errors.push('El correo electrónico debe ser válido.');
                }

                if (this.password.length < 6) {
                  this.errors.push('La clave debe ser mayor a 6 caracteres.');
                }

                if (this.password !== this.password_confirmation) {
                  this.errors.push('Las claves no coinciden.');
                }

                if (!this.terms) {
                  this.errors.push('Por favor chequea los términos y condiciones.');
                }

                if (this.errors.length === 0)
                {
                    axios.post('api/register', {
                        name: this.name,
                        email: this.email,
                        password: this.password,
                        c_password : this.password_confirmation
                      })
                      .then(response => {
                        localStorage.setItem('user',response.data.success.name)
                        localStorage.setItem('jwt',response.data.success.token)

                        if (localStorage.getItem('jwt') != null){
                            this.$router.go('/panel/board')
                        }
                      })
                      .catch(error => {
                        console.error(error);
                      });
                }
            },
            validEmail: function (email) {
              var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
              return re.test(email);
            }
        },
        beforeRouteEnter (to, from, next) {
            if (localStorage.getItem('jwt')) {
                return next('panel/board');
            }

            next();
        }
    }
</script>
