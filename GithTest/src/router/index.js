import { createRouter, createWebHistory } from 'vue-router'
import AcceuilViews from '@/views/AcceuilViews.vue'
import HomeView from '@/views/HomeView.vue'
import AboutView from '@/views/AboutView.vue'

const routes = [
  {
    path: '/',
    component: HomeView,
    name: 'home'
  },
  {
    path: '/acceuil',
    component: AcceuilViews,
    name: 'acceuil'
  },
  {
    path: '/about',
    component: AboutView,
    name: 'about'
  },
]
const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
})

export default router
