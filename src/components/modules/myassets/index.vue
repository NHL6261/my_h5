<template>
  <div>
    <HeaderCom />
    <van-row>
      <van-col span="24" class="envelope">
        <!-- 红包 -->
        <div class="remaining">
          <div class="rem_content">
            <img src="../../../assets/d0d14b33d18e208d.png" alt="" />
          </div>
          <div class="rem_number">
            <p>红包</p>
            <p>¥{{ "0.00" }}</p>
          </div>
        </div>
      </van-col>
      <!-- 优惠券 -->
      <van-col span="24" class="coupons">
        <div class="coupons_swiper">
          <div class="coupons_item" v-for="(item, id) in couponsData" :key="id">
            <div class="coupons_content">
              <van-icon :name="item.icon" class="icon" />
              <p>{{ item.couponName }}</p>
              <p>{{ item.couponNumber  }}</p>
            </div>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      couponsData: [
        {
          id: 1,
          icon: "coupon-o",
          couponName: "优惠券",
          couponNumber: 0 + "张",
        },
        {
          id: 2,
          icon: "passed",
          couponName: "京豆",
          couponNumber: 0 + "个",
        },
        {
          id: 3,
          icon: "comment-o",
          couponName: "礼品卡",
          couponNumber: 0 + "张",
        },
        {
          id: 4,
          icon: "pending-payment",
          couponName: "余额",
          couponNumber: "¥" + "0.00",
        },
        {
          id: 5,
          icon: "idcard",
          couponName: "银行卡",
          couponNumber: "查看详情",
        },
        {
          id: 6,
          icon: "balance-pay",
          couponName: "白条",
          couponNumber: "领立减30元劵",
        },
        {
          id: 7,
          icon: "underway-o",
          couponName: "小白信用",
          couponNumber: 0 + "分",
        },
        {
          id: 8,
          icon: "shop-collect-o",
          couponName: "领货码",
          couponNumber: 0 + "张",
        },
        {
          id: 9,
          icon: "cash-on-deliver",
          couponName: "膨胀金",
          couponNumber: "查看详情",
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped>
.envelope {
  width: 100%;
  background: #f2270c;
  padding: 0 10px;
  text-align: center;
  box-sizing: border-box;
  display: flex;
  min-height: 100px;
  overflow: hidden;
  > .remaining {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    > .rem_content {
      > img {
        margin: 30px 10px 30px 0;
        width: 40px;
        height: 40px;
        fill: #fff;
      }
    }
    > .rem_number {
      display: flex;
      align-items: center;
      flex-direction: column;
      justify-content: space-between;
      line-height: 22px;
      > p {
        color: #fff;
        font-size: 16px;
      }
      > p:last-child {
        color: hsla(0, 0%, 100%, 0.7);
        font-size: 12px;
      }
    }
  }
}
.coupons {
  width: 100%;
  height: 300px;
  .coupons_swiper {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    justify-content: space-between;
    .coupons_item {
      width: 30.33%;
      height: 90px;
      padding: 10px 5px;
      text-align: center;
      background-color: #fff;
      border-right: 1px solid #f5f5f5;
      border-bottom: 1px solid #f5f5f5;
      .coupons_content {
        display: flex;
        flex-direction: column;
        line-height: 26px;
        > .icon {
          font-size: 30px;
          color: red;
        }
        p {
          font-size: 14px;
          color: #333;
        }
        p:last-child {
          color: #999;
          font-size: 10px;
        }
      }
    }
    .coupons_item:nth-child(3) {
      border-right: none;
    }
    .coupons_item:nth-child(6) {
      border-right: none;
    }
  }
}
</style>
