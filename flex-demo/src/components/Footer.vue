<template>
  <footer class="footer">
  	<h2>{{title}}</h2>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      title: 'Copyright 2017-2018@xiangkangling'
    }
  }
}
</script>


<style scoped>
  .footer {
  	background-color: red;
  }
  .footer h2 {
  	padding: 10px 0;
  	text-align: center;
  }
</style>
