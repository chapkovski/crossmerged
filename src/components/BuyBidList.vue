<template>
  <v-col class="v50 nopm" cols="4">
    <v-card class="v100">
      <v-app-bar class="flex-grow-0" dense>
        Buying bids
      </v-app-bar>
      <v-card-text>
        <v-list>
          <v-list-item-group
            v-model="selectedSellingBid"
            active-class="border"
            color="indigo"
          >
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
          </v-list-item-group>
        </v-list>
      </v-card-text>

      <v-footer class="pa-2">
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
      innerList: _.map(_.range(10), (i) => _.random(50, 120)),
    };
  },
};
</script>
<style scoped>
.v50 {
  height: calc(50vh - 100px);
  min-height: 100%;
}
.v100 {
  height: 100%;
}
</style>
