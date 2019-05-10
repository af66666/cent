<template>
  <div class="index">
    <div class="user flex">
      <div>
        <img class="avatar" src="../assets/images/pic_160.png" alt="图片加载失败" />
      </div>
      <div class="userinfo">
        <div class="username">
          <div id="">小李</div>
          <div>
            <button class="weui-btn person" id="person">PRO</button>
          </div>
        </div>
        <div class="weui-msg__desc company">--保险公司</div>
        <div class="flex">
          <div class="num">
            <span class="color-a size-f">50</span>
            <div>昨日评估人数</div>
          </div>
          <div class="deal">
            <span class="color-d size-f">129</span>
            <div>累计成交人数</div>
          </div>
        </div>
      </div>
    </div>
    <div class="assess">
      <a href="javascript:void(0);">
        <img class="assessimg" src="../assets/images/index15.png" alt="图片加载失败" />
        <div class="assessbox flex">
          <div class="color-a size-f">
            Medin AI大数据
            <div class="color-b size-b">为你推荐适合你的保险</div>
          </div>
          <div class="assessbtn">智能<br />推荐</div>
        </div>
        <img class="wave" src="../assets/images/index16.png" alt="图片加载失败" />
      </a>
    </div>
    <div class="custom">
      <div>客户信息</div>
      <div><router-link to="/message"><button class="weui-btn msg" id="custom">客户留言</button></router-link></div>
    </div>
    <div class="list">
      <div id="customers">
        <div class="weui-panel weui-panel_access">
          <!--<div class="weui-panel__hd">图文组合列表</div>-->
          <div class="weui-panel__bd">
            <router-link to="/customer" class="weui-media-box weui-media-box_appmsg">
              <div class="weui-media-box__hd">
                <img class="weui-media-box__thumb" src="../assets/images/pic_160.png" alt="图片加载失败">
              </div>
              <div class="weui-media-box__bd">
                <h4 class="weui-media-box__title">孙题一</h4>
                <p class="weui-media-box__desc"><span id="">26</span>岁&nbsp;&nbsp;<span id="">男</span>&nbsp;&nbsp;年收入<span id="">20</span>万元</p>
                <object><a class="phone" href="tel:18839369087"><i class="iconfont icon-shouji"></i> 156*****666</a></object>
              </div>
            </router-link>
          </div>
          <div class="weui-panel__ft">
            <router-link to="/customer" class="weui-cell weui-cell_link">
              <div class="weui-cell__hd">投保人：本人</div>
              <div class="weui-cell__bd"></div>
              <span class="weui-cell__ft"><span id="">03/22</span>&nbsp;&nbsp;<span id="">09:32</span></span>
            </router-link>
          </div>
          <a sign="0" href="javascript:;" class="toggle js-open">...</a>
          <div id="modal0" class="modal hide">
            <div><i class="js-close iconfont icon-duihao"></i></div>
            <div class="modalbox">
              <div class="modalsub"><i class="iconfont icon-duihao"></i><br /><span>未成交</span></div>
              <div class="modalsub"><i class="iconfont icon-duihao"></i><br /><span>置底</span></div>
              <div class="modalsub"><i class="iconfont icon-duihao"></i><br /><span>置顶</span></div>
            </div>
          </div>
        </div>
      </div>
      <div class="cell-more hide">
        <a href="javascript:void(0);"><span class="weui-btn btn-more">查看更多</span></a>
      </div>
    </div>
    <div class="empty-box hide">
      <img class="empty" src="../assets/images/empty.png" alt="图片加载失败" />
      <p class="tip">评估健康风险，智能保险推荐</p>
    </div>

  </div>
</template>

<script>
  export default {
    name: "home"
  }
</script>

<style scoped lang="scss">
  .index {
    padding-top: 20px;
    background: #fff;
    .flex {
      display: flex;
    }
    .user {
      margin: 0 15px 20px;
      align-items: center;
    }
    .avatar {
      display: block;
      width: 120px;
      height: 120px;
      border-radius: 5px;
      overflow: hidden;
    }
    .userinfo {
      padding-left: 15px;
      font-size: 12px;
      color: #999;
    }
    .username {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
      color: #333;
      font-size: 24px;
      font-weight: bold;
    }
    .person {
      color: #4575E5;
      font-size: 12px;
      border-radius: 9999px;
      background: #fff;
    }
    .person:after {
      border-color: #4575E5;
      border-radius: 9999px;
    }
    .company {
      padding-bottom: 10px;
    }
    .num {
      padding-right: 20px;
      border-right: 1px solid #eee;
    }
    .deal {
      padding-left: 20px;
    }
    .assess {
      position: relative;
      margin: 0 15px;
      border-radius: 5px;
      background: #f7fbff;
      overflow: hidden;
    }
    .assessimg {
      position: absolute;
      bottom: 5px;
      left: 20px;
      display: block;
      width: 62px;
    }
    .assessbox {
      margin-left: 100px;
      height: 76px;
      align-items: flex-end;
      justify-content: space-around;
    }
    .assessbtn {
      padding: 6px;
      width: 42px;
      height: 42px;
      line-height: 21px;
      text-align: center;
      font-size: 16px;
      font-weight: bold;
      color: #fff;
      border-radius: 22px;
      background: linear-gradient(to top, #3172F5, #6293F5);
      -webkit-box-shadow: 0 0 10px 0 #2991F0;
      box-shadow: 0 0 10px 0 #2991F0;
    }
    .wave {
      display: block;
      width: 100%;
    }
    .custom {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
      padding: 10px 15px;
      font-size: 20px;
      color: #333;
      background: linear-gradient(to top, #f5f7fa, #fff);
    }
    .msg {
      color: #4575E5;
      font-size: 12px;
      border-radius: 9999px;
      background: #fff;
    }
    .msg:after {
      border-color: #4575E5;
      border-radius: 9999px;
    }
    .list {
      min-height: 300px;
      padding: 0 15px 54px;
      background: #f5f7fa;
    }
    .weui-panel:after,
    .weui-panel:before {
      border: none;
    }
    .weui-media-box_appmsg .weui-media-box__thumb {
      border-radius: 9999px;
    }
    .phone {
      display: block;
      color: #1686ec;
    }
    .weui-cell_link:first-child:before {
      right: 15px;
    }
    .btn-more {
      margin: 15px auto 10px;
      padding: 0 32px;
      width: 150px;
      font-weight: 200;
      line-height: 2;
      color: #fff;
      border: none;
      border-radius: 8px;
      background-color: #459ef0;
    }
    .btn-more:after {
      border: none;
    }
    .empty-box {
      background: #f5f7fa;
      overflow: hidden;
    }
    .empty {
      display: block;
      margin: 40px auto;
      width: 90px;
    }
    .tip {
      margin-bottom: 95px;
      font-size: 12px;
      color: #999;
      text-align: center;
    }
    .toggle {
      z-index: 1;
      display: block;
      position: absolute;
      top: 0;
      right: 0;
      width: 30px;
      height: 30px;
      line-height: 1;
      color: #999;
      text-align: center;
    }
    .modal {
      z-index: 2;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      background: rgba(0,0,0,.3);
    }
    .modalbox {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-around;
    }
    .modalsub {
      padding-top: 10px;
      width: 64px;
      height: 64px;
      text-align: center;
      color: #666;
      font-size: 12px;
      border-radius: 9999px;
      background: #fff;
      box-sizing: border-box;
    }
  }

</style>
