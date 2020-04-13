<template>
  <div class="container-fluid" id="board">
    <div class="container">

      <div class="row">

        <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
          <div class="card">
            <div class="card-body">
              <div class="d-flex flex-md-column flex-xl-row flex-wrap justify-content-between align-items-md-center justify-content-xl-between">
                <div class="float-left">
                  <i class="mdi mdi-cube text-danger icon-lg"></i>
                  <font-awesome-icon icon="box" class="text-danger" size="2x"/></i>
                </div>
                <div class="float-right">
                  <p class="mb-0 text-right">Total Hoy</p>
                  <div class="fluid-container">
                    <h3 class="font-weight-medium text-right mb-0">{{ todayTotal | currency }}</h3>
                  </div>
                </div>
              </div>
               <p class="text-muted mt-3 mb-0 text-left text-md-center text-xl-left">
                 <i aria-hidden="true" class="mdi mdi-alert-octagon mr-1"></i> Another text
               </p>
             </div>
           </div>
         </div>

         <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
           <div class="card">
             <div class="card-body">
               <div class="d-flex flex-md-column flex-xl-row flex-wrap justify-content-between align-items-md-center justify-content-xl-between">
                 <div class="float-left">
                   <i class="mdi mdi-cube text-danger icon-lg"></i>
                   <font-awesome-icon icon="box" class="text-danger" size="2x"/></i>
                 </div>
                 <div class="float-right">
                   <p class="mb-0 text-right">Ganancia Hoy</p>
                   <div class="fluid-container">
                     <h3 class="font-weight-medium text-right mb-0 green">{{ todayProfit | currency }}</h3>
                   </div>
                 </div>
               </div>
                <p class="text-muted mt-3 mb-0 text-left text-md-center text-xl-left">
                  <i aria-hidden="true" class="mdi mdi-alert-octagon mr-1"></i> Another text
                </p>
              </div>
            </div>
          </div>

          <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
            <div class="card">
              <div class="card-body">
                <div class="d-flex flex-md-column flex-xl-row flex-wrap justify-content-between align-items-md-center justify-content-xl-between">
                  <div class="float-left">
                    <i class="mdi mdi-cube text-danger icon-lg"></i>
                    <font-awesome-icon icon="box" class="text-danger" size="2x"/></i>
                  </div>
                  <div class="float-right">
                    <p class="mb-0 text-right">Total del Mes</p>
                    <div class="fluid-container">
                      <h3 class="font-weight-medium text-right mb-0">{{ monthTotal | currency }}</h3>
                    </div>
                  </div>
                </div>
                 <p class="text-muted mt-3 mb-0 text-left text-md-center text-xl-left">
                   <i aria-hidden="true" class="mdi mdi-alert-octagon mr-1"></i> Another text
                 </p>
               </div>
             </div>
           </div>

           <div class="col-xl-3 col-lg-3 col-md-3 col-sm-6 grid-margin stretch-card">
             <div class="card">
               <div class="card-body">
                 <div class="d-flex flex-md-column flex-xl-row flex-wrap justify-content-between align-items-md-center justify-content-xl-between">
                   <div class="float-left">
                     <i class="mdi mdi-cube text-danger icon-lg"></i>
                     <font-awesome-icon icon="box" class="text-danger" size="2x"/></i>
                   </div>
                   <div class="float-right">
                     <p class="mb-0 text-right">Ganancia del Mes</p>
                     <div class="fluid-container">
                       <h3 class="font-weight-medium text-right mb-0 green">{{ monthProfit | currency }}</h3>
                     </div>
                   </div>
                 </div>
                  <p class="text-muted mt-3 mb-0 text-left text-md-center text-xl-left">
                    <i aria-hidden="true" class="mdi mdi-alert-octagon mr-1"></i> Another text
                  </p>
                </div>
              </div>
            </div>

       </div>

      <div class="row">
        <div class="col-lg-12">
          <div class="card">
            <div class="card-body">
              <p class="lead mb-3">Stats</p>

              <LineChart :chartdata="chartData"/>
            </div>
          </div>
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
      chartData: {}
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
    stats() {
      axios.defaults.headers.common['Content-Type'] = 'application/json'
      axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('jwt')

      axios.post(`${this.baseApiUrl}/api/board/stats`, {user_id: this.userId}).then(response => {
        if(response.status == 200){
          this.chartData = {
            labels: [
              1, 2, 3, 4, 5, 6, 7, 8, 9, 10,
              11, 12, 13, 14, 15, 16, 17, 18, 19, 20,
              21, 22, 23, 24, 25, 2, 27, 28, 29, 30, 31
            ],
            datasets: [
              {
                label: 'This Month',
                data: response.data.this,
                backgroundColor: "rgba(1, 116, 188, 0.50)",
                borderColor: "rgba(1, 116, 188, 0.50)",
                pointBackgroundColor: "#007bff"
              },
              {
                label: 'Last Month',
                data: response.data.last,
                backgroundColor: "#fffbdb",
                borderColor: "#fffacc",
                pointBackgroundColor: "#fffacc"
              },
            ]
          }
        }
      })
    },
  },
  mounted() {
    this.today()
    this.month()
    this.stats()
  },
  computed: {
    ...mapGetters(['baseApiUrl'])
  },
}
</script>
