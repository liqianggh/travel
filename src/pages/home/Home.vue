<template>
  <div>
    <home-header></home-header>
    <home-swiper :swiperList="swiperList"></home-swiper>
    <home-icons :iconList="iconList"></home-icons>
    <home-recommend :recommendList="recommendList"></home-recommend>
    <home-weekend :weekendList="weekendList"></home-weekend>
   </div>
</template>
<script>
import HomeHeader from './components/Header'
import HomeSwiper from './components/Swiper'
import HomeIcons from './components/Icons'
import HomeRecommend from './components/Recommend'
import HomeWeekend from './components/Weekend'
import axios from 'axios'
import { mapState } from 'vuex'
export default {
  name: 'home',
  components: {
    HomeHeader,
    HomeSwiper,
    HomeIcons,
    HomeRecommend,
    HomeWeekend
  },
  data () {
    return {
      swiperList: [],
      recommendList: [],
      weekendList: [],
      iconList: []

    }
  },
  methods: {
    getHomeInfo () {
      axios.get('/api/index.json?city=' + this.city).then(this.getHomeInfoSucc)
    },
    getHomeInfoSucc (res) {
      res = res.data
      console.log(res.data)
      if (res.ret && res.data) {
        // const data = res.data
        this.swiperList = res.data.swiperList
        this.recommendList = res.data.recommendList
        this.weekendList = res.data.weekendList
        this.iconList = res.data.iconList
      }
    }
  },
  mounted () {
    this.getHomeInfo()
    this.lastCity = this.city
  },
  computed: {
    ...mapState(['city'])
  },
  acitivated () {
    if (this.lastCity !== this.city) {
      this.lastCity = this.city
      this.getHomeInfo()
    }
  }
}
</script>
<style>
  .home{
    font-size: 50px;
  }
</style>
