<template>
  <div>
    <div class="icon" v-if="controlHidden">
      <van-icon name="arrow-left" @click="go" />
    </div>
    <van-row>
      <van-col span="24">
        <header class="fixd">{{ router }}</header>
      </van-col>
    </van-row>
  </div>
</template>

<script>
export default {
  data() {
    return {
      controlHidden: false
    };
  },
  computed: {
    router() {
      let title = "";
      this.$router.options.routes.forEach((item) => {
        if (item.path == this.$route.path) {
          title = item.meta.title;
          this.controlHidden = item.meta.iconShow
        }
      });
      return title;
    },
  },
  methods: {
    go: function () {
      // sessionStorage.removeItem("allOrderId")
      this.$router.go(-1);
    },
  },
};
</script>

<style lang="scss" scoped>
.fixd {
  height: 40px;
  background: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}
.icon {
  position: absolute;
  left: 1rem;
  z-index: 1;
  margin-top: 12px;
  font-size: 24px;
}
</style>

