import { createRouter, createWebHashHistory } from 'vue-router'
import exampleRouter from '@/router/modules/example'

export const constantRoutes = [
  {
    path: '/redirect/:path(.*)',
    component: () => import('@/views/redirect'),
    hidden: true
  },
  {
    path: '/404',
    component: () => import('@/views/error-page/404.vue'),
    hidden: true
  },
  {
    path: '/',
    meta: { title: 'dashboard' },
    component: () => import('@/views/dashboard/index.vue'),
    children: []
  },
  //example
  ...exampleRouter,
  // 404 page must be placed at the end !!!
  // using pathMatch install of "*" in vue-router 4.0
  { path: '/:pathMatch(.*)', redirect: '/404', hidden: true }
]

const router = createRouter({
  history: createWebHashHistory(),
  scrollBehavior: () => ({ top: 0 }),
  routes: constantRoutes
})

export default router
