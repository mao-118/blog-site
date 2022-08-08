# vue3插件 [unplugin-auto-import](https://github.com/antfu/unplugin-auto-import) 自动导入composition api

## 安装
```js
npm i -D unplugin-auto-import
```
## vite中使用
```js
// vite.config.ts
import AutoImport from 'unplugin-auto-import/vite'

export default defineConfig({
  plugins: [
    AutoImport({ /* options */ }),
  ],
})
```
## 配置说明
```js
AutoImport({
  // targets to transform
  include: [
    /\.[tj]sx?$/, // .ts, .tsx, .js, .jsx
    /\.vue$/, /\.vue\?vue/, // .vue
    /\.md$/, // .md
  ],

  // global imports to register
  imports: [
    // presets
    'vue',
    'vue-router',
    // custom
    {
      '@vueuse/core': [
        // named imports
        'useMouse', // import { useMouse } from '@vueuse/core',
        // alias
        ['useFetch', 'useMyFetch'], // import { useFetch as useMyFetch } from '@vueuse/core',
      ],
      'axios': [
        // default imports
        ['default', 'axios'], // import { default as axios } from 'axios',
      ],
      '[package-name]': [
        '[import-names]',
        // alias
        ['[from]', '[alias]'],
      ],
    },
  ],

  // Auto import for module exports under directories
  // by default it only scan one level of modules under the directory
  dirs: [
    // './hooks',
    // './composables' // only root modules
    // './composables/**', // all nested modules
    // ...
  ],

  // Filepath to generate corresponding .d.ts file.
  // Defaults to './auto-imports.d.ts' when `typescript` is installed locally.
  // Set `false` to disable.
  dts: './auto-imports.d.ts',

  // Auto import inside Vue template
  // see https://github.com/unjs/unimport/pull/15 and https://github.com/unjs/unimport/pull/72
  vueTemplate: false,

  // Custom resolvers, compatible with `unplugin-vue-components`
  // see https://github.com/antfu/unplugin-auto-import/pull/23/
  resolvers: [
    /* ... */
  ],

  // Generate corresponding .eslintrc-auto-import.json file.
  // eslint globals Docs - https://eslint.org/docs/user-guide/configuring/language-options#specifying-globals
  eslintrc: {
    enabled: false, // Default `false`
    filepath: './.eslintrc-auto-import.json', // Default `./.eslintrc-auto-import.json`
    globalsPropValue: true, // Default `true`, (true | false | 'readonly' | 'readable' | 'writable' | 'writeable')
  },
})
```
## 正确提示自动导入 API 的类型
```js
// 启用options.dts以便auto-imports.d.ts自动生成文件
// 确保auto-imports.d.ts不排除在tsconfig.json
AutoImport ( { 
  dts : true  // 或自定义路径
} )

//如果您遇到 ESLint 错误no-undef：
AutoImport ( { 
  eslintrc : { 
    enabled : true ,  // <-- this 
  }, 
} )

//更新您的eslintrc： 扩展配置文件.eslintrc.js
module.exports = {
  extends: [
    './.eslintrc-auto-import.json',
  ],
}

// tsconfig.js中导入 auto-imports.d.ts
"include": [
    "auto-imports.d.ts"
]
```
## 效果展示
```js
// 配置之前
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
const count = ref(0)
const router = useRouter()
const doubled = computed(() => count.value * 2)

// 配置之后
const count = ref(0)
const router = useRouter()
const doubled = computed(() => count.value * 2)
```
