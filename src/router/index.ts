import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "landing",
    component: () => import("../pages/landing.vue"),
  },
  {
    path: "/auth",
    name: "auth",
    component: () => import("../pages/signIn.vue"),
  },
  {
    path: "/vacancy/:id",
    name: "vacancy",
    component: () => import("../components/landing/VacancyView.vue"),
  },
  {
    path: "/auth/emp",
    name: "authEmployer",
    component: () => import("../pages/signemp.vue"),
  },
  {
    path: "/personal-cabinet",
    name: "personal-cabinet",
    component: () => import("../pages/personal-cabinet.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
