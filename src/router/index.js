import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import ChartModule from "@/components/ChartModule";
import MarketWrapper from "@/components/MarketWrapper";

Vue.use(VueRouter);

const routes = [
  {
    path: "/priceChart",
    name: "priceChart",
    component: ChartModule,
  },
  {
    path: "/marketA",
    name: "marketA",
    component: MarketWrapper,
    props: { marketName: "A" },
  },
  {
    path: "/marketB",
    name: "marketB",
    component: MarketWrapper,
    props: { marketName: "B" },
  },
];

const router = new VueRouter({
  routes,
});

export default router;
