<template>
  <v-col class="nopm" cols="4">
    <v-card height="350px">
      <v-app-bar class="flex-grow-0" dense>
        Transaction prices
      </v-app-bar>
      <v-card-text>
        <v-list>
          <v-list-item-group color="indigo">
            <v-list-item disabled
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
        <v-btn color="green">Submit order</v-btn>
      </v-footer>
    </v-card>
  </v-col>
</template>

<script>
import _ from "lodash";
export default {
  components: {},
  name: "TransactionPrices",

  data() {
    return { innerList: _.map(_.range(10), (i) => _.random(50, 120)) };
  },
};
</script>
