/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import Home from "../views/Home.vue";
import Order from "../views/Order.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/order",
    name: "Orderstatus",
    component: Order,
  },
];

const router = createRouter({
  history: createWebHashHistory(),
  routes,
});

export default router;
