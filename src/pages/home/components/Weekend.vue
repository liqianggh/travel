<template>
  <div>
    <div class="recommend-title">周末去哪儿</div>
    <ul>
      <li class="item" v-for="(item, index) of weekendList" :key="index">
        <div class="item-img-wrapper">
          <img class="item-img" :src="item.imgUrl" alt="">
        </div>
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
         </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeWeekend',
  props: {
    weekendList: Array
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/mixins.styl"
  .recommend-title
    line-height:.8rem
    background: #eee
    text-indent:.2rem
    margin-top:.2rem
  .item-img-wrapper
    height:0
    overflow: hidden
    padding-bottom: 33.9%
    .item-img
      width:100%
   .item-info
      min-width: 0
     .item-title
      line-height:.54rem
      font-size:.32rem
      ellipsis()
    .item-desc
      line-height:.4rem
      color: #ccc
      ellipsis()
    .item-button
      line-height:.44rem
      background:#ff9300
      border-radius:.06rem
      margin-top:.2rem
      color: #fff
      padding:0 .1rem
</style>
