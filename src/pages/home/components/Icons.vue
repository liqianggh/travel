<template>
  <div class="icons">
      <swiper :options="swiperOption">
        <swiper-slide v-for="(page, index) of pages" :key="index">
          <div v-for="item of page" :key="item.id" class="icon">
            <div class="icon-image">
              <img class="icon-image-content" :src="item.imgUrl" alt="">
            </div>
            <p class="icon-desc">{{item.desc}}</p>
          </div>
        </swiper-slide>
      </swiper>
  </div>
</template>
<script>
export default {
  name: 'Icons',
  props: {
    iconList: Array
  },
  data: function () {
    return {
      swiperOption: {}
    }
  },
  computed: {
    pages () {
      const pages = []
      this.iconList.forEach((item, index) => {
        const page = Math.floor(index / 8)
        if (!pages[page]) {
          pages[page] = []
        }
        pages[page].push(item)
      })
      return pages
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  @import "~styles/mixins.styl"
  .icons
    width: 100%
    overflow: hidden
    height: 0
    padding-bottom: 50%
    /*background: green*/
    .icon
      height: 0
      position: relative
      float: left
      overflow: hidden
      width: 25%
      padding-bottom 25%
      /*background: red*/
      .icon-image
        position: absolute
        top:0
        left:0
        right:0
        bottom:.44rem
        /*background: blue*/
        box-sizing: border-box
        padding:.1rem
        .icon-image-content
          height:1.4rem
          display: block
          margin:0 auto
      .icon-desc
        position: absolute
        left:0
        right:0
        bottom:0
        height:.44rem
        line-height:.44rem
        text-align: center
        ellipsis()
</style>
