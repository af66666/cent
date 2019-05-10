<template>
    <div class="message">
      <div class="pack" id="list">
        <div class="js-chat sub" sign="0">
          <div class="leftbar"><img class="avatar" src="../assets/images/z4.jpg" alt="" /><div class="sign"></div></div>
          <div class="rightbar">
            <div class="head">
              <div class="size-d">飞飞</div>
              <div class="size-b color-n">2019/03/21 13:11</div>
            </div>
            <div class="desc">
              你好，我想咨询一下保险方面的相关内容？
            </div>
          </div>
        </div>
        <div class="js-chat sub" sign="0">
          <div class="leftbar"><img class="avatar" src="../assets/images/z4.jpg" alt="" /><div class="sign"></div></div>
          <div class="rightbar">
            <div class="head">
              <div class="size-d">飞飞</div>
              <div class="size-b color-n">2019/03/21 13:11</div>
            </div>
            <div class="desc">
              你好，我想咨询一下保险方面的相关内容？
            </div>
          </div>
        </div>
        <div class="js-chat sub" sign="0">
          <div class="leftbar"><img class="avatar" src="../assets/images/z4.jpg" alt="" /><div class="sign"></div></div>
          <div class="rightbar">
            <div class="head">
              <div class="size-d">飞飞</div>
              <div class="size-b color-n">2019/03/21 13:11</div>
            </div>
            <div class="desc">
              你好，我想咨询一下保险方面的相关内容？
            </div>
          </div>
        </div>
        <div class="js-chat sub" sign="0">
          <div class="leftbar"><img class="avatar" src="../assets/images/z4.jpg" alt="" /><div class="sign"></div></div>
          <div class="rightbar">
            <div class="head">
              <div class="size-d">飞飞</div>
              <div class="size-b color-n">2019/03/21 13:11</div>
            </div>
            <div class="desc">
              你好，我想咨询一下保险方面的相关内容？
            </div>
          </div>
        </div>
        <div class="js-chat sub" sign="0">
          <div class="leftbar"><img class="avatar" src="../assets/images/z4.jpg" alt="" /><div class="sign"></div></div>
          <div class="rightbar">
            <div class="head">
              <div class="size-d">飞飞</div>
              <div class="size-b color-n">2019/03/21 13:11</div>
            </div>
            <div class="desc">
              你好，我想咨询一下保险方面的相关内容？
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        name: "message"
    }
</script>

<style scoped lang="scss">
  .message {
    * {
      box-sizing: border-box;
    }
    body {
      font-size: 14px;
      background: #fff;
    }
    .pack {
      padding: 15px;
      height: 100%;
      overflow-y: auto;
    }
    .sub {
      position: relative;
      margin-bottom: 15px;
    }
    .sub:after {
      content: " ";
      position: absolute;
      left: 70px;
      bottom: 0;
      right: -15px;
      height: 1px;
      border-top: 1px solid #d9d9d9;
      color: #d9d9d9;
      -webkit-transform-origin: 0 0;
      transform-origin: 0 0;
      -webkit-transform: scaleY(.5);
      transform: scaleY(.5);
    }
    .leftbar {
      float: left;
    }
    .avatar {
      display: block;
      width: 60px;
      height: 60px;
      border-radius: 9999px;
    }
    .sign {
      position: absolute;
      top: 0;
      left: 48px;
      width: 10px;
      height: 10px;
      border-radius: 9999px;
      background: #F5495B;
    }
    .rightbar {
      margin-left: 70px;
      min-height: 60px;
    }
    .head {
      display: -webkit-box;
      display: -webkit-flex;
      display: flex;
      -webkit-box-align: center;
      -webkit-align-items: center;
      align-items: center;
      justify-content: space-between;
    }
    .desc {
      padding: 10px 0;
      color: #999;
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    }
  }


</style>
