import { createRouter, createWebHistory, type RouteRecordRaw } from 'vue-router';
import HomeView from '../views/HomeView.vue';

type KeysMatching<T, V> = {
  [K in keyof T]-?: T[K] extends V ? K : never;
}[keyof T];

export type RoutesType = KeysMatching<typeof routes, RouteRecordRaw>;

export const routes = {
  home: {
    path: '/',
    name: 'home',
    component: HomeView,
    children: [],
  },
  users: {
    path: '/users',
    name: 'users',
    children: [
      {
        path: '',
        name: 'users-list',
        component: () => import('../views/users/UsersView.vue'),
      },
      {
        path: ':id',
        name: 'users-detail',
        component: () => import('../views/users/UsersDetails.vue'),
      },
    ],
  },
  posts: {
    path: '/posts',
    name: 'posts',
    children: [
      {
        path: '',
        name: 'posts-list',
        component: () => import('../views/posts/PostsView.vue'),
      },
      {
        path: ':id',
        name: 'posts-detail',
        component: () => import('../views/posts/PostsDetails.vue'),
      },
    ],
  },
  albums: {
    path: '/albums',
    name: 'albums',
    children: [
      {
        path: '',
        name: 'albums-list',
        component: () => import('../views/albums/AlbumsView.vue'),
      },
      {
        path: ':id',
        name: 'albums-detail',
        component: () => import('../views/albums/AlbumsDetails.vue'),
      },
    ],
  },
  todos: {
    path: '/todos',
    name: 'todos',
    children: [
      {
        path: '',
        name: 'todos-list',
        component: () => import('../views/todos/TodosView.vue'),
      },
      {
        path: ':id',
        name: 'todos-detail',
        component: () => import('../views/todos/TodosDetails.vue'),
      },
    ],
  },
  comments: {
    path: '/comments',
    name: 'comments',
    children: [
      {
        path: '',
        name: 'comments-list',
        component: () => import('../views/comments/CommentsView.vue'),
      },
      {
        path: ':id',
        name: 'comments-detail',
        component: () => import('../views/comments/CommentsDetails.vue'),
      },
    ],
  },
  photos: {
    path: '/photos',
    name: 'photos',
    children: [
      {
        path: '',
        name: 'photos-list',
        component: () => import('../views/photos/PhotosView.vue'),
      },
      {
        path: ':id',
        name: 'photos-detail',
        component: () => import('../views/photos/PhotosDetails.vue'),
      },
    ],
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
