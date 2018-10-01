<template>
  <home-header></home-header>
</template>
<script>
import HomeHeader from './components/header'
export default {
  name: 'home',
  components: {
    HomeHeader: HomeHeader
  }
}
</script>
<style>
  .home{
    font-size: 50px;
  }
</style>
