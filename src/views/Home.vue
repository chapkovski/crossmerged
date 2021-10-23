<template>
  <v-app id="inspire">
    <v-app-bar app>
      <v-sheet outlined>
        <v-list-item>
          <v-list-item-icon>
            <v-icon v-text="`mdi-bank`"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="`Total amount of money:`"
            ></v-list-item-title>
          </v-list-item-content>
          <v-list-item-action>
            <v-btn>$123</v-btn>
          </v-list-item-action>
        </v-list-item>
      </v-sheet>

      <v-spacer></v-spacer>
      <transaction-prices></transaction-prices>
    </v-app-bar>
    <v-main>
      <v-row fill-height class="d-flex align-stretch" style="height:100%">
        <v-col cols=6>
          <market name="A" :stocksData="{ q: 1, price: 22.1 }" />
         
        </v-col>
        <v-col cols=6>
           <market name="B" :stocksData="{ q: 1, price: 22.1 }" />
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
