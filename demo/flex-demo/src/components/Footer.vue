<template>
  <footer class="footer">
  	<h2>{{title1}}</h2>
    <h3>{{title}}</h3>
  </footer>
</template>

<script>
export default {
  name: 'Footer',
  props: {
    title: {
      type: String,
    }
  },
  data () {
    return {
      title1: 'Copyright 2017-2018@xiangkangling'
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
  h3 {
    text-align: center;
  }
</style>
