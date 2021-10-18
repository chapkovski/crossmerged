<template>
  <v-app id="inspire">
 

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
            <v-card :style="`{ overflow: auto; height: 400px; }`">
              <v-card-title :style="`{ position: sticky; top: 0; z-index: 1; }`"
                >Market A</v-card-title
              >
              
                <v-row>
                  <v-col class="nopm" cols="4">
                    <v-card height="350px">
                      <v-app-bar card>
                         Selling bids
                      </v-app-bar>
                      <v-card-text>
                        <ul id="sellcontainer" ref="sellcontainer">
                          <li v-for="i in innerList" :key="i">
                            {{ i }}
                          </li>
                        </ul>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="blue">Buy</v-btn>
                      </v-footer>
                    </v-card>
                  </v-col>
                  <v-col cols="4" class="nopm">
                    <v-card height="350px">
                      <v-toolbar card>
                        <v-toolbar-title class="small"
                          >Buying bids</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-text>
                        <v-list>
                          <template v-for="i in 40">
                            <v-list-tile>
                              <v-list-tile-content>
                                <div>{{ i }}</div>
                              </v-list-tile-content>
                            </v-list-tile>
                          </template>
                        </v-list>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="green">Sell</v-btn>
                      </v-footer>
                    </v-card>
                  </v-col>
                  <v-col cols="4" class="nopm">
                    <v-card height="350px">
                      <v-toolbar card>
                        <v-toolbar-title class="small"
                          >Transaction prices</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-text>
                        <v-list>
                          <template v-for="i in 40">
                            <v-list-tile>
                              <v-list-tile-content>
                                <div>{{ i }}</div>
                              </v-list-tile-content>
                            </v-list-tile>
                          </template>
                        </v-list>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="red">Submit order</v-btn>
                      </v-footer>
                    </v-card>
                  </v-col>
                </v-row>
             
            </v-card>
            <v-divider></v-divider>
            <v-card :style="`{ overflow: auto; height: 400px; }`">
              <v-card-title :style="`{ position: sticky; top: 0; z-index: 1; }`"
                >Market B</v-card-title
              >
             
                <v-row>
                  <v-col class="nopm" cols="4">
                    <v-card height="350px">
                      <v-toolbar card>
                        <v-toolbar-title class="small"
                          >Selling bids</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-text>
                        <v-list>
                          <template v-for="i in 40">
                            <v-list-tile>
                              <v-list-tile-content>
                                <div>{{ i }}</div>
                              </v-list-tile-content>
                            </v-list-tile>
                          </template>
                        </v-list>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="blue">Buy</v-btn>
                      </v-footer>
                    </v-card>
                  </v-col>
                  <v-col cols="4" class="nopm">
                    <v-card height="350px">
                      <v-toolbar card>
                        <v-toolbar-title class="small"
                          >Buying bids</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-text>
                        <v-list>
                          <template v-for="i in 40">
                            <v-list-tile>
                              <v-list-tile-content>
                                <div>{{ i }}</div>
                              </v-list-tile-content>
                            </v-list-tile>
                          </template>
                        </v-list>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="green">Sell</v-btn>
                      </v-footer>
                    </v-card>
                  </v-col>
                  <v-col cols="4" class="nopm">
                    <v-card height="350px">
                      <v-toolbar card>
                        <v-toolbar-title class="small"
                          >Transaction prices</v-toolbar-title
                        >
                      </v-toolbar>
                      <v-card-text>
                        <v-list>
                          <template v-for="i in 40">
                            <v-list-tile>
                              <v-list-tile-content>
                                <div>{{ i }}</div>
                              </v-list-tile-content>
                            </v-list-tile>
                          </template>
                        </v-list>
                      </v-card-text>

                      <v-footer class="pa-2">
                        <v-btn color="red">Submit order</v-btn>
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
    cards: ["Today", "Yesterday"],
    innerList: _.range(0, 10),
    desserts: [
      {
        name: "Frozen Yogurt",
        calories: 159,
      },
      {
        name: "Ice cream sandwich",
        calories: 237,
      },
      {
        name: "Eclair",
        calories: 262,
      },
      {
        name: "Cupcake",
        calories: 305,
      },
      {
        name: "Gingerbread",
        calories: 356,
      },
      {
        name: "Jelly bean",
        calories: 375,
      },
      {
        name: "Lollipop",
        calories: 392,
      },
      {
        name: "Honeycomb",
        calories: 408,
      },
      {
        name: "Donut",
        calories: 452,
      },
      {
        name: "KitKat",
        calories: 518,
      },
    ],
    drawer: null,
    links: [
      ["mdi-inbox-arrow-down", "Inbox"],
      ["mdi-send", "Send"],
      ["mdi-delete", "Trash"],
      ["mdi-alert-octagon", "Spam"],
    ],
  }),
  watch: {
    innerList: function() {
      this.$nextTick(function() {
        var container = this.$refs.sellcontainer;
        console.debug("jojpjpizda", container);
        container.scrollTop = container.scrollHeight + 120;
      });
    },
  },
  mounted() {
    this.stockInterval = setInterval(() => {
      this.innerList.push(_.random(0, 10000));
    }, 1000);
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
/* .nopm{ padding: 0px;} */
</style>
