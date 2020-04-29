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
                                    <input type="checkbox" name="terms" id="terms" value="1">
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
                name : "",
                email : "",
                password : "",
                password_confirmation : ""
            }
        },
        methods : {
            handleSubmit(e) {
                e.preventDefault()

                if (this.password === this.password_confirmation && this.password.length > 0)
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
                } else {
                    this.password = ""
                    this.passwordConfirm = ""

                    return alert('Passwords do not match')
                }
            }
        },
        beforeRouteEnter (to, from, next) {
            if (localStorage.getItem('jwt')) {
                return next('board');
            }

            next();
        }
    }
</script>
