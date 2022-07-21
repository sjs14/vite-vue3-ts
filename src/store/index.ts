import { defineStore } from 'pinia'
import { Names } from './store-name'

export const useTestStore = defineStore(Names.TEST, {
    state() {
        return {
            name: 'sjs',
            age: 31
        }
    },
    getters: {},
    actions: {
        setAge(num: number) {
            this.age = num
        }
    }
})