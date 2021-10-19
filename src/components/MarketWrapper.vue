<template>
  <v-card :style="`{ overflow: auto; height: 450px; }`">
    <v-toolbar height="80"
      >Market {{ name }}.
      <v-sheet class="mx-2" outlined>
        <v-list-item class="d-flex">
          <v-list-item-icon>
            <v-icon v-text="`mdi-cash-fast`"></v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title
              v-text="`You currently own:`"
            ></v-list-item-title>
          </v-list-item-content>

          <v-btn class="mx-1">{{ stocksData.q }}</v-btn> stocks for total

          <v-btn class="mx-1">${{ stocksData.value }}</v-btn>
        </v-list-item>
      </v-sheet>
      <v-spacer></v-spacer>
    </v-toolbar>

    <v-row>
      <sell-bid-list></sell-bid-list>
      <buy-bid-list></buy-bid-list>
      <transaction-prices :marketName="name"></transaction-prices>
    </v-row>
  </v-card>
</template>

<script>
import TransactionPrices from "@/components/TransactionPrices.vue";
import BuyBidList from "@/components/BuyBidList.vue";
import SellBidList from "@/components/SellBidList.vue";
import MakeBid from "@/components/MakeBid.vue";
import _ from "lodash";

export default {
  props: ["name", "stocksData"],
  components: {
    TransactionPrices,
    BuyBidList,
    SellBidList,
    MakeBid,
  },
  name: "Market",
  data() {
    return { selectedSellingBid: null, items: _.range(1, 100) };
  },
};
</script>
<style>
html {
  overflow: hidden !important;
}

.v-card {
  display: flex !important;
  flex-direction: column;
}

.v-card__text {
  flex-grow: 1;
  overflow: auto;
}
.small {
  font-size: 1rem;
}
.border {
  border: 2px dashed orange;
}
/* .nopm{ padding: 0px;} */
</style>
