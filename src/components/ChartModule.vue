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
var seriesOptions = [],
  seriesCounter = 0,
  names = ["MSFT", "AAPL", "GOOG"];
import axios from "axios";
import Highcharts from "highcharts";
import stockInit from "highcharts/modules/stock";
import _ from "lodash";
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
          {name:'AAPL',
            type: "spline",
            data: _.map(_.range(100), (i) => _.random(0, 100)),
          },
          {name:'GOOG',
            type: "spline",
            data: _.map(_.range(100), (i) => _.random(50, 120)),
          },
        ],
      },
    };
  },
  async mounted() {
    const appleurl =
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/aapl-c.json";
    const googleurl =
      "https://cdn.jsdelivr.net/gh/highcharts/highcharts@v7.0.0/samples/data/goog-c.json";
    const data = await axios.get(appleurl);
    this.chartOptions.series[0].data = data.data;
    const data2 = await axios.get(googleurl);
    this.chartOptions.series[1].data = data2.data;

    this.$nextTick(() => {
      this.$refs.priceGraph.chart.setSize(null, window.innerHeight - 150);
      // this.$refs.priceGraph.chart.reflow();
    });
  },
};
</script>
