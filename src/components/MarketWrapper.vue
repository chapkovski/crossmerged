<template>
  <v-container fluid fill-height>
    <v-row class="halfchik yellow d-flex flex-row">
      <v-col cols="12" style="height:30%;overflow-y:scroll">
        <transaction-prices></transaction-prices>
      </v-col>
      <v-col cols="12" style="height:70%;overflow-y:scroll"  class='d-flex'>
        
        <v-col cols="4"  >
          <make-bid></make-bid>
        </v-col>
        <v-col cols="4">
          <sell-bid-list></sell-bid-list>
        </v-col>
        <v-col cols="4">
          <buy-bid-list></buy-bid-list>
        </v-col>
        
      </v-col>
    </v-row>

   
  </v-container>
</template>

<script>
import TransactionPrices from "@/components/TransactionPrices.vue";
import BuyBidList from "@/components/BuyBidList.vue";
import SellBidList from "@/components/SellBidList.vue";
import MakeBid from "@/components/MakeBid.vue";
import _ from "lodash";

export default {
  props: ["marketName"],
  components: {
    TransactionPrices,
    BuyBidList,
    SellBidList,
    MakeBid,
  },
  name: "Market",
  data() {
    return { items: _.range(1, 100) };
  },
};
</script>
<style scoped>
.halfchik {
  overflow-y: scroll !important;
  height: calc(100vh - 50px) !important;
}
.topchik {
  height: 30%;
  background: red;
  overflow-y: scroll !important;
}
</style>
