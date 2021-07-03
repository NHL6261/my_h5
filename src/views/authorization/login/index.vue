<template>
  <div>
    <loginBg />
    <div class="login_fixd">
      <van-form ref="loginForm">
        <van-field
          v-model="username"
          name="用户名"
          label="用户名"
          placeholder="用户名"
          :rules="[{ required: true, message: '请填写用户名' }]"
        />
        <van-field
          v-model="password"
          type="password"
          name="密码"
          label="密码"
          placeholder="密码"
          :rules="[{ required: true, message: '请填写密码' }]"
        />
        <!-- 滑块 -->
        <sliDer @sliderSuccess="sliderSuccess" />
        <div class="no_account">
          <p>若无账号?</p>
          <p>点击注册</p>
        </div>
        <div class="login-btn">
          <van-button
            round
            block
            type="info"
            native-type="submit"
            @click="loginHandle"
            >登录</van-button
          >
        </div>
      </van-form>
      <div class="agree_deal">
        <van-checkbox v-model="checked" shape="square">
          <p class="agr" @click.stop="jumpAgr">
            在接受本协议之前,请您仔细阅读本协议的全部内容,勾选视为同意本协议
          </p>
        </van-checkbox>
      </div>
    </div>
  </div>
</template>

<script>
import loginBg from "@/components/loginBg";
import sliDer from "@/components/slider";
import { rq_fun } from "@/api/login";
export default {
  components: {
    loginBg,
    sliDer,
  },
  data() {
    return {
      username: "",
      password: "",
      valiterSliser: null,
      valiterTitle: "",
      checked: false,
    };
  },
  methods: {
    onSubmit(values) {
      console.log("submit", values);
    },
    sliderSuccess(e, t) {
      this.valiterSliser = e;
      this.valiterTitle = t;
      console.log(this.valiterSliser, this.valiterTitle);
    },
    jumpAgr() {
      this.$router.push({ path: "/agreement" });
    },
    loginHandle() {
      if(this.username == ""){
        this.$toast("请输入用户名");
        return
      }
      if(this.password == ""){
        this.$toast("请输入密码");
        return
      }
      if (!this.valiterSliser) {
        this.$toast("请拖动滑块验证");
        return;
      }
      if (!this.checked) {
        this.$toast("请阅读后勾选此协议");
        return;
      }
      this.$refs.loginForm
        .validate()
        .then(() => {
          rq_fun
            .loginAction({
              user: this.username,
              password: this.password,
            })
            .then((res) => {
              let { code, msg, token } = res;
              if (code == 200) {
                this.$toast({
                  message: `${msg}`,
                  position: "top",
                });
                this.$store.commit("SAVA_TOKEN", token);
                this.$router.push({ name: 'home' })
              }
            });
        })
        .catch(() => {
          this.$toast.fail("提交失败");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.login_fixd {
  width: 100%;
  height: 100vh;
  padding: 0 50px;
  box-sizing: border-box;
  position: fixed;
  left: 0;
  top: 0;
}
.agr {
  font-size: 12px;
  color: #323233;
}
.no_account {
  display: flex;
  float: right;
  margin: 10px;
  > p:first-child {
    font-size: 14px;
  }
  > p:last-child {
    font-size: 13px;
    margin-left: 6px;
  }
}
.agree_deal {
  clear: both;
}
</style>
