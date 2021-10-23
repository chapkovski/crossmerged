<template>
  <v-col  cols="4">
    <v-card >
      <v-app-bar class="flex-grow-0" dense>
        Transaction prices
      </v-app-bar>
      <v-card-text>
        <v-list>
          <v-list-item-group color="indigo">
            <v-list-item
              disabled
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
        <v-dialog v-model="dialog" width="500">
          <template v-slot:activator="{ on, attrs }">
            <v-btn color="green" dark v-bind="attrs" v-on="on">
              Submit order
            </v-btn>
          </template>

          <v-card>
            <v-card-title class="text-h5 grey lighten-2">
              Put a selling/buying bid for Market {{marketName}}
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
              <v-text-field label="Price" solo placeholder="Price"  type='number' autofocus hint='insert a price and click the corresponding  button' required></v-text-field>
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
      </v-footer>
    </v-card>
  </v-col>
</template>

<script>
import _ from "lodash";
export default {
  components: {},
  props:['marketName'],
  name: "TransactionPrices",

  data() {
    return {
      dialog: false,
      innerList: _.map(_.range(10), (i) => _.random(50, 120)),
      items: [
        { text: "Money available", icon: "mdi-account", value: 20 },
        { text: "Stocks you own", icon: "mdi-cash-fast", value: 12 },
        { text: "Current stock price", icon: "mdi-hand-coin", value: 11.234 },
      ],
    };
  },
};
</script>
