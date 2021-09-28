<template>
  <v-container fluid style="height: 50vh;">
    <v-col cols="12">
      <highcharts
        ref="priceGraph"
        :options="chartOptions"
        :constructorType="'stockChart'"
        class="hc"
      ></highcharts>
    </v-col>
  </v-container>
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
        chart: {
          height: "100%",
          events: {
            load: function(event) {
              event.target.reflow();
            },
          },
        },

        series: [
          {
            data: [1, 2, 3], // sample data
          },
        ],
      },
    };
  },
  mounted() {
    this.$nextTick(() => {
      this.$refs.priceGraph.chart.setSize(null, window.innerHeight - 150);
      // this.$refs.priceGraph.chart.reflow();
    });
  },
};
</script>
