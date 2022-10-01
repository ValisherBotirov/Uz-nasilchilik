import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  scrollBehavior(to, from, savedPosition) {
    // always scroll to top
    return { top: 0 }}, 
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/news",
      name: "news",
      component: () => import("../views/NewsView.vue"),
    },
    {
      path: "/catolog",
      name: "catolog",
      component: () => import("../views/CatologView.vue"),
    },
    {
      path: "/catolog/:id",
      name: "catolog-id",
      component: () => import("../views/CatologSingle.vue"),
    },
    {
      path: "/about_single",
      name: "about_single",
      component: () => import("../views/AboutSingle.vue"),
    },
    {
      path: "/laboratoriya",
      name: "laboratoriya",
      component: () => import("../views/Laboratoriya.vue")
    }
  ],
});

export default router;
