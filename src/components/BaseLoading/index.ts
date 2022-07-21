import { App, createVNode, render, VNode } from 'vue'
import BaseLoading from './Index.vue'

export default {
  install: (app: App) => {
    let init = false
    const VNode: VNode = createVNode(BaseLoading)
    app.config.globalProperties.$loading = {
      show: () => {
        if (!init) {
          render(VNode, document.body)
          init = true
        }
        VNode.component?.exposed?.show?.()
      },
      hide: () => {
        VNode.component?.exposed?.hide?.()
      },
    }
  }
}