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
              <!-- <router-link to="/app/order">{{ "查看全部订单" }}</router-link> -->
              <p @click.stop="viewAllOrder(5)">{{ "查看全部订单" }}</p>
              <van-icon name="arrow" />
            </div>
          </div>
        </van-col>
        <van-col span="24" class="all_order">
          <!-- 全部订单 -->
          <div class="call" v-for="(item, id) in allOrderData" :key="id">
            <van-badge :content="5" v-if="item.id <= 1">
              <div class="child" />
            </van-badge>
            <div
              class="all_item"
              @click.stop="viewAllOrder(item.id, item.orderName)"
            >
              <van-icon :name="item.iconName" class="icon" />
              <p>{{ item.orderName }}</p>
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
    return {
      allOrderData: [
        {
          id: 1,
          iconName: "credit-pay",
          orderName: "待付款",
        },
        {
          id: 2,
          iconName: "peer-pay",
          orderName: "待发货",
        },
        {
          id: 3,
          iconName: "logistics",
          orderName: "待收货",
        },
        {
          id: 4,
          iconName: "after-sale",
          orderName: "售后/列表",
        },
        {
          id: 5,
          iconName: "orders-o",
          orderName: "全部订单",
        },
      ],
    };
  },
  methods: {
    viewAllOrder(tabrId, itemName) {
      sessionStorage.setItem(
        "allOrderId",
        JSON.stringify({ tabrId, itemName, allOrderData: this.allOrderData })
      );
      this.$router.push({
        name: "MyOrder",
        params: { id: tabrId, name: itemName },
      });
    },
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
  padding: 8px 25px 18px;
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
.all_order {
  width: 100%;
  height: 3.5rem;
  padding: 0 25px;
  box-sizing: border-box;
  background: #fff;
  display: flex;
  justify-content: space-between;
  .call {
    height: 100%;
    display: flex;
    flex-flow: column;
    justify-content: space-evenly;
    .all_item {
      text-align: center;
      > .icon {
        font-size: 26px;
        color: #c80000;
      }
      > p {
        font-size: 12px;
      }
    }
  }
}
</style>
