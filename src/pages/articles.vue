<template>
  <div class="articles">
    <div id="article" class="contents">
      <router-link to="/articledetail" class="article">
        <div class="articlehead">
            <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
            <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
            <img class="articlethumb" src="../assets/images/pic_160.png">
        </div>
      </router-link>
      <a href="javascript:void(0);" class="article">
        <div class="articlehead">
          <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
          <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
          <img class="articlethumb" src="../assets/images/pic_160.png">
        </div>
      </a>
      <a href="javascript:void(0);" class="article">
        <div class="articlehead">
          <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
          <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
          <img class="articlethumb" src="../assets/images/pic_160.png">
        </div>
      </a>
    </div>
    <v-nav></v-nav>

  </div>
</template>

<script>
  import navbar from '../components/navbar'

    export default {
      name: "articles",
      components: {
        "v-nav": navbar
      }
    }
</script>

<style scoped lang="scss">
  .articles {
    padding-bottom: 56px;
    height: 100%;
    overflow-y: auto;
    .contents {
      padding-bottom: 55px;
    }
    .article {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 15px;
      color: #333;
      -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
    }
    .article:after {
      content: " ";
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      height: 1px;
      border-top: 1px solid #e5e5e5;
      color: #e5e5e5;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
      left: 15px;
    }
    .articlehead {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      min-width: 0;
    }
    .articletitle {
      font-weight: 400;
      font-size: 17px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .articledesc {
      padding-top: 8px;
      color: #999;
      font-size: 13px;
      line-height: 1.2;
      width: auto;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
      word-wrap: normal;
      word-wrap: break-word;
      word-break: break-all;
    }
    .articleimg {
      margin-left: .8em;
      width: 100px;
      height: 75px;
      line-height: 75px;
      text-align: center;
      border-radius: 5px;
      overflow: hidden;
    }
    .articlethumb {
      width: 100%;
      max-height: 100%;
      vertical-align: top;
      border: 0;
    }
  }

</style>
