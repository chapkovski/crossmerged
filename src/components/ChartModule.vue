<template>
  <v-container fluid style="height: 100vh;">
    <v-layout fill-height style="width: 1000px;">
      <highcharts
        ref="priceGraph"
        :options="chartOptions"
        :constructorType="'stockChart'"
        class="hc"
      ></highcharts>
    </v-layout>
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
    console.debug("PIZDA");
    this.$nextTick(() => {
      console.debug("JOPA", this.$refs.priceGraph.chart);
      this.$refs.priceGraph.chart.setSize(1000, 500)
      this.$refs.priceGraph.chart.reflow();
    });
  },
};
</script>
