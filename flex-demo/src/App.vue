<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <my-header :title="title"></my-header>
    <my-main v-bind:roles="roles" v-bind:title="title"></my-main>
    <ul class="main">
        <li v-for="role in roles">
            {{role.name}}
        </li>
    </ul>
    <h1>{{title}}</h1>
    <my-footer :title="title"></my-footer>
    
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
  },
  data() {
    return {
      roles: [
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Jack", job: "前端", isshow: false},
        {name: "Rose", job: "全栈", isshow: false},
        {name: "Lisa", job: "PHP", isshow: false},
        {name: "Robot", job: ".Net", isshow: false},
        {name: "Sandy", job: "Node", isshow: false},
        {name: "Cindy", job: "后台", isshow: false},
        {name: "Cc", job: "UI", isshow: false},
      ],
      title: "origin Title"
    }
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
.main {
  text-indent: 90px;
}
</style>
