<template>
  <ul class="list">
    <li class="item"
        :ref = "item"
        v-for="item of letters"
        :key="item"
        @click="handleLetterClick"
        @touchstart="handleTouchStart"
        @touchmove="handleTouchMove"
        @touchend="handleTouchEnd"
    >{{item}}</li>
  </ul>
</template>
<script>
export default {
  name: 'alphabet',
  data () {
    return {
      touchStatus: false,
      timer: null
    }
  },
  computed: {
    letters () {
      const letters = []
      for (let i in this.cities) {
        letters.push(i)
      }
      return letters
    }
  },
  props: {
    cities: Object
  },
  methods: {
    handleLetterClick (e) {
      this.$emit('change', e.target.innerText)
    },
    handleTouchStart () {
      this.touchStatus = true
    },
    handleTouchMove (e) {
      if (this.touchStatus) {
        if (this.timer) {
          clearTimeout(this.timer)
        }
        // 函数节流
        this.timer = setTimeout(() => {
          const startY = this.$refs['A'][0].offsetTop
          const touchY = e.touches[0].clientY
          const index = Math.floor((touchY - startY) / 22)
          if (index >= 0 && index < this.letters.length) {
            this.$emit('change', this.letters[index])
          }
        })
      }
    },
    handleTouchEnd () {
      this.touchStatus = false
    }
  }
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top:0rem
    padding-top:2.78rem
    right:0
    width: .4rem
    .item
      text-align: center
      line-height:.44rem
      color: $bgColor

</style>
