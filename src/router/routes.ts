import { RouteRecordRaw } from "vue-router";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "Layout",
    meta: {
      title: '首页',
      isNoLogin:true
    },
    component:() => import('@/view/layout/layout.vue')
  },
  {
    path: "/:pathMatch(.*)*",
    name: "404",
    component:() => import("@/view/404/404.vue")
  }
  
]

export default routes