/* eslint-disable no-unused-vars */
import Vue from "vue";
import VueRouter from "vue-router";
const Home = () => import("./views/Home.vue");
const NotFound = () => import("./views/NotFound.vue");

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
    meta: {
      requiresAuth: false,
      // will be used when more pages are added
      breadcrumbs: [{ name: "Home", link: "/" }],
    },
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
    meta: {
      requiresAuth: false,
    },
  },
  // more pages later
];

const router = new VueRouter({
  routes,
});

export default router;
