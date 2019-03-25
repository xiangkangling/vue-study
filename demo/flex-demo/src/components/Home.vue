<template>
  <div class="home">
    <!-- <img src="./assets/logo.png"> -->
    <!-- <HelloWorld/> -->
    <my-header :title="title" @changeTitled="updateTitle($event)"></my-header>
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
import myHeader from './Header'
import myFooter from './Footer'
import myMain from './Main'
export default {
  name: 'Home',
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
  },
  methods: {
    updateTitle ($event) {
      this.title = $event;
    }
  },
  beforeCreate () {
    alert("vue实例创建前，可在此函数中做加载动画操作")
  },
  created () {
    alert("vue实例创建完成，但DOM还未渲染，可在此函数中做加载动画的结束操作")
  },
  beforeMount () {
    alert("渲染模板，页面仍未显示，但虚拟DOM已经配置")
  },
  mounted () {
    alert("次函数结束，页面显示出来，可在此函数中获取后台数据，展示页面")
  },
  beforeUpdate () {
    alert("更新前，页面仍未更新，但虚拟DOM已经配置")
  },
  updated () {
    alert("更新之后，此函数结束后页面显示出来")
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
