import { PiniaPluginContext } from 'pinia'
import { toRaw } from 'vue'

type Options = {
    baseKey?: string
}

const __piniaKey__: string = 'sjs'

export default (options: Options) => {
    return (context: PiniaPluginContext) => {
        const { store } = context
        const key = `${options.baseKey ?? __piniaKey__}_${store.$id}`
        const data = getStorage(key)
        store.$subscribe(() => {
            setStorage(key, toRaw(store.$state))
        })
        return { ...data }
    }
}


function setStorage(key: string, value: any = {}) {
    localStorage.setItem(key, JSON.stringify(value))
}

function getStorage(key: string) {
    const res = localStorage.getItem(key) || "{}"
    return JSON.parse(res)
}