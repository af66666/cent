<template>
    <div class="article">
      <div class="pack">
        <div class="header">网传996程序员办公室猝死，公司回应：系因低血糖晕倒</div>
        <div class="sider">2019/04/30 作者：麦豆 米因服务平台</div>
        <div class="contents">
          <div id="analysis" class="robot">
            <div>
              <div>想知道您的癌症风险吗？</div>
              <div class="robottip">AI大数据告诉您答案</div>
              <a href="javascript:;" class="weui-btn robotbtn">点击立即免费体验</a>
            </div>
            <div class="robotsub"><img class="robotimg" src="../assets/images/index10.jpg" alt="" /></div>
          </div>
          4月15日，一则“996程序员办公室猝死”的视频在网络传播，网友纷纷为突然倒下的男子惋惜。
          根据视频显示，一名男子扶着办公桌栏短暂逗留之后，直挺挺的摔倒在地面，其同事发现之后纷纷上前帮助，并将其送医。
          <img class="pic" src="../assets/images/index9.jpg" alt="" />
          男子所在的公司中软国际回应记者称，事发于4月15日上午，男子因没吃早饭低血糖晕倒，现已正常上班。
        </div>
        <div class="sider">@版权归作者所有 文章来源：三九养生堂</div>
        <div class="line"></div>
        <div class="share">
          <div class="shareline"></div>
          <div class="sharetext">分享自</div>
          <div class="shareline"></div>
        </div>
        <div class="card">
          <div class="cardhead">
            <div class="cardside">
              <div class="carduser">
                <img class="cardavatar" src="../assets/images/z1.jpg" alt="" />
                <i class="iconfont icon-vip cardicon"></i>
              </div>
              <div>
                <span id="" class="color-a">陈少惠</span><br />
                理财策划高级经理
              </div>
            </div>
            <div id="qrcode"><img class="cardchart" src="../assets/images/z3.jpg" alt="" /></div>
          </div>
          <div class="cardtip">产品咨询，理赔服务都可以找我哦！<div class="carddelta"></div></div>
          <div>
            爱相传理财规划能为你提供安全和长久的资金流，给予家人温暖和希望！<br />
            香港疫苗预约<br />
            保险理财规划<br />
            WeChat ID：sharonfs
          </div>
          <a href="javascript:;" class="weui-btn cardbtn">立即咨询</a>

        </div>
        <div id="modal" class="modal hide">
          <div class="modalbox">
            <div class="size-e">顾问微信</div>
            <img class="modalimg" src="../assets/images/searchw.png" alt="" />
            <div class="color-c size-b">长按识别 QR Code</div>
            <div class="modalsub"><i class="iconfont icon-geren"></i> WeChat ID: <span id="account">sharonfs</span></div>
            <a id="copy" href="javascript:;" class="weui-btn modalbtn">复制WeChat ID</a>
            <div class="modalline"></div>
            <div id="close" class="modalclose"><i class="iconfont icon-duihao"></i></div>
          </div>
        </div>
        <input type="text" id="paste" class="hide" />
      </div>
    </div>
</template>

<script>
    export default {
        name: "article-detail"
    }
</script>

<style scoped lang="scss">
  .article {
    color: #333;
    height: 100%;
    overflow-y: auto;
    .pack {
      height: 100%;
      overflow-y: auto;
    }
    .header {
      padding: 10px 15px;
      font-size: 22px;
      overflow: hidden;
      text-overflow: ellipsis;
      display: -webkit-box;
      -webkit-box-orient: vertical;
      -webkit-line-clamp: 2;
    }
    .sider {
      padding: 6px 15px;
      color: #999;
      font-size: 12px;
    }
    .contents {
      padding: 6px 15px;
      color: #666;
    }
    .pic {
      display: block;
      width: 100%;
    }
    .line {
      margin: 20px 0;
      border-bottom: 5px solid #f5f7fa;
    }
    .robot {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
      margin: 10px 0;
      padding: 10px;
      color: #333;
      border-radius: 5px;
      background: #f8fcff;
      -webkit-box-shadow: 0px 0px 6px 0px #eee;
      box-shadow: 0px 0px 6px 0px #eee;
    }
    .robotsub {
      width: 70px;
    }
    .robotimg {
      display: block;
      width: 100%;
    }
    .robottip {
      margin: 5px 0 10px;
      color: #999;
      font-size: 12px;
    }
    .robotbtn {
      margin: 0;
      width: 140px;
      color: #6293f5;
      font-size: 12px;
    }
    .robotbtn:after {
      border-color: #6293f5;
      border-radius: 9999px;
    }
    .share {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: center;
      padding: 10px 15px;
      color: #ccc;
      font-size: 12px;
    }
    .shareline {
      width: 40px;
      border-top: 1px solid #ccc;
    }
    .sharetext {
      padding: 0 15px;
    }
    .card {
      margin: 15px;
      padding: 15px;
      border-radius: 10px;
      -webkit-box-shadow: 0px 0px 6px 0px #eee;
      box-shadow: 0px 0px 6px 0px #eee;
    }
    .cardhead {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
    }
    .cardside {
      position: relative;
      padding-left: 75px;
      min-height: 60px;
    }
    .carduser {
      position: absolute;
      top: 0;
      left: 0;
      width: 75px;
      height: 60px;
      overflow: hidden;
    }
    .cardavatar {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 9999px;
    }
    .cardicon {
      position: absolute;
      right: 12px;
      bottom: 6px;
      width: 18px;
      height: 22px;
      font-size: 18px;
      color: #ed1548;
      border-radius: 9999px;
    }
    .cardchart {
      width: 34px;
    }
    .cardtip {
      position: relative;
      margin: 10px 0 15px;
      padding: 6px 12px;
      color: #666;
      font-size: 12px;
      background: #f0f2f5;
    }
    .carddelta {
      position: absolute;
      top: -6px;
      left: 10px;
      width: 0;
      height: 0;
      border-width: 0 6px 6px;
      border-style: solid;
      border-color: #fff #fff #f0f2f5;
    }
    .cardbtn {
      margin: 10px 0;
      color: #6293f5;
    }
    .cardbtn:after {
      border-color: #6293f5;
      border-radius: 9999px;
    }
    .modal {
      z-index: 2;
      position: absolute;
      top: 0;
      right: 0;
      bottom: 0;
      left: 0;
      padding-top: 60px;
      background: rgba(0,0,0,.5);
    }
    .modalbox {
      position: relative;
      margin: 0 25px;
      padding: 25px;
      text-align: center;
      border-radius: 5px;
      background: #fff;
    }
    .modalimg {
      display: block;
      margin: 15px auto;
      width: 140px;
    }
    .modalsub {
      padding: 15px 0;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
    .modalbtn {
      color: #6293f5;
    }
    .modalbtn:after {
      border-color: #6293f5;
      border-radius: 9999px;
    }
    .modalline {
      position: absolute;
      bottom: -26px;
      left: 50%;
      margin-left: -1px;
      height: 26px;
      width: 1px;
      border-left: 1px solid #fff;
    }
    .modalclose {
      position: absolute;
      left: 50%;
      bottom: -54px;
      margin-left: -15px;
      width: 28px;
      height: 28px;
      line-height: 28px;
      color: #fff;
      border: 1px solid #fff;
      border-radius: 9999px;
    }
  }

</style>
