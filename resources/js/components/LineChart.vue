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
        // title: {
        //   display: true,
        //   text: "My Data"
        // }
      }
    }
  },
  mounted() {
    this.renderChart(this.chartdata, this.options)
  }
};
</script>
