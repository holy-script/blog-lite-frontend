import { createRouter, createWebHistory } from 'vue-router'
import IndexPage from '@/views/IndexPage.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      children: [
        {
          path: '',
          name: 'Home',
          component: IndexPage,
          meta: {
            requiresAuth: false
          }
        }
      ]
    },
    {
      path: '/:pathMatch(.*)*',
      name: 'Error',
      component: () => import('@/views/ErrorPage.vue'),
      meta: {
        requiresAuth: false
      }
    }
  ]
})

export default router
