export default [
  {
    path: '/',
    component: () => import('@/views/layout/home.vue'),
  },
  {
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/layout/404.vue')
  },
]