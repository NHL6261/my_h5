<template>
  <div>
    <div id="bg" ref="bg" :style="bgStyle" class="animation" />
  </div>
</template>

<script>
export default {
  data() {
    return {
      bgStyle: {
        width: null,
        "--x-offset": null,
      },
      image: {
        width: 2560,
        height: 720,
      },
    };
  },
  created() {
    const fun = () => {
      const clientHeight =
        document.body.clientHeight |
        (document.documentElement && document.documentElement.clientHeight);
      const xOffset = parseInt(
        (this.image.width / this.image.height) * clientHeight
      );
      this.bgStyle["--x-offset"] = xOffset + "px";
      this.bgStyle.width = document.body.clientWidth + xOffset + "px";
    };
    window.onresize = () => {
      fun();
      // 重置 animation 保证变量加载
      this.$refs.bg.classList.remove("animation");
      setTimeout(() => {
        this.$refs.bg.classList.add("animation");
      }, 100);
    };
    fun();
  },
};
</script>

<style lang = 'scss'>
/* 需要污染到全局的 css */

@keyframes bg {
  0% {
    transform: translateX(0);
  }

  100% {
    transform: translateX(calc(-1 * var(--x-offset)));
  }
}

.animation {
  animation: bg 30s linear infinite;
}
</style>

<style scoped lang = 'scss'>
$bg-img: "https://cdn.jsdelivr.net/gh/fz6m/Private-web@harem1.0/harem/background/bg-rmse.jpg";

/* bg */

#bg {
  backface-visibility: hidden;
  transform: translate3d(0, 0, 0);
  background: url(#{$bg-img}) top left;
  background-repeat: repeat-x;
  background-size: var(--x-offset) auto, auto;
  height: 100%;
  position: fixed;
  left: 0;
  top: 0;
}

/* overlay */

@keyframes overlay {
  0% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
}
</style>
