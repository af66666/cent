<template>
  <div class="index">
    <div class="weui-search-bar" id="searchBar">
      <form class="weui-search-bar__form">
        <div class="weui-search-bar__box">
          <i class="weui-icon-search"></i>
          <input type="search" class="weui-search-bar__input" id="searchInput" placeholder="搜索" required="">
          <a href="javascript:" class="weui-icon-clear" id="searchClear"></a>
        </div>
        <label class="weui-search-bar__label" id="searchText" style="transform-origin: 0px 0px 0px; opacity: 1; transform: scale(1, 1);">
          <i class="weui-icon-search"></i>
          <span>搜索</span>
        </label>
      </form>
      <a href="javascript:" class="weui-search-bar__cancel-btn" id="searchCancel">取消</a>
    </div>
    <div class="topbox">
      <img class="topimg" src="../assets/images/index3.jpg" alt="图片加载失败" />
    </div>

    <div class="m-tab">
      <div class="m-navbar">
        <a class="m-items" :class="{ mactive : boxa }" @click="tabs('a')" >
          医疗险
          <i class="m-sign"></i>
        </a>
        <a class="m-items" :class="{ mactive : boxb }" @click="tabs('b')" >
          重疾险
          <i class="m-sign"></i>
        </a>
        <a class="m-items" :class="{ mactive : boxc }" @click="tabs('c')" >
          寿险
          <i class="m-sign"></i>
        </a>
      </div>
      <div class="m-sub">
        <div class="m-subbox" v-if="idx === 'a'">
          <a class="card">
            <div class="cardhead">
              <div class="cardbox">
                <div class="color-m size-a">1623人正在保障中...</div>
                <div class="cardname">同方全球「康健一生」(新多倍保)保险产品计划</div>
                <div class="color-c size-a">可多次赔付 | 340种疾病 | 保障全面</div>
                <span class="color-l">￥<span class="size-e">100.00</span></span>起
              </div>
              <img class="cardimg" src="../assets/images/index4.jpg" alt="图片加载失败" />
            </div>
            <div class="cardbody">
              <div>
                <div class="size-c">200万</div>
                <span class="color-c size-a">最高保额</span>
              </div>
              <div>
                <div class="size-c">1周岁-60周岁</div>
                <span class="color-c size-a">投保年龄</span>
              </div>
              <div>
                <div class="size-c">1年</div>
                <span class="color-c size-a">投保期限</span>
              </div>
            </div>
          </a>
          <a class="card">
            <div class="cardhead">
              <div class="cardbox">
                <div class="color-m size-a">1623人正在保障中...</div>
                <div class="cardname">同方全球「欣和一生」保险产品计划</div>
                <div class="color-c size-a">保障全面 | 128种疾病</div>
                <span class="color-l">￥<span class="size-e">80.00</span></span>起
              </div>
              <img class="cardimg" src="../assets/images/index5.jpg" alt="图片加载失败" />
            </div>
            <div class="cardbody">
              <div>
                <div class="size-c">100万</div>
                <span class="color-c size-a">最高保额</span>
              </div>
              <div>
                <div class="size-c">1周岁-60周岁</div>
                <span class="color-c size-a">投保年龄</span>
              </div>
              <div>
                <div class="size-c">5年</div>
                <span class="color-c size-a">投保期限</span>
              </div>
            </div>
          </a>
        </div>
        <div class="m-subbox" v-else-if="idx === 'b'">
          <h1>页面二</h1>
        </div>
        <div class="m-subbox" v-else="idx === 'c'">
          <h1>页面三</h1>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    name: "insure",
    data() {
      return {
        idx: 'a',
        boxa: true,
        boxb: false,
        boxc: false
      }
    },
    methods: {
      tabs (e){
        this.idx = e;
        console.log(e);
        var me = e;
        if(me == 'a'){
          this.boxa = true;
          this.boxb = false;
          this.boxc = false;
        }else if(me == 'b'){
          this.boxa = false;
          this.boxb = true;
          this.boxc = false;
        }else{
          this.boxa = false;
          this.boxb = false;
          this.boxc = true;
        }
      }
    }
  }
</script>

<style scoped>
  .index {
    height: 100%;
    background: #f7f7fa;
    overflow-y: auto;
  }
  .index .weui-search-bar {
    padding: 10px 15px;
    background-color: rgba(255,255,255,0);
  }
  .index .weui-search-bar:after,
  .index .weui-search-bar:before {
    border: none;
  }
  .index .weui-search-bar__form:after {
    border: 1px solid #1686ec;
  }
  .index .weui-search-bar__cancel-btn {
    color: #1686ec;
    font-size: 14px;
  }
  .index .topbox {
    margin: 0 15px;
    border-radius: 5px;
    overflow: hidden;
  }
  .index .topimg {
    display: block;
    width: 100%;
  }
  .index .m-tab {
    position: relative;
    left: 0;
    bottom: 0;
    width: 100%;
  }
  .index .m-navbar {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    position: absolute;
    z-index: 500;
    top: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0 15px;
  }
  .index .m-items {
    position: relative;
    display: block;
    padding: 13px 0;
    width: 92px;
    font-size: 15px;
    color: #888;
    -webkit-tap-highlight-color: rgba(0,0,0,0);
  }
  .index .m-items.mactive {
    color: #333;
    font-size: 17px;
  }
  .index .mactive .m-sign {
    display: block;
    position: absolute;
    bottom: 5px;
    left: 15px;
    width: 22px;
    height: 4px;
    background: #1686ec;
    border-radius: 10px;
  }
  .index .m-sub {
    padding: 50px 15px 54px;
    box-sizing: border-box;
  }
  .index .card {
    display: block;
    margin-bottom: 10px;
    font-size: 14px;
    color: #333;
    border-radius: 5px;
    overflow: hidden;
  }
  .index .cardhead {
    position: relative;
    padding: 15px 15px 0;
    background: #f2fafd;
  }
  .index .cardbox {
    margin-right: 121px;
    min-height: 142px;
  }
  .index .cardname {
    padding: 6px 0;
    font-size: 16px;
    font-weight: 400;
    color: #333;
  }
  .index .cardimg {
    position: absolute;
    right: 20px;
    bottom: 0;
    display: block;
    width: 106px;
  }
  .index .cardbody {
    display: -webkit-box;
    display: -webkit-flex;
    display: flex;
    padding: 10px 0;
    text-align: center;
    background: #fff;
  }
  .index .cardbody>div {
    -webkit-box-flex: 1;
    -webkit-flex: 1;
    flex: 1;
    border-right: 1px solid #eee;
  }
  .index .cardbody>div:last-child {
    border: none;
  }

</style>

