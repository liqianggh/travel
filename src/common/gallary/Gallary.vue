<template>
    <div class="container" @click="handleGallaryClick">
      <div class="wrapper">
        <swiper class="swipper-container" :options="swiperOptions" >
          <!-- slides -->
          <swiper-slide v-for="(item, index) in images" :key="index">
            <img   class="swiper-img gallary-image" :src="item"/>
          </swiper-slide>
          <!-- Optional controls -->
          <div class="swiper-pagination"  slot="pagination"></div>
        </swiper>
      </div>
    </div>
</template>
<script>
export default {
  name: 'CommonGallary',
  props: {
    imagesProp: {
      type: Array,
      default () {
        return []
      }
    }
  },
  data () {
    return {
      swiperOptions: {
        pagination: {
          el: '.swiper-pagination',
          type: 'fraction'
        },
        observerParents: true,
        observer: true
      },
      images: this.imagesProp
    }
  },
  methods: {
    handleGallaryClick () {
      this.$emit('close')
    }
  }
}
</script>
<style lang="stylus" scoped>
  .container >>> .swipper-container
    overflow: inherit
  .container
    display: flex
    flex-direction:column
    justify-content:center
    position: absolute
    top:0
    left:0
    right:0
    bottom:0
    z-index: 99
    background: #000
    .wrapper
      background-color: #ffffff
      width: 100%
      height:0
      /*overflow: hidden*/
      padding-bottom: 50%
      .gallary-image
        width:100%
      .swiper-pagination
        color: #ffffff
 </style>
