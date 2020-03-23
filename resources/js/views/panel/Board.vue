<template>
  <div class="container">
    <p class="lead">Board</p>

    <div class="row">
      <!-- daily sales -->
      <div class="col-sm-4 mb-4">
        <div class="card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">Today</h5></li>
            <li class="list-group-item">Sales <strong class="float-right">12.000,00 €</strong></li>
            <li class="list-group-item text-success">Profit <strong class="float-right">8.540,00 €</strong></li>
          </ul>
        </div>
      </div>

      <!-- monthly sales -->
      <div class="col-sm-4 mb-4">
        <div class="card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">This Month</h5></li>
            <li class="list-group-item">Sales <strong class="float-right">121.000,00 €</strong></li>
            <li class="list-group-item text-success">Profit <strong class="float-right">46.540,00 €</strong></li>
          </ul>
        </div>
      </div>

      <!-- user info -->
      <div class="col-sm-4 mb-4">
        <div class="card text-white bg-primary shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item text-white bg-primary"><h5 class="my-0">Hi, Germán!</h5></li>
            <li class="list-group-item text-white bg-primary">My Profile</li>
            <li class="list-group-item text-white bg-primary">Dapibus ac facilisis in</li>
          </ul>
        </div>
      </div>

    </div>

    <div class="row">
      <!-- monthly stats -->
      <div class="col-sm-8 mb-4">
        <div class="card shadow-sm">
          <div class="card-body">
            monthly stats
            https://vue-chartjs.org/guide/#introduction
          </div>
        </div>
      </div>

      <!-- quick links -->
      <div class="col-sm-4 mb-4">
        <div class="card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">Quick Links</h5></li>
            <li class="list-group-item">Stock</li>
            <li class="list-group-item"><router-link :to="{ name: 'items' }" class="text-dark">Items</router-link></li>
            <li class="list-group-item">+ New Movement</li>
            <li class="list-group-item">+ New Item</li>
          </ul>
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
      //
    }
  },
  methods : {
    //
  },
  mounted() {
    //
  },
  computed: {
    ...mapGetters(['baseApiUrl'])
  }
}
</script>
