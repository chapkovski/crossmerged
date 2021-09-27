<template>
  <v-app id="inspire">
    <v-app-bar app class="d-flex " height="80">
      <v-card class="d-flex flex-rows" min-width="300">
        <v-card-text
          >Period: <v-btn color="" depressed>1</v-btn> out of
          <v-btn depressed>4</v-btn></v-card-text
        >
      </v-card>

      <v-tabs  align-with-title fixed-tabs>
        <v-tabs-slider color="yellow"></v-tabs-slider>
        <v-tab to="marketA">Market A</v-tab>
        <v-tab to="marketB">Market B</v-tab>
        <v-tab to="priceChart">Price Chart</v-tab>
      </v-tabs>
    </v-app-bar>

    <v-main app> <router-view></router-view></v-main>
  </v-app>
</template>

<script>
// @ is an alias to /src
import MarketWrapper from "@/components/MarketWrapper.vue";
import ChartModule from "@/components/ChartModule.vue";

export default {
  name: "Home",
  components: {
    ChartModule,
    MarketWrapper,
  },
  data() {
    return {
      
    };
  },
};
</script>
<style scoped>
.mainupd {
  margin-top: -50 !important;
  /* padding: 40 !important; */
}
</style>
