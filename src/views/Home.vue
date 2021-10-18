<template>
  <v-app id="inspire">
    <v-app-bar app>JOPA </v-app-bar>
    <v-main>
      <v-container class="py-8 px-6" fluid>
        <v-row>
          <v-col
            class="d-flex flex-column  "
            fill-height
            style="
    max-height: calc(100vh - 60px);
    overflow: scroll;
    justify-content: stretch;
    align-items: stretch;
"
          >
            <v-card :style="`{ overflow: auto; height: 450px; }`">
                <v-toolbar>Market A: currently selected selling bid: {{selectedSellingBid}}</v-toolbar>
              

              <v-row>
                <v-col class="nopm" cols="4">
                  <v-card height="350px">
                    <v-app-bar>
                      Selling bids
                    </v-app-bar>
                    <v-card-text>
                      <v-list>
                        <v-list-item-group
                          v-model="selectedSellingBid"
                          active-class="border"
                          color="indigo"
                          
                        >
                          <v-list-item v-for="(item, i) in innerList" :key="i"  :id="`li_${item}`" dense>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>

                      
                    </v-card-text>

                    <v-footer class="pa-2">
                      <v-btn color="blue" :disabled='selectedSellingBid===null'>Buy</v-btn>
                    </v-footer>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
            <v-divider></v-divider>
             <v-card :style="`{ overflow: auto; height: 450px; }`">
             
                <v-toolbar>Market B: currently selected selling bid: {{selectedSellingBid}}</v-toolbar>

              <v-row>
                <v-col class="nopm" cols="4">
                  <v-card height="350px">
                    <v-app-bar>
                      Selling bids
                    </v-app-bar>
                    <v-card-text>
                      <v-list>
                        <v-list-item-group
                          v-model="selectedSellingBid"
                          active-class="border"
                          color="indigo"
                          
                        >
                          <v-list-item v-for="(item, i) in innerList" :key="i"  :id="`li_${item}`" dense>
                            <v-list-item-content>
                              <v-list-item-title
                                v-text="item"
                              ></v-list-item-title>
                            </v-list-item-content>
                          </v-list-item>
                        </v-list-item-group>
                      </v-list>

                      
                    </v-card-text>

                    <v-footer class="pa-2">
                      <v-btn color="blue" :disabled='selectedSellingBid===null'>Buy</v-btn>
                    </v-footer>
                  </v-card>
                </v-col>
              </v-row>
            </v-card>
          </v-col>
          <v-col>
            <v-row>
              CHART HERE
            </v-row></v-col
          >
        </v-row>
      </v-container>
    </v-main>
  </v-app>
</template>

<script>
import _ from "lodash";
export default {
  data: () => ({
    selectedSellingBid: null,
    cards: ["Today", "Yesterday"],
    innerList: _.range(1, 10),

    drawer: null,
  }),
  watch: {
    innerList: function() {
      const newone = _.last(this.innerList);
      console.debug("NEWONE!!!", newone);
      this.$nextTick(function() {
        const el = document.getElementById(`li_${newone}`);

        el.scrollIntoView({ behavior: "smooth" });
      });
    },
  },
  mounted() {
    this.stockInterval = setInterval(() => {
      const r = _.random(0, 10000);
      this.innerList.push(r);
      const el = this.$refs[`li_${r}`];

      if (el) {
        console.log("are we???");
        // Use el.scrollIntoView() to instantly scroll to the element
        el.scrollIntoView({ behavior: "smooth" });
      }
    }, 3000);
  },
  methods: {
    scrollToEnd: function() {
      var container = this.$el.querySelector("#sellcontainer");
      console.debug("JOPA", container.scrollTop);
      container.scrollTop = container.scrollHeight;
    },
  },
};
</script>
<style scoped>
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
