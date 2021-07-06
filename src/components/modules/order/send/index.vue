<template>
  <div>
    <NoData v-if="sendData.length < 1" />
  </div>
</template>

<script>
import NoData from "@/components/promot/nodata";
export default {
  data() {
    return {
      sendData: [],
    };
  },
  components: {
    NoData,
  },
};
</script>

<style lang="scss" scoped>
</style>
