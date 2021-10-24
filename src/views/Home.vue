<template>
  <v-app id="inspire">
    <v-app-bar app height="70">
      <v-sheet elevation="3" class="d-flex pa-3 align-center rounded-sm" height="64px">
        <div class="font-weight-bold mx-1 mr-3">Market A value:</div>
        <v-sheet outlined class="d-flex align-center rounded-l-xl pa-2 ">
          <div class="d-flex align-center  ">
            In assets:
            <div
              class="ml-1 pa-2 primary   white--text text-no-wrap rounded-pill"
            >
              $44.2
            </div>
          </div>
        </v-sheet>
        <v-sheet outlined class="d-flex align-center ml-1 pa-2">
          <div class="d-flex align-center  ">
            In cash:
            <div
              class="ml-1 pa-2 primary   white--text text-no-wrap rounded-pill"
            >
              $123
            </div>
          </div>
        </v-sheet>
         <v-sheet outlined class="d-flex align-center ml-1 pa-2 rounded-r-xl">
          <div class="d-flex align-center  font-weight-bold ">
            Total:
            <div
              class="ml-1 pa-2 red   white--text text-no-wrap rounded-pill"
            >
              $167.2
            </div>
          </div>
        </v-sheet>
      </v-sheet>
    <v-sheet elevation="3" class="d-flex pa-3 align-center rounded-sm" height="64px">
        <div class="font-weight-bold mx-1 mr-3">Market B value:</div>
        <v-sheet outlined class="d-flex align-center rounded-l-xl pa-2 ">
          <div class="d-flex align-center  ">
            In assets:
            <div
              class="ml-1 pa-2 primary   white--text text-no-wrap rounded-pill"
            >
              $21.0
            </div>
          </div>
        </v-sheet>
        <v-sheet outlined class="d-flex align-center ml-1 pa-2">
          <div class="d-flex align-center  ">
            In cash:
            <div
              class="ml-1 pa-2 primary   white--text text-no-wrap rounded-pill"
            >
              $456
            </div>
          </div>
        </v-sheet>
         <v-sheet outlined class="d-flex align-center ml-1 pa-2 rounded-r-xl">
          <div class="d-flex align-center  font-weight-bold ">
            Total:
            <div
              class="ml-1 pa-2 red   white--text text-no-wrap rounded-pill"
            >
              $477.0
            </div>
          </div>
        </v-sheet>
      </v-sheet>
      <v-spacer></v-spacer>
      <transaction-prices></transaction-prices>
    </v-app-bar>
    <v-main>
      <v-row fill-height class="d-flex align-stretch" style="height:100%">
        <v-col cols="6">
          <market name="A" :stocksData="{ q: 2, price: 22.1, totalV: 44.2 }" />
        </v-col>
        <v-col cols="6">
          <market name="B" :stocksData="{ q: 10, price: 2.1, totalV: 21.0 }" />
        </v-col>
      </v-row>
    </v-main>
  </v-app>
</template>

<script>
import _ from "lodash";
import Market from "@/components/MarketWrapper";

import TransactionPrices from "@/components/TransactionPrices.vue";
export default {
  components: { Market, TransactionPrices },
  data: () => ({
    cards: ["Today", "Yesterday"],
    innerList: _.range(1, 10),

    drawer: null,
  }),
  watch: {
    innerList: function() {
      const newone = _.last(this.innerList);
      console.debug("NEWONE!!!", newone);
      this.$nextTick(function() {
        const el = document.getElementById(`li_${newone}`);

        el.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
  mounted() {
    // THIS ONE WE NEED ONLY AS A PLUGGER FOR IMITATING MARKET ACTIVITY WHILE DEVELOPING
    // this.stockInterval = setInterval(() => {
    //   const r = _.random(0, 10000);
    //   this.innerList.push(r);
    //   const el = this.$refs[`li_${r}`];
    //   if (el) {
    //     console.log("are we???");
    //     // Use el.scrollIntoView() to instantly scroll to the element
    //     el.scrollIntoView({ behavior: "smooth" });
    //   }
    // }, 3000);
  },
  methods: {
    scrollToEnd: function() {
      var container = this.$el.querySelector("#sellcontainer");

      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>
