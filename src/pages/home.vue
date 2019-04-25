<template>
  <div class="index">
    <div class="user flex">
      <div>
        <img class="avatar" src="../assets/images/pic_160.png" alt="图片加载失败" />
      </div>
      <div class="userinfo">
        <div class="username" id="">小李</div>
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
      <a href="ask_one.html">
        <img class="assessimg" src="../assets/images/index1.jpg" alt="图片加载失败" />
        <div class="assessbox flex">
          <div class="color-a size-f">
            小米精灵
            <div class="color-b size-b">为你推荐适合你的保险</div>
          </div>
          <div class="assessbtn">智能<br />推荐</div>
        </div>
        <img class="wave" src="../assets/images/index2.jpg" alt="图片加载失败" />
      </a>
    </div>
    <div class="customer">客户信息 <i class="iconfont icon-you"></i></div>
    <div class="list">
      <div class="weui-panel weui-panel_access">
        <!--<div class="weui-panel__hd">图文组合列表</div>-->
        <div class="weui-panel__bd">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="../assets/images/pic_160.png" alt="图片加载失败">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">孙题一</h4>
              <p class="weui-media-box__desc"><span id="">26</span>岁&nbsp;&nbsp;<span id="">男</span>&nbsp;&nbsp;年收入<span id="">20</span>万元</p>
              <object><a class="phone" href="tel:18839369087"><i class="iconfont icon-shouji"></i> 156*****666</a></object>
            </div>
          </a>
        </div>
        <div class="weui-panel__ft">
          <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__hd">投保人：本人</div>
            <div class="weui-cell__bd"></div>
            <span class="weui-cell__ft"><span id="">03/22</span>&nbsp;&nbsp;<span id="">09:32</span></span>
          </a>
        </div>
      </div>
      <div class="weui-panel weui-panel_access">
        <!--<div class="weui-panel__hd">图文组合列表</div>-->
        <div class="weui-panel__bd">
          <a href="javascript:void(0);" class="weui-media-box weui-media-box_appmsg">
            <div class="weui-media-box__hd">
              <img class="weui-media-box__thumb" src="../assets/images/pic_160.png" alt="图片加载失败">
            </div>
            <div class="weui-media-box__bd">
              <h4 class="weui-media-box__title">孙题一</h4>
              <p class="weui-media-box__desc"><span id="">26</span>岁&nbsp;&nbsp;<span id="">男</span>&nbsp;&nbsp;年收入<span id="">20</span>万元</p>
              <object><a class="phone" href="tel:18839369087"><i class="iconfont icon-shouji"></i> 156*****666</a></object>
            </div>
          </a>
        </div>
        <div class="weui-panel__ft">
          <a href="javascript:void(0);" class="weui-cell weui-cell_link">
            <div class="weui-cell__hd">投保人：本人</div>
            <div class="weui-cell__bd"></div>
            <span class="weui-cell__ft"><span id="">03/22</span>&nbsp;&nbsp;<span id="">09:32</span></span>
          </a>
        </div>
      </div>
      <div class="cell-more">
        <a href="customer_list.html"><span class="weui-btn btn-more">查看更多</span></a>
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
  height: 100%;
  background: #f7f7fa;
  overflow-y: auto;
}
.flex {
  display: flex;
}
.index .user {
  margin: 20px 15px;
  align-items: center;
}
.index .avatar {
  width: 120px;
  height: 120px;
  border-radius: 5px;
  overflow: hidden;
}
.index .avatar {
  display: block;
  width: 120px;
  height: 120px;
  border-radius: 5px;
}
.index .userinfo {
  padding-left: 15px;
  font-size: 12px;
  color: #999;
}
.index .username {
  color: #333;
  font-size: 24px;
  font-weight: bold;
}
.index .company {
  padding-bottom: 10px;
}
.index .num {
  padding-right: 20px;
  border-right: 1px solid #eee;
}
.index .deal {
  padding-left: 20px;
}
.index .assess {
  position: relative;
  margin: 0 15px;
  border-radius: 5px;
  background: #f7fbff;
  overflow: hidden;
}
.index .assessimg {
  position: absolute;
  top: 10px;
  left: 10px;
  display: block;
  width: 60px;
  height: 80px;
}
.index .assessbox {
  margin-left: 100px;
  padding-bottom: 8px;
  height: 72px;
  align-items: flex-end;
  justify-content: space-around;
}
.index .assessbtn {
  padding: 6px;
  width: 46px;
  height: 46px;
  line-height: 22px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  color: #fff;
  border-radius: 22px;
  background: #459ef0;
}
.index .wave {
  display: block;
  margin-top: -2px;
  width: 100%;
}
.index .customer {
  padding: 10px 15px;
  font-size: 20px;
  color: #333;
}
.index .list {
  padding: 0 15px 54px;
}
.index .weui-panel:after,
.index .weui-panel:before {
  border: none;
}
.index .weui-media-box_appmsg .weui-media-box__thumb {
  border-radius: 9999px;
}
.index .phone {
  display: block;
  color: #1686ec;
}
.index .weui-cell_link:first-child:before {
  right: 15px;
}
.index .btn-more {
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
.index .btn-more:after {
  border: none;
}
.index .empty-box {
  overflow: hidden;
}
.index .empty {
  display: block;
  margin: 40px auto;
  width: 90px;
}
.index .tip {
  margin-bottom: 95px;
  font-size: 12px;
  color: #999;
  text-align: center;
}

</style>
