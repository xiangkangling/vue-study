<template>
  <ul class="main">
      <li v-for="role in roles" @click="role.isshow = !role.isshow">
          <h1>{{role.name}}</h1>
          <h3 v-show="role.isshow">{{role.job}}</h3>
      </li>
  </ul>
</template>

<script>
export default {
  name: 'Main',
  data () {
    return {
      roles: [
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
        {name: "Ruffy", job: "海盗", isshow: false},
      ]
    }
  }
}
</script>


<style scoped>
    .main {
      display: flex; 
      flex-wrap: wrap;
      list-style-type: none;
      padding: 40px 60px;
    } 
    .main li {
      flex-grow: 1;
      flex-basis: 300px;
      text-align: center;
      padding: 30px;
      border: 1px solid #222;
      margin: 10px;
      
    }
</style>
