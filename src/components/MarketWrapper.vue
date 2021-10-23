<template>
  <v-card class="v-100" fill-height style="height:100%">
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

    <v-row style="height:calc(100vh - 120px)">
      <buy-bid-list></buy-bid-list>
      <sell-bid-list></sell-bid-list>
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

.small {
  font-size: 1rem;
}
.border {
  border: 2px dashed orange;
}
.listouter1 {
  height: 100%;
  display: flex;
  flex-direction: column;
}
.listouter2 {
  flex: 1 1 auto;
  display: flex;
  flex-direction: column-reverse;
  overflow-y: scroll;
}
.bottom_footer {
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
}

</style>
