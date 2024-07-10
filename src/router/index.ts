import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

const routes = {
  home: {
    path: '/',
    name: 'home',
    component: HomeView,
  },
} as const satisfies Record<string, RouteRecordRaw>;

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: Object.values(routes),
  scrollBehavior(to, from, savedPosition) {
    if (to.hash) {
      return { el: to.hash, behavior: 'smooth' };
    }
    return savedPosition || { top: 0, left: 0 };
  },
});

export default router;
