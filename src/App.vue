<template>
  <div id="app">
    <!--vue自带标签，路由内容被加载一次后放在内存中，下次加载时不用再加载组件，执行钩子-->
    <keep-alive>
      <!--显示的当前路由地址所对应的内容-->
      <router-view/>
    </keep-alive>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>
