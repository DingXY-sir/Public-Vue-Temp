import { createApp } from 'vue'
import App from './App.vue'
import router from "./router/index"
import store from "./store/index"
import './styles/reset.scss'
import './assets/font_3310055_24b67e1rn4qj/iconfont.css'

// import ElementPlus from 'element-plus'
// import zhCn from 'element-plus/es/locale/lang/zh-cn'


const app = createApp(App)
app.use(router)
app.use(store)

// app.use(ElementPlus, {
//   locale: zhCn,
// })
app.mount('#app')
