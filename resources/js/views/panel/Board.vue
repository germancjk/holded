<template>
  <div class="container board">

    <div class="alert alert-success" role="alert">
      Welcome!
    </div>

    <div class="row">

      <div class="col-lg-8 mb-4">

        <!-- profits / total -->
        <ul class="list-group list-group-horizontal shadow-sm mb-3">
          <li class="list-group-item flex-fill">
            <h2 style="font-size:30px;">{{ todayTotal | currency }}</h2>
            <p class="lead">Total <i style="font-size:14px;">- Today</i> </p>
            <hr>
            <h2 style="font-size:30px;" class="green">{{ todayProfit | currency }}</h2>
            <p class="lead green">Profit <i style="font-size:14px;">- Today</i></p>
          </li>
          <li class="list-group-item flex-fill">
            <h2 style="font-size:30px;">{{ monthTotal | currency }}</h2>
            <p class="lead">Total <i style="font-size:14px;">- This month</i></p>
            <hr>
            <h2 style="font-size:30px;" class="green">{{ monthProfit | currency }}</h2>
            <p class="lead green">Profit <i style="font-size:14px;">- This month</i></p>
          </li>
        </ul>

        <!-- chart -->
        <p class="lead mb-3">Stats</p>
        <div class="card shadow-sm">
          <div class="card-body">
            <LineChart :chartdata="chartData"/>
          </div>
        </div>

      </div>

      <!-- user info -->
      <div class="col-sm-4 mb-4">

        <div class="card shadow-sm mb-3">
          <ul class="list-group list-group-flush">
            <li class="list-group-item"><h5 class="my-0">Hi, Germán!</h5></li>
            <li class="list-group-item"><router-link :to="{ name: 'profile' }" class="text-dark">My profile</router-link></li>
            <li class="list-group-item">Dapibus ac facilisis in</li>
          </ul>
        </div>

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
// https://vue-chartjs.org/guide/#introduction
import LineChart from "../../components/LineChart.vue"

export default {
  components: {
    LineChart
  },
  data(){
    return {
      userId: localStorage.getItem('user_id'),
      todayTotal: 0,
      todayProfit: 0,
      monthTotal: 0,
      monthProfit: 0,
      chartData: {
        labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19],
        datasets: [
          {
            label: 'This Month',
            data: [40, 20, 0 ,10, 11],
            backgroundColor: "rgba(1, 116, 188, 0.50)",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "#007bff"
          },
          {
            label: 'Last Month',
            data: [20, 35, 42, 54, 12],
            backgroundColor: "rgba(1, 116, 188, 0.50)",
            borderColor: "rgba(1, 116, 188, 0.50)",
            pointBackgroundColor: "#007bff"
          },
        ]
      }
    }
  },
  methods : {
    today() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

      axios.post(`${this.baseApiUrl}/api/board/today`, {user_id: this.userId}).then(response => {
        this.todayTotal  = (response.data[0].total == null) ? 0 : response.data[0].total
        this.todayProfit = (response.data[0].profit == null) ? 0 : response.data[0].profit
      })
    },
    month() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

      axios.post(`${this.baseApiUrl}/api/board/month`, {user_id: this.userId}).then(response => {
        this.monthTotal  = (response.data[0].total == null) ? 0 : response.data[0].total
        this.monthProfit = (response.data[0].profit == null) ? 0 : response.data[0].profit
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
