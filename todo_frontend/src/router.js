import { createRouter, createWebHistory } from 'vue-router';

import Login from '@/views/Login.vue';
import Tasks from '@/views/Tasks.vue';
import Landing from "@/views/Landing.vue"; 

const routes = [ 
  { path: "/", component: Landing },
  { path: '/login', component: Login},
  {
    path: '/tasks',
    component: Tasks,
    beforeEnter: (to, from, next) => {
      const userToken = localStorage.getItem("user_token");
      if (userToken) {
        next();
      } else {
        next('/login');
      }
    }
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;