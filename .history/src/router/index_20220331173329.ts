import { createRouter, createWebHashHistory, RouteRecordRaw } from "vue-router"

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component:() => import('@/view/layout.vue')
  }
]

export default const router =createRouter({

})