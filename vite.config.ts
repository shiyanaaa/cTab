import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server:{
    proxy:{
      "/codelifeApi":{
        target: 'https://api.codelife.cc', // 目标地址 --> 服务器地址
        changeOrigin: true, // 允许跨域
        ws: true,  // 允许websocket代理
        rewrite: (path) => path.replace(/^\/codelifeApi/, "")
      }
    }
  }
})
