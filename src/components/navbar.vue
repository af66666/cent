<template>
  <div class="weui-tabbar">
    <router-link to="/home" class="weui-tabbar__item">
      <!--<span class="weui-badge" style="position: absolute;top: -.4em;right: 1em;">8</span>-->
      <div class="weui-tabbar__icon">
        <!--<img src="../assets/images/icon_nav_button.png" alt="">-->
        <i class="iconfont icon-shouye"></i>
      </div>
      <p class="weui-tabbar__label">首页</p>
    </router-link>
    <router-link to="/articles" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <p class="weui-tabbar__label">获客文章</p>
    </router-link>
    <router-link to="/market" class="weui-tabbar__item">
      <div class="weui-tabbar__icon">
        <i class="iconfont icon-wode"></i>
      </div>
      <p class="weui-tabbar__label">营销秘籍</p>
    </router-link>
  </div>
</template>

<script>
    export default {
        name: "navbar"
    }
</script>

<style scoped lang="scss">
  .weui-tabbar {
    background: #fff;
  }
  .router-link-active .weui-tabbar__label {
    color: #1686ec;
  }

</style>
