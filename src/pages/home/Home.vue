<template>
  <div>
    <div class="home">Hello Vue!</div>
    <router-link  to="/list">列表页</router-link>
  </div>
</template>
<script>
export default {
  name: 'home'
}
</script>
<style>
  .home{
    font-size: 50px;
  }
</style>
