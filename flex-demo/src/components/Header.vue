<template>
  <header class="header">
  	<h1>{{title}}</h1>
  </header>
</template>

<script>
export default {
  name: 'Header',
  data () {
    return {
      title: 'this is Title'
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
</style>
