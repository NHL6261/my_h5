<template>
  <div>
    <NoData v-if="paymentData.length < 1 "/>
  </div>
</template>

<script>
import NoData from '@/components/promot/nodata'
export default {
  data() {
    return {
      paymentData: []
    };
  },
  components: {
    NoData
  }
};
</script>

<style lang="scss" scoped>
</style>
