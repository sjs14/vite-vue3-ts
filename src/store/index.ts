import {defineStore} from 'pinia'

const enum Names{
    TEST = 'test',
    ASIDE = 'aside'
}



export const useTestStore = defineStore(Names.TEST,{
    state(){
        return {
            name:'sjs',
            age:31,
            list:[1,2,3]
        }
    },
    actions:{
        setName(name:string,num:number){
            this.name = name
            this.age = num
            // console.log('setName'); 
            return Promise.resolve(22)
        }
    }
}) 

export const useAsideStore = defineStore(Names.ASIDE,{
    state(){
        return {
            aside:'sjs',
        }
    }
}) 