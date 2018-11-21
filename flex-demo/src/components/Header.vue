<template>
  <header class="header">
  	<h1>{{title1}}</h1>
    <h2>{{title}}</h2>
  </header>
</template>

<script>
export default {
  name: 'Header',
  props: {
    title: {
      type: String
    }
  },
  data () {
    return {
      title1: 'this is Title'
    }
  }
}
</script>


<style scoped>
  .header {
  	background-color: yellow;
  }
  .header h1 {
  	padding: 20px 0;
  	text-align: center;
  }
  h2 {
    text-align: center;
  }
</style>
