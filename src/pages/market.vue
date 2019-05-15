<template>
  <div class="market">
    <div class="titles">营销资料（示例）</div>
    <div class="flexbox">
      <div class="bill">
        <img class="billimg" src="../assets/images/group15.png" alt="" />
        <div class="billnote">单页</div>
      </div>
      <div class="bill">
        <img class="billimg" src="../assets/images/group15.png" alt="" />
        <div class="billnote">海报</div>
      </div>
      <div class="bill">
        <img class="billimg" src="../assets/images/group15.png" alt="" />
        <div class="billnote">易拉宝</div>
      </div>
    </div>
    <div class="flexbox">
      <div class="bill">
        <img class="billimg" src="../assets/images/health9.jpg" alt="" />
        <div class="billnote">折页</div>
      </div>
      <div class="bill">
        <img class="billimg" src="../assets/images/health9.jpg" alt="" />
        <div class="billnote">名片</div>
      </div>
    </div>
    <div class="titles">营销秘籍</div>
    <div id="secret" class="secrets">
      <a href="javascript:void(0);" class="article">
        <div class="articlehead">
          <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
          <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
          <img class="articlethumb" src="../assets/images/index6.jpg">
        </div>
      </a>
      <a href="javascript:void(0);" class="article">
        <div class="articlehead">
          <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
          <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
          <img class="articlethumb" src="../assets/images/index7.jpg">
        </div>
      </a>
      <a href="javascript:void(0);" class="article">
        <div class="articlehead">
          <h4 class="articletitle">由各种物质组成的巨型球状天体，叫做星球。星球有一定的形状，有自己的运行轨道。</h4>
          <p class="articledesc">2019/04/22</p>
        </div>
        <div class="articleimg">
          <img class="articlethumb" src="../assets/images/index8.jpg">
        </div>
      </a>
    </div>
    <v-nav></v-nav>

  </div>
</template>

<script>
  import navbar from '../components/navbar'

  export default {
    name: "market",
    components: {
      "v-nav": navbar
    }
  }
</script>

<style scoped lang="scss">
  .market {
    padding-bottom: 56px;
    height: 100%;
    overflow-y: auto;
    .titles {
      padding: 10px 15px;
      font-size: 20px;
      font-weight: 400;
    }
    .flexbox {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
    }
    .bill {
      -webkit-box-flex: 1;
      -webkit-flex: 1;
      flex: 1;
      padding: 0 10px;
    }
    .billimg {
      display: block;
      width: 100%;
      border-radius: 5px;
    }
    .billnote {
      padding: 10px 0;
      text-align: center;
    }
    .secrets {
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
      -webkit-tap-highlight-color: rgba(0,0,0,0);
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
      width: 60px;
      height: 60px;
      line-height: 60px;
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
