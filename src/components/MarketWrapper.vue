<template>
  <v-card class="v-100" fill-height style="height:90vh">
    <v-toolbar height="80">
      <v-sheet
        class="mx-1 d-flex rounded-l-xl font-weight-bold  "
        outlined
       
      >
       <v-list-item>Market {{ name }}.</v-list-item>
      </v-sheet>
      <v-sheet class="mx-0 d-flex " outlined>
        <v-list-item>
          <v-list-item-content> </v-list-item-content>

          N. of shares:
        </v-list-item>
        <v-list-item-action class="font-weight-bold">
          {{ stocksData.q }}
        </v-list-item-action>
      </v-sheet>
      <v-sheet outlined class="ml-1 ">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Price: </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="font-weight-bold ">
            {{ stocksData.price }}
          </v-list-item-action>
        </v-list-item>
      </v-sheet>
      
      <v-sheet outlined class="mx-1 rounded-r-xl ">
        <v-list-item>
          <v-list-item-content>
            <v-list-item-title>Total asset value: </v-list-item-title>
          </v-list-item-content>
          <v-list-item-action class="font-weight-bold ">
            {{ stocksData.totalV }}
          </v-list-item-action>
        </v-list-item>
      </v-sheet>
      
      <v-spacer></v-spacer>
      <v-dialog v-model="dialog" width="500">
        <template v-slot:activator="{ on, attrs }">
          <v-btn color="green" v-bind="attrs" v-on="on">
            order {{ name }}
          </v-btn>
        </template>

        <v-card>
          <v-card-title class="text-h5 grey lighten-2">
            Put a selling/buying bid for Market {{ name }}
          </v-card-title>

          <v-card-text>
            <v-list dense>
              <v-subheader>Info</v-subheader>
              <v-list-item-group v-model="selectedItem" color="primary">
                <v-list-item v-for="(item, i) in items" :key="i">
                  <v-list-item-icon>
                    <v-icon v-text="item.icon"></v-icon>
                  </v-list-item-icon>
                  <v-list-item-content>
                    <v-list-item-title v-text="item.text"></v-list-item-title>
                  </v-list-item-content>
                  <v-list-item-action>
                    <v-btn icon>
                      <v-card>{{ item.value }}</v-card>
                    </v-btn>
                  </v-list-item-action>
                </v-list-item>
              </v-list-item-group>
            </v-list>
            <v-text-field
              label="Price"
              solo
              placeholder="Price"
              type="number"
              autofocus
              hint="insert a price and click the corresponding  button"
              required
            ></v-text-field>
          </v-card-text>

          <v-divider></v-divider>

          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn color="orange" @click="dialog = false" outlined>
              Buy order
            </v-btn>
            <v-btn color="green" @click="dialog = false" outlined>
              Sell order
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-dialog>
    </v-toolbar>

    <v-row
      style="height:calc(100vh - 150px);margin-top:10px;margin-bottom:10px"
    >
      <buy-bid-list :name='name'></buy-bid-list>
      <sell-bid-list :name='name'></sell-bid-list>
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
    return {
      selectedItem: null,
      selectedSellingBid: null,
      items: _.range(1, 100),
      dialog: false,

      items: [
        { text: "Money available", icon: "mdi-account", value: 20 },
        { text: "Stocks you own", icon: "mdi-cash-fast", value: 12 },
        { text: "Current stock price", icon: "mdi-hand-coin", value: 11.234 },
      ],
    };
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
.buysellcard {
  height: 95%;
}
</style>
