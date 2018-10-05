<template>
  <div class="header">城市选择
    <router-link to="/">
      <div class="iconfont header-back">&#xe624;</div>
    </router-link>
  </div>

</template>
<script>
export default {
  name: 'CityHeader'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header
    position: relative
    overflow: hidden
    line-height:$headerHeight
    height:$headerHeight
    color: #fff
    text-align: center
    background: $bgColor
    .header-back
      position: absolute
      top: 0
      left: 0
      width:.62rem
      text-align: center
      font-size:.4rem
      color:#fff
</style>
