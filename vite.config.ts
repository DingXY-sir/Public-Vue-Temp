import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  //设置默认端口和自动打开浏览器
  server: {
    port: 9999,
    open:true
  },
  //全局引入预处理器sass
  css: {
    preprocessorOptions: {
      scss: {
        additionalData:`@import "./src/styles/global.scss";` 
      }
    }
  },
  //设置别名
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "com" :path.resolve(__dirname,"src/components")
    }
  },
  plugins: [vue()]
})
