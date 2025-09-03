import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

import HomeView from "../views/HomeView.vue";

const routes: RouteRecordRaw[] = [
  {
    component: HomeView,
    name: "home",
    path: "/",
  },
  {
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/AboutView.vue"),
    name: "about",
    path: "/about",
  },
  {
    component: () => import("../views/Project1View.vue"),
    name: "Project 1",
    path: "/project1",
  },
];

const router = createRouter({
  // eslint-disable-next-line @typescript-eslint/no-unsafe-argument, @typescript-eslint/no-unsafe-member-access
  history: createWebHistory(process.env.BASE_URL ?? "/"),
  routes,
});

export default router;
