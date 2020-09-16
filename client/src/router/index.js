/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Order from "../views/Order.vue";
import About from "../views/About.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/about",
    name: "About",
    component: About,
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
