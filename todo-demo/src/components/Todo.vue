<template>
  <div class="todo">
    <!-- <img src="./assets/logo.png"> -->
    <div class="list fontsize">
      <div>标签</div>
      <div>过滤</div>
      <div>保留</div>
    </div>
    <div class="list" v-for="item in group">
      <div v-bind:class="{unchecked: !(item.ckgroup[0] || item.ckgroup[1])}">{{item.name}}</div>
      <div><el-checkbox v-model="item.ckgroup[0]" @change="checkIsalllright(item,0)"></el-checkbox></div>
      <div><el-checkbox v-model="item.ckgroup[1]" @change="checkIsalllright(item,1)"></el-checkbox></div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Todo',
  data() {
    return {
      group: [
        { 
          ckgroup: [false,true],
          name: "w(事件)",
        },
        { 
          ckgroup: [true,false],
          name: "w(事件)",
        },
        { 
          ckgroup: [true,false],
          name: "w(事件)",
        }
      ],
    }
  },
  methods: {
    checkIsalllright(item,index) {
      if (index == 0) {
        if (item.ckgroup[0] && item.ckgroup[1]) {
          item.ckgroup[1] = !item.ckgroup[1];
        }
      }
      else if (index == 1) {
        if (item.ckgroup[0] && item.ckgroup[1]) {
          item.ckgroup[0] = !item.ckgroup[0];
        }
      }
      // console.log(ckgroup1);
    },
  }
}
</script>

<style scoped>
/*#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}*/
.list.fontsize div {
  font-weight: 700;
}
.list {
  width: 100%;
  height: 40px;
  line-height: 40px;
  clear: both;
}
.list div {
  width: 100px;
  float: left;
}
.list .unchecked {
  color: #ccc;
}

</style>
