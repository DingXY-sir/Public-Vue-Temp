import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

import path from 'path'
import AutoImport from 'unplugin-auto-import/vite'
import Components from 'unplugin-vue-components/vite'
import {ElementPlusResolver} from 'unplugin-vue-components/resolvers'

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
  plugins: [
    vue(),
    AutoImport({
      resolvers: [ElementPlusResolver()],
    }),
    Components({
       // ui库解析器
      resolvers: [
        ElementPlusResolver()
      ],
      // 指定组件位置，默认是src/components
      dirs: ['src/components'],
     
      extensions: ['vue'],
      // 配置文件生成位置
      dts: 'src/components.d.ts'
    }),
  ]
})
