# vite打包配置（gzip、文件分类等）

## 安装依赖
```bash
npm i vite-plugin-compression -D
```
## vite.config文件完整配置
```js
import compressPlugin from "vite-plugin-compression"; //静态资源压缩
import legacyPlugin from '@vitejs/plugin-legacy'; //浏览器兼容
export default defineConfig({
 plugins: [
    vue(),
    compressPlugin({ //gzip静态资源压缩
      verbose: true,    // 默认即可
      disable: false,  //开启压缩(不禁用)，默认即可
      deleteOriginFile: false, //删除源文件
      threshold: 10240, //压缩前最小文件大小
      algorithm: 'gzip',  //压缩算法
      ext: '.gz', //文件类型
    }),
    legacyPlugin({
      targets: ['chrome 52'], // 需要兼容的目标列表，可以设置多个
      additionalLegacyPolyfills: ['regenerator-runtime/runtime'] // 面向IE11时需要此插件
    })
  ],
 // 打包配置
  build: {
    // 清除console和debugger
    terserOptions: {
      compress: {
        drop_console: true,
        drop_debugger: true,
      },
    },
    //警报门槛，限制大文件大小
    // chunkSizeWarningLimit: 1500,
    rollupOptions: {
      output: {
        //对静态文件进行打包处理（文件分类）
        chunkFileNames: 'assets/js/[name]-[hash].js',
        entryFileNames: 'assets/js/[name]-[hash].js',
        assetFileNames: 'assets/[ext]/[name]-[hash].[ext]',
      }
    },
  },
})

```