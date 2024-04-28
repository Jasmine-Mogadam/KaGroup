import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '../views/HomeView.vue'
import AboutView from '../views/AboutView.vue'
import CustomizeQuestions from '../views/CustomizeQuestions.vue'
import PreEnterResponses from '../views/PreEnterResponses.vue'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: HomeView
    },
    {
      path: '/session',
      name: 'session',
      component: () => import('../views/SessionView.vue')
    },
    {
      path: '/customize_questions',
      name: 'customize',
      component: CustomizeQuestions
    },
    {
      path: '/preenter_responses',
      name: 'preenter responses',
      component: PreEnterResponses
    }
  ]
})

export default router
