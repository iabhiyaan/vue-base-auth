import Vue from "vue";
import VueRouter from "vue-router";

import Dashboard from "@/views/Dashboard.vue";
import Register from "@/views/Register.vue";
import Login from "@/views/Login.vue";

import store from "../store";

Vue.use(VueRouter);

const openRoutes = ["login"];

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
  },
  {
    path: "/login",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: Dashboard,
  },
];

let router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth;
  if (!isAuthenticated && !openRoutes.includes(to.name))
    next({ name: "login" });
  else next();
});
export default router;
