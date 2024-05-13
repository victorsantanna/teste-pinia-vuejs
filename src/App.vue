<template>
  <h2>Welcome to pinia</h2>
  {{ counter.showCount }}

  <button @click="counter.increment">Increment</button>


</template>

<script setup>
import {useCounterStore} from './stores/counterStore'; 
const counter = useCounterStore();



</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
