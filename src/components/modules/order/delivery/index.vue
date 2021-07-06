<template>
  <div>
    <NoData v-if="deliveryData.length < 1" />
  </div>
</template>

<script>
import NoData from "@/components/promot/nodata";
export default {
  data() {
    return {
      deliveryData: [],
    };
  },
  components: {
    NoData,
  },
};
</script>

<style lang="scss" scoped>
</style>
