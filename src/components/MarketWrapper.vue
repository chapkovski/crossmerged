<template>
  <v-card class="mr-3 market ">
    <v-card-title>Market: {{ marketName }}</v-card-title>
    <v-card-text>
      <v-row ref="marketB d-flex">
        <v-col cols="12" >
          <transaction-prices></transaction-prices>
        </v-col>
        <v-col cols="12">
          <v-row>
            <v-col cols="3"> BIDS TO SELL</v-col>
            <v-col cols="3"> BIDS TO BUY</v-col>
            <v-col cols="3">ORDER SUBMISSION</v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-card-text>
  </v-card>
</template>

<script>
import TransactionPrices from "@/components/TransactionPrices.vue";
import BuyBidList from "@/components/BuyBidList.vue";
import SellBidList from "@/components/SellBidList.vue";
import MakeBid from "@/components/MakeBid.vue";

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
    return {};
  },
};
</script>
<style scoped>
.market {
 
  overflow-y: scroll;
}
html {
  /* overflow-y: auto; */
}
</style>
