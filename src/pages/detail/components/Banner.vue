<template>
  <div >
    <div class="banner" @click="handleBannerClick">
      <img class="banner-img" src="http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_600x330_f68eb231.jpg" alt="">
      <div class="banner-info">
        <div class="banner-title">{{this.sightName}}</div>
        <div class="banner-number">
          <span class="iconfont banner-icon">&#xe691;</span>4
        </div>
      </div>
    </div>
    <common-gallary v-show="showGallary" @close="handleGallaryClose" :imagesProp="gallaryImgs"></common-gallary>
  </div>
</template>
<script>
import CommonGallary from 'common/gallary/Gallary'
export default {
  name: 'DetailBanner',
  props: {
    sightName: {
      type: String,
      defaultValue: '北京'
    },
    bannerImg: {
      type: String,
      defaultValue: ''
    },
    gallaryImgs: {
      type: Array,
      defaultValue: []
    }
  },
  components: {
    CommonGallary
  },
  data () {
    return {
      // images: ['http://img1.qunarzz.com/sight/p0/1507/36/ce3d2d6c9ab44d67ae68d940b8781829.water.jpg_600x330_f68eb231.jpg', 'http://img1.qunarzz.com/sight/p0/1508/89/895a1b7add84f23faca053ce9e3153db.water.jpg_600x330_93d96bdf.jpg'],
      showGallary: false
    }
  },
  methods: {
    handleBannerClick () {
      this.showGallary = true
    },
    handleGallaryClose () {
      this.showGallary = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  .banner
    position: relative
    overflow: hidden
    height:0
    padding-bottom: 55%
    .banner-img
      width:100%
    .banner-info
      position: absolute
      right:0
      left:0
      bottom:0
      display:flex
      color: #fff
      line-height:.6rem
      background-image:linear-gradient(top,rgba(0,0,0,0),rgba(0,0,0,0.8))
      .banner-title
        flex:1
      .banner-number
        padding:0 .4rem
        height:.32rem
        line-height:.4rem
        margin-top:.14rem
        border-radius .2rem
        background-color rgba(0,0,0,.8)
        font-size: .24rem
        .banner-icon
          font-size:.24rem

</style>
