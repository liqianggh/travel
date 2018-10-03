<template>
  <div class="wrapper">
    <swiper :options="swiperOption" v-show="showSwiper">
      <!-- slides -->
      <swiper-slide v-for="item of swiperList" :key="item.id">
        <img class="swiper-img" :src="item.imgUrl"/>
      </swiper-slide>
      <!-- Optional controls -->
      <div class="swiper-pagination"  slot="pagination"></div>
    </swiper>
  </div>

</template>
<script>
export default {
  name: 'HomeSwiper',
  props: {
    swiperList: Array
  },
  data: function () {
    return {
      swiperOption: {
        pagination: {
          el: '.swiper-pagination'
        }
      }
    }
  },
  computed: {
    showSwiper: function () {
      return this.swiperList.length
    }
  }
}
</script>
<style lang="stylus" scoped>
  .wrapper >>> .swiper-pagination-bullet-active
    background: red !important
  .wrapper
    overflow: hidden
    width: 100%
    height:0
    padding-bottom: 26.25%
    .swiper-img
      width:100%
      background: #333333
    /*height:31.25vw*/
    padding-bottom: 31.25%
    .swiper-img
      width:100%
      background: #333333
</style>
