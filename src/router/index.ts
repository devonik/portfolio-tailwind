import { createRouter, createWebHistory } from 'vue-router'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/projects',
      name: 'projects',
      component: () => import('../views/ProjectsView.vue')
    },
    {
      path: '/about',
      name: 'about',
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import('../views/AboutView.vue')
    },
    {
      path: '/playground',
      name: 'playground',
      component: () => import('../views/PlaygroundView.vue'),
      meta: { layout: 'plain' }
    },
    {
      path: '/tabletennis',
      name: 'tabletennis',
      component: () => import('../views/TabletennisView.vue'),
      meta: { layout: 'plain' }
    },
    {
      path: '/tabletennis/:placeId',
      name: 'tabletennis-place-detail',
      component: () => import('../views/TabletennisDetailView.vue'),
      meta: { layout: 'plain' }
    }
  ]
})

export default router
