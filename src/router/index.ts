import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component:() => import('@/view/layout/layout.vue')
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router