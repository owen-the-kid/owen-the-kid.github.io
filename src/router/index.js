import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView,
    },
    {
      path: '/projradio',
      name: 'NoisemakerFM',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/ProjRadio.vue'),
    },
    {
      path: '/projsg',
      name: 'Seymour Glass',
      component: () => import('../views/ProjSG.vue'),
    },
    {
      path: '/myexp',
      name: 'My Experience',
      component: () => import('../views/MyExp.vue'),
    },
    {
      path: '/myhobbies',
      name: 'My Hobbies',
      component: () => import('../views/MyHobbies.vue'),
    }
  ],
})

export default router
