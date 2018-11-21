<template>
  <div class="main">
    <ul class="main2">
        <li v-for="role in roles" @click="role.isshow = !role.isshow">
            <h1>{{role.name}}</h1>
            <h3 v-show="role.isshow">{{role.job}}</h3>
        </li>
    </ul>
    <button v-on:click="deleteRole">删除一个roles</button>
    <h1 v-on:click="changeTitle">{{title}}</h1>
  </div>
  
  
</template>

<script>
export default {
  name: 'Main',
  props: ["roles","title"],
  data () {
    return {
      
    }
  },
  methods: {
    deleteRole() {
      this.roles.pop();
    },
    changeTitle() {
      this.title = "chenged Title"
    }
  }
}
</script>


<style scoped>
    .main2 {
      display: flex; 
      flex-wrap: wrap;
      list-style-type: none;
      padding: 40px 60px;
    } 
    .main2 li {
      flex-grow: 1;
      flex-basis: 300px;
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
    }
    button {
      margin-left: 90px;
    }
</style>
