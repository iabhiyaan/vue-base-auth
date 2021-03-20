import Vue from "vue";
import VueRouter from "vue-router";

import store from "../store";

Vue.use(VueRouter);

// const openRoutes = ["login"];

const routes = [
  {
    path: "/",
    redirect: {
      name: "login",
    },
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/login",
    name: "login",
    component: () => import("../views/Login.vue"),
    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/register",
    name: "register",
    component: () => import("../views/Register.vue"),

    meta: {
      requiresAuth: false,
    },
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: () => import("../views/Dashboard.vue"),
    meta: {
      requiresAuth: true,
    },
  },
];

let router = new VueRouter({
  mode: "history",
  routes,
});

router.beforeEach((to, from, next) => {
  const isAuthenticated = store.state.auth;
  if (!isAuthenticated && to.meta.requiresAuth) next({ name: "login" });
  else next();
});
export default router;
