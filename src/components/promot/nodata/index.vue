<template>
  <div>
    <div>
      <van-empty
        class="custom-image"
        :image="imgPath.url"
        description="您暂时没有相关订单！"
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      imgPath: {
        url: require("@/assets/d29c1a60c5f03453.png"),
      },
    };
  },
};
</script>

<style lang="scss" scoped>
</style>
