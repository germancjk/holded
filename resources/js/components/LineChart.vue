<script>
import { Line } from "vue-chartjs";

export default {
  extends: Line,
  props: ['chartdata'],
  data(){
    return {
      options: {
        responsive: true,
        maintainAspectRatio: false,
      }
    }
  },
  mounted() {
    // this.renderChart(this.chartdata, this.options)
  },
  watch: {
    chartdata: function (chartdata) {
      this.renderChart(this.chartdata, this.options)
    },
  }
};
</script>
