<template>
  <div>
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
    return {};
  },
  computed: {
    router() {
      let title = "";
      this.$router.options.routes.forEach((item) => {
        if (item.path == this.$route.path) {
          title = item.meta.title;
        }
      });
      return title;
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
</style>

