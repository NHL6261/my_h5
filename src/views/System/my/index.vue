<template>
  <div>
    <HeaderCom />
    <div class="big_box">
      <!-- 基本信息 -->
      <van-row>
        <van-col span="24" class="whole" style="border-radius: 5px">
          <div class="user_img">
            <img
              width="50"
              height="50"
              src="https://img11.360buyimg.com/jdphoto/s120x120_jfs/t21160/90/706848746/2813/d1060df5/5b163ef9N4a3d7aa6.png"
            />
          </div>
          <div class="user_setting">
            <div class="user_name">{{ "nhl0626" }}</div>
            <div class="user_icon">
              <router-link to="/my/setting">
                <van-icon name="setting-o" class="user-icon" />
              </router-link>
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
            <van-badge :content="item.paymentNumber" v-if="item.paymentNumber">
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
      <!-- 资产 -->
      <van-row>
        <van-col span="24" class="assets">
          <div class="assets_swiper">
            <div
              class="assets_content"
              v-for="(item, id) in assetsData"
              :key="id"
              @click.prevent="goAssetsId(item.id)"
            >
              <div class="assets_nu">
                <p :style="{ fontSize: item.fontSize + 'px' }">
                  {{ item.assets_nu }}
                </p>
              </div>
              <div class="assets_item">
                <van-icon
                  name="pending-payment"
                  class="icon"
                  v-if="item.assets_icon"
                />
                <p>{{ item.assets_item }}</p>
              </div>
            </div>
          </div>
        </van-col>
      </van-row>
      <!-- 工具与服务 -->
      <van-row>
        <van-col span="24" class="tool">
          <p>工具与服务</p>
        </van-col>
      </van-row>
    </div>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      allOrderData: [
        {
          id: 1,
          paymentNumber: 0,
          iconName: "credit-pay",
          orderName: "待付款",
        },
        {
          id: 2,
          paymentNumber: 9999,
          iconName: "peer-pay",
          orderName: "待发货",
        },
        {
          id: 3,
          paymentNumber: 10000,
          iconName: "logistics",
          orderName: "待收货",
        },
        {
          id: 4,
          paymentNumber: 1,
          iconName: "after-sale",
          orderName: "售后/列表",
        },
        {
          id: 5,
          paymentNumber: 0,
          iconName: "orders-o",
          orderName: "全部订单",
        },
      ],
      assetsData: [
        {
          id: 1,
          assets_nu: 0,
          assets_icon: false,
          assets_item: "优惠券",
        },
        {
          id: 2,
          assets_nu: "开通有礼",
          assets_icon: false,
          assets_item: "白条",
          fontSize: "13",
        },
        {
          id: 3,
          assets_nu: 0,
          assets_icon: false,
          assets_item: "京东",
        },
        {
          id: 4,
          assets_nu: 0,
          assets_icon: false,
          assets_item: "红包",
        },
        {
          id: 5,
          assets_icon: true,
          assets_item: "我的资产",
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
    goAssetsId(id) {
      id == 5 && this.goPath();
    },
    goPath() {
      this.$router.push({ path: "/my/assets" });
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
.order,
.assets,
.tool {
  width: 100%;
  //   border-radius: 5px;
  background: #fff;
  margin-top: 10px;
  padding: 20px 30px;
  box-sizing: border-box;
  display: flex;
}
.whole {
  background: url(https://img12.360buyimg.com/img/s1500x886_jfs/t1/115726/22/13102/240974/5f18fb83Ee40e230b/d4f2a67087fd443a.png)
    no-repeat scroll 0 0 / cover;
  z-index: -1;
  margin-top: 0;
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
  font-size: 20px;
  color: #fff;
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
.assets {
  background: #fff;
  border-radius: 5px;
  justify-content: space-between;
  align-items: center;
  padding: 10px 20px;
  > .assets_swiper {
    width: 100%;
    display: flex;
    justify-content: space-between;
    line-height: 30px;
    > .assets_content {
      display: flex;
      flex-direction: column;
      align-items: center;
      > .assets_nu {
        > p {
          font-size: 18px;
          color: #262626;
          font-weight: 700;
          font-family: JDZhengHT-Regular;
          white-space: nowrap;
        }
      }
      > .assets_item {
        > p {
          font-size: 12px;
        }
      }
    }
    > .my_assets {
      display: flex;
      flex-direction: column;
      align-items: center;
      line-height: 30px;
    }
  }
}
.assets_item {
  text-align: center;
  > .icon {
    color: #c80000;
    font-size: 20px;
  }
}
.tool {
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  padding: 15px;
  > p {
    color: #2e2d2d;
    font-size: 14px;
    font-weight: 700;
  }
}
</style>
