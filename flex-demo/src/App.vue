<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <my-header></my-header>
    <my-main></my-main>
    <my-footer></my-footer>
    
  </div>
</template>

<script>
// import HelloWorld from './components/HelloWorld'
import myHeader from '@/components/Header'
import myFooter from '@/components/Footer'
import myMain from '@/components/Main'
export default {
  name: 'App',
  components: {
    // HelloWorld
    myHeader,
    myFooter,
    myMain,
  }
}
</script>

<style>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
* {
  margin: 0;
  padding: 0;
}
</style>
