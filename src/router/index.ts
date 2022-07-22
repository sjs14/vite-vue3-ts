import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    component: () => import('../pages/Login/Index.vue'),
    redirect: '/login1',
    children: [
      {
        path: '/login1',
        component: () => import('../pages/Login1/Index.vue'),
      },
      {
        path: '/login2',
        component: () => import('../pages/Login2/Index.vue'),
      }
    ]
  },
  {
    path: '/reg',
    component: () => import('../pages/Reg/Index.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router