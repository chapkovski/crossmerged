<template>
       <v-col class="nopm" cols="4">
        <v-card height="350px">
          <v-app-bar class="flex-grow-0" dense>
            Selling bids
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
            <v-btn color="blue" :disabled="selectedSellingBid === null"
              >Buy</v-btn
            >
          </v-footer>
        </v-card>
      </v-col>
</template>

<script>
export default {
  components: {},
  name: "SellBidList",

  data() {
    return {};
  },
};
</script>
 