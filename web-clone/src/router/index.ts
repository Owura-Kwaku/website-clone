// Composables
import { createRouter, createWebHistory } from 'vue-router'
import childRoutes from './routes/index';

const routes = [
  {
    path: '/',
    redirect: { name: 'Home'},
    children: childRoutes,
  },
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
})

export default router
