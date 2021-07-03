<template>
  <div>
    <headerinfo />
    <div class="big_box">
      <!-- 基本信息 -->
      <van-row>
        <van-col span="24" class="whole" style="border-radius: 5px">
          <div class="user_img">
            <img
              width="50"
              height="50"
              src="https://avatars.githubusercontent.com/u/52996513?s=60&v=4"
            />
          </div>
          <div class="user_setting">
            <div class="user_name">{{ "傲娇的小老弟" }}</div>
            <div class="user_icon">
              <van-icon name="setting" class="user-icon" />
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 订单 -->
      <van-row>
        <van-col span="24" class="order">
          <!-- 我的订单 -->
          <div class="my_order">
            <div class="order_text">
              <p>{{ "我的订单" }}</p>
            </div>
            <div class="ls_order">
              <p>{{ "查看全部订单" }}</p>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
import headerinfo from "@/components/modules/headerinfo/headerinfo.vue";
export default {
  components: {
    headerinfo,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
.big_box {
  flex: 1;
  height: calc(100vh - 60px);
}
.whole,
.order {
  width: 100%;
  //   border-radius: 5px;
  background: #fff;
  margin-top: 10px;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
}
.user_img {
  margin-right: 0.75rem;
}
.user_img > img {
  border-radius: 50px;
}
.user_setting {
  width: 100%;
  display: flex;
  -webkit-justify-content: center;
  align-items: center;
  justify-content: space-between;
  .user_name {
    color: #000;
    font-size: 0.8rem;
    width: auto;
    max-width: 10rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
}
.user-icon {
  font-size: 16px;
}
.order {
  padding: 8px 15px 18px;
  box-sizing: border-box;
  border-bottom: 1px solid #f5f5f5;
  border-top-left-radius: 5px;
  border-top-right-radius: 5px;
  .my_order {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    .ls_order {
      display: flex;
      justify-content: space-between;
      align-items: center;
      font-size: 0.6rem;
      color: #aaa;
      letter-spacing: 0.025rem;
      padding-right: 0.5rem;
    }
    .order_text {
      font-size: 0.8rem;
      color: #434343;
    }
  }
}
</style>
