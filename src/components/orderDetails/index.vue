<template>
  <div>
    <Headerinfo />
    <van-tabs v-model="targeId">
      <van-tab
        badge="5"
        :title="
          ActiveName[0].orderName == '' ? '待付款' : ActiveName[0].orderName
        "
      >
        <Payment class="payment" />
      </van-tab>
      <van-tab
        :title="
          ActiveName[1].orderName == '' ? '待发货' : ActiveName[1].orderName
        "
      >
        <Send class="payment" />
      </van-tab>
      <van-tab
        :title="
          ActiveName[2].orderName == '' ? '待收货' : ActiveName[2].orderName
        "
        ><Delivery class="payment"
      /></van-tab>
      <van-tab
        :title="
          ActiveName[3].orderName == '' ? '售后/列表' : ActiveName[3].orderName
        "
        ><After class="payment"
      /></van-tab>
      <van-tab
        :title="
          ActiveName[4].orderName == '' ? '全部订单' : ActiveName[4].orderName
        "
        ><Allorder class="payment"
      /></van-tab>
    </van-tabs>
  </div>
</template>

<script>
import Send from "@/components/modules/order/send";
import Headerinfo from "@/components/modules/headerinfo/headerinfo.vue";
import Payment from "@/components/modules/order/payment";
import After from "@/components/modules/order/after";
import Allorder from "@/components/modules/order/allorder";
import Delivery from "@/components/modules/order/delivery";
export default {
  name: "orderDetails",
  data() {
    return {
      targeId: 0,
      ActiveName: [],
    };
  },
  methods: {
    initTab: function () {
      let Active = JSON.parse(sessionStorage.getItem("allOrderId"));
      this.targeId = Active.tabrId - 1;
      this.ActiveName = Active.allOrderData;
    },
    go: function () {
      this.$router.go(-1);
    },
  },
  created() {
    this.initTab();
  },
  components: {
    After,
    Headerinfo,
    Delivery,
    Payment,
    Send,
    Allorder,
  },
};
</script>

<style lang="scss" scoped>
.payment {
  width: 100%;
  height: calc(100vh - 84px);
  padding: 0 10px;
  box-sizing: border-box;
}
</style>
