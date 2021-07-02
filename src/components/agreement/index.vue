<template>
  <div>
    <div class="agrment">
      <div class="icon">
        <van-icon name="arrow-left"  @click="go"/>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {};
  },
  methods:{
      go(){
          this.$router.push({ path: '/' })
      }
  }
};
</script>

<style lang="scss" scoped>
.agrment {
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
  .icon {
      float: left;
      margin-top: 5px;
      font-size: 20px;
  }
}
</style>
