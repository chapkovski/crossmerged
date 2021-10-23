<template>
  <v-col style="height:100%" class="mx-3 d-flex flex-column my-1">
    <v-card
      class="d-flex flex-column buysellcard"
      fill-height
      style="height:95%"
    >
      <v-app-bar class="flex-grow-0" dense>
        Buying bids
      </v-app-bar>
      <v-card-text class="overflow-y-auto" style="margin-bottom:48px">
        <v-list class="listouter1">
          <v-list-item-group
            v-model="selectedSellingBid"
            active-class="border"
            color="indigo"
            class="listouter2"
          >
            <div id="inner">
              <v-list-item
                v-for="(item, i) in innerList"
                :key="i"
                :id="`li_${item}`"
                dense
              >
                <v-list-item-content>
                  <v-list-item-title v-text="item"></v-list-item-title>
                </v-list-item-content>
              </v-list-item>
            </div>
          </v-list-item-group>
        </v-list>
      </v-card-text>

      <v-footer class="bottom_footer">
        <v-btn color="red" :disabled="selectedSellingBid === null">Sell</v-btn>
      </v-footer>
    </v-card>
  </v-col>
</template>

<script>
import _ from "lodash";
export default {
  components: {},
  name: "BuyBidList",

  data() {
    return {
      selectedSellingBid: null,
      innerList: _.map(_.range(12), (i) => _.random(50, 120)),
    };
  },
};
</script>
<style scoped></style>
