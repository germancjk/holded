<template>
    <div class="container">

    </div>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

  export default {
    data(){
      return {
        email : "",
      }
    },
    methods : {
      logout(){
        axios.post('api/logout', {
            email: this.email,
          })
          .then(response => {
              localStorage.removeItem('user_id')
              localStorage.removeItem('user')
              localStorage.removeItem('jwt')

              window.location = '/'
          })
          .catch(function (error) {
            console.error(error);
          });
      },
    },
    mounted() {
      this.logout()
    },
  }
</script>
