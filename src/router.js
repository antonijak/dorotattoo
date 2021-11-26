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
  },
  {
    path: "*",
    name: "NotFound",
    component: NotFound,
  },
];

const router = new VueRouter({
  routes,
});

export default router;
