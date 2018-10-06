<template>
  <ul class="list">
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
    <li class="item">A</li>
    <li class="item">B</li>
  </ul>
</template>
<script>
export default {
  name: 'alphabet'
}
</script>
<style lang="stylus" scoped>
  @import "~styles/variables.styl"
  .list
    display: flex
    flex-direction: column
    justify-content center
    position: absolute
    top:1.58rem
    right:0
    width: .4rem
    .item
      text-align: center
      line-height:.44rem
      color: $bgColor

</style>
