<template>
  <div id="app">
    <!--<img src="./assets/logo.png">-->
    <router-view/>
    <v-nav></v-nav>
  </div>
</template>

<script>
import navbar from './components/navbar'

export default {
  name: 'App',
  components: {
    "v-nav": navbar
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  /*text-align: center;*/
  /*color: #2c3e50;*/
  height: 100%;
}
</style>
