<template>
  <div class="container">
    <p class="lead">Board</p>

    <div class="row">
      <!-- daily sales -->
      <div class="col-sm-4 mb-4">
        <div class="card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">Today</h5></li>
            <li class="list-group-item">Sales <strong class="float-right">{{ todayTotal | currency }}</strong></li>
            <li class="list-group-item text-success">Profit <strong class="float-right">{{ todayProfit | currency }}</strong></li>
          </ul>
        </div>
      </div>

      <!-- monthly sales -->
      <div class="col-sm-4 mb-4">
        <div class="card shadow-sm">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">This Month</h5></li>
            <li class="list-group-item">Sales <strong class="float-right">{{ monthTotal | currency }}</strong></li>
            <li class="list-group-item text-success">Profit <strong class="float-right">{{ monthProfit | currency }}</strong></li>
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
            <li class="list-group-item"><router-link :to="{ name: 'stock' }" class="text-dark">Stock</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'sales.new' }" class="text-dark">+ New Sale</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'items' }" class="text-dark">Items</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'movement.new' }" class="text-dark">+ New Movement</router-link></li>
            <li class="list-group-item"><router-link :to="{ name: 'item.new' }" class="text-dark">+ New Item</router-link></li>
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
      userId: localStorage.getItem('user_id'),
      todayTotal: 0,
      todayProfit: 0,
      monthTotal: 0,
      monthProfit: 0,
    }
  },
  methods : {
    today() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

      axios.post(`${this.baseApiUrl}/api/board/today`, {user_id: this.userId}).then(response => {
        this.todayTotal  = (response.data[0].total == null) ? 0 : (response.data[0].total)
        this.todayProfit = (response.data[0].profit == null) ? 0 : (response.data[0].profit)
      })
    },
    month() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

      axios.post(`${this.baseApiUrl}/api/board/month`, {user_id: this.userId}).then(response => {
        this.monthTotal  = (response.data[0].total == null) ? 0 : (response.data[0].total)
        this.monthProfit = (response.data[0].profit == null) ? 0 : (response.data[0].profit)
      })
    },
  },
  mounted() {
    this.today()
    this.month()
  },
  computed: {
    ...mapGetters(['baseApiUrl'])
  }
}
</script>
