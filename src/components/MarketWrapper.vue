<template>
  <v-card :style="`{ overflow: auto; height: 450px; }`">
    <v-toolbar
      >Market {{ name }}: currently selected selling bid:
      {{ selectedSellingBid }}  <v-spacer></v-spacer>
        <v-btn
  elevation="2"
  fab
></v-btn>  </v-toolbar
    >

    <v-row>
  <sell-bid-list></sell-bid-list>
  <buy-bid-list></buy-bid-list>
  <transaction-prices></transaction-prices>
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
  props: ["name"],
  components: {
    TransactionPrices,
    BuyBidList,
    SellBidList,
    MakeBid,
  },
  name: "Market",
  data() {
    return {selectedSellingBid:null, items: _.range(1, 100) };
  },
};
</script>
<style >
 

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
