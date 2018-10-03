<template>
  <div class="header">
    <div class="header-left">
      <div class="iconfont back-icon">&#xe624;</div>
    </div>
    <div class="header-input">
      <span class="iconfont">&#xe632;</span>
      请输入城市/景点/游玩/主题</div>
    <div class="header-right">{{this.city}}
    <span class="iconfont arrow-icon">&#xe6aa;</span>
    </div>
  </div>
</template>
<script>
export default {
  name: 'HomeHeader',
  props: {
    city: String
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .header
    display: flex
    line-height: .86rem
    background: $bgColor
    .header-left
      width:.64rem
      float: left
      .back-icon
        text-align: center
        font-size: .4rem
    .header-input
      flex: 1
      line-height: .64rem
      height .64rem
      margin-top:.12rem
      margin-left:.2rem
      background: #fff
      border-radius: .1rem
      color:#ccc
      padding-left:.2rem
    .header-right
      width:1.24rem
      float: right
      text-align: center
      .arrow-icon
        margin-left: -0.4rem
        padding-left:.4rem
</style>
