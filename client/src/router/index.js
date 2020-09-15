/* eslint-disable */
import { createRouter, createWebHashHistory } from "vue-router";
import Landing from "../views/Landing.vue";
import Order from "../views/Order.vue";
import About from "../views/About.vue";
import Menu from "../views/Menu.vue";

const routes = [
  {
    path: "/",
    name: "Landing",
    component: Landing,
  },
  {
    path: "/menu",
    name: "Menu",
    component: Menu,
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
