import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    component:() => import('@/view/layout/layout.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component:() => import("@/view/404/404.vue")
  }
  
]

export default routes