<template>
  <div>
    <div class="recommend-title">热门推荐</div>
    <ul>
      <li class="item" v-for="(item, index) of recommendList" :key="index">
        <img class="item-img" :src="item.imgUrl" alt="">
        <div class="item-info">
          <p class="item-title">{{item.title}}</p>
          <p class="item-desc">{{item.desc}}</p>
          <button class="item-button">查看详情</button>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
export default {
  name: 'HomeRecommend',
  props: {
    recommendList: Array
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
  .item
    display: flex
    height:1.9rem
    overflow: hidden
    .item-img
      width:1.7rem
      height:1.7rem
      padding:.1rem
    .item-info
      min-width: 0
      flex:1
      padding:.1rem
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
