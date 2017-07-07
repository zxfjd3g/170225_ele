<template>
  <div>
    <ele-header></ele-header>
    <div class="tab">
      <div class="tab-item">
        <router-link to="/goods">商品</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/ratings">评价</router-link>
      </div>
      <div class="tab-item">
        <router-link to="/seller">商家</router-link>
      </div>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
  import header from './components/header/header.vue'

  export default {
    components: {
      'ele-header': header
    }
  }
</script>

<style lang="stylus" rel="stylesheet/stylus">
  @import "common/stylus/mixins.styl"

  .tab
    height 40px
    line-height 40px
    display: flex
    border-1px(rgba(7,17,27,0.1))
    .tab-item
      flex 1
      font-size 14px
      color rgb(77,85,93)
      text-align center
      .active
        color: red
</style>
