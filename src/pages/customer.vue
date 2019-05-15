<template>
    <div class="customer">
      <div class="head">
        <div class="user">
          <div>
            <img class="avatar" src="../assets/images/index13.png" alt="" />
          </div>
          <div>
            <div id="username" class="size-c">孙一一</div>
            <div class="color-c"><span id="age">26岁</span>&nbsp;&nbsp;&nbsp;&nbsp;<span id="sex">男</span></div>
            <object><a id="tel" class="tel" href="tel:18839369087"><i class="iconfont icon-shouji"></i> <span id="phone">156*****666</span></a></object>
          </div>
        </div>
        <img class="mask" src="../assets/images/index17.png" alt="" />
      </div>
      <div id="history" class="history">
        <div class="list">
          <div class="left">
            <div class="times">
              <span>2019/05/09</span>
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div>
              <div class="size-c">健康</div>
              <div class="color-c">投保人：非本人</div>
              <div class="color-c income">投保人年收入：20万</div>
            </div>
          </div>
          <div>
            <router-link class="see" to="/results">查看详细报告 <i class="iconfont icon-you"></i></router-link>
          </div>
        </div>
        <div class="list">
          <div class="left">
            <div class="times">
              <span>2019/03/19</span>
              <div class="circle"></div>
              <div class="line"></div>
            </div>
            <div>
              <div class="size-c">健康</div>
              <div class="color-c">投保人：非本人</div>
              <div class="color-c income">投保人年收入：20万</div>
            </div>
          </div>
          <div>
            <a class="see" href="javascript:;">查看详细报告 <i class="iconfont icon-you"></i></a>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "customer"
    }
</script>

<style scoped lang="scss">
  .customer {
    * {
      box-sizing: border-box;
    }
    body {
      font-size: 14px;
      background: #fff;
    }
    .head {
      position: relative;
      padding: 15px 15px 0;
      background: #6293F5;
    }
    .user {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      padding: 15px 10px 30px;
      border-radius: 10px 10px 0 0;
      background: #fff;
    }
    .avatar {
      display: block;
      margin-right: 15px;
      width: 65px;
      border-radius: 9999px;
    }
    .tel {
      display: block;
      color: #4575E6;
    }
    .mask {
      position: absolute;
      left: 0;
      bottom: 0;
      width: 100%;
    }
    .history {
      padding: 30px 15px;
    }
    .list {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
      justify-content: space-between;
    }
    .left {
      position: relative;
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: flex-start;
      -webkit-align-items: flex-start;
      align-items: flex-start;
    }
    .times {
      position: relative;
      padding-right: 20px;
      width: 100px;
      color: #999;
      font-size: 12px;
    }
    .circle {
      position: absolute;
      top: 4px;
      right: 10px;
      width: 10px;
      height: 10px;
      border: 2px solid #4575E5;
      border-radius: 9999px;
    }
    .line {
      position: absolute;
      top: -70px;
      right: 15px;
      height: 70px;
      border-right: 1px solid #4575E5;
    }
    .list:first-child .line {
      display: none;
    }
    .income {
      padding-bottom: 20px;
    }
    .see {
      font-size: 12px;
      color: #4575E6;
    }
  }

</style>
