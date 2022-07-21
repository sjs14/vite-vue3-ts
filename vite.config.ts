import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vueJsx from '@vitejs/plugin-vue-jsx'
// import AutoImport from 'unplugin-auto-import/vite'
import DefineOptions from 'unplugin-vue-define-options/vite'

export default defineConfig({
  plugins: [
    vue(),
    vueJsx(),
    // AutoImport({
    //   imports: ['vue'],
    //   dts: './src/types/auto-imports.d.ts',
    // }),
    DefineOptions()
  ]
})
