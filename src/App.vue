<template>
  <IndecisionPage />
  <!-- <HelloWorld msg="Welcome to Your Vue.js App" />
  <CounterItem title="Entraron" :start="2"/>
  <CounterItem title="Salieron" :start="3" />
  <CounterItem /> -->
</template>

<script>
// import HelloWorld from './components/HelloWorld.vue'
// import CounterItem from './components/CounterItem.vue'
import IndecisionPage from './components/IndecisionPage.vue'

export default {
  name: 'App',
  components: {
    // HelloWorld,
    // CounterItem,
    IndecisionPage
  }
}
</script>

<style>
:root {
  --primary: #4caf50;
  --secondary: #ff9800;
}

body {
  padding: 0;
  margin: 0;
}

* {
  box-sizing: border-box;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #ffffff;
  background: #333333;
  min-height: 100vh;
  width: 100%;
}
</style>
