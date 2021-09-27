<template>
  <div>
    <highcharts :options="chartOptions"></highcharts>
  </div>
</template>

<script>
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";

stockInit(Highcharts);
import { Chart } from "highcharts-vue";
export default {
  components: {
    highcharts: Chart,
  },
  name: "ChartModule",

  data() {
    return {
      chartOptions: {
        series: [
          {
            data: [1, 2, 3], // sample data
          },
        ],
      },
    };
  },
};
</script>
