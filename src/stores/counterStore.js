import { defineStore } from 'pinia';

export const useCounterStore = defineStore('counter',{
    state(){
        return{
            count:0
        }
    },
    actions:{
        increment(){
            this.count ++;
        }
    },
    getters:{
        showCount(){
            return 'O valor do count é: '+this.count
        }
    },



})