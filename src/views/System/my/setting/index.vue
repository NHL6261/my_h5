<template>
  <div>
    <HeaderCom />
    <van-row>
      <van-col span="24" class="whole">
        <!-- 我的账户 -->
        <div class="manage_account">
          <p>{{ MyAccount }}</p>
        </div>
        <ul class="account_list">
          <li>
            <div class="user_info">
              <!-- 头像 -->
              <div class="user_avator-wrapper">
                <img
                  width="50"
                  height="50"
                  src="https://avatars.githubusercontent.com/u/52996513?s=60&v=4"
                />
              </div>
              <!-- 用户名 -->
              <div class="user_detail">
                <div class="main_detail">
                  <p>{{ UserNameAll }}</p>
                </div>
                <div class="append_detail">
                  <p>用户名: {{ UserNameItem }}</p>
                </div>
              </div>
              <div class="current_account_tip">
                <p>当前登录</p>
              </div>
              <div class="top_right_decoration_points"></div>
              <div class="top_right_decoration_ring"></div>
              <!-- <div class="top_right_decoration_circle"></div> -->
            </div>
          </li>
        </ul>
      </van-col>
      <van-col span="24" class="address">
        <div class="all_goods_list">
          <div class="goods_address">
            <p>{{ AddressManage }}</p>
          </div>
          <div class="manment_address">
            <p>{{ CreateAddress }}</p>
            <van-icon name="arrow" class="icon" />
          </div>
        </div>
      </van-col>
      <van-col span="24" class="security">
        <div class="all_goods_list">
          <div class="goods_address">
            <p>{{ Security }}</p>
          </div>
          <div class="manment_address">
            <p>{{ AuthorManage }}</p>
            <van-icon name="arrow" class="icon" />
          </div>
        </div>
      </van-col>
      <van-col span="24" class="pay_pwd">
        <div class="all_goods_list">
          <div class="goods_address">
            <p>{{ payPassword }}</p>
          </div>
          <div class="manment_address">
            <p>{{ payPassword }}</p>
            <van-icon name="arrow" class="icon" />
          </div>
        </div>
      </van-col>
      <van-col span="24" class="customer_service">
        <div class="all_goods_list">
          <div class="goods_address">
            <p>{{ Contact_Service }}</p>
          </div>
          <div class="manment_address">
            <p>{{ Answer }}</p>
            <van-icon name="arrow" class="icon" />
          </div>
        </div>
      </van-col>
      <van-col span="24" class="switch_site">
        <div class="all_goods_list">
          <div class="goods_address">
            <p>{{ SwitchSite }}</p>
          </div>
          <!-- <div class="manment_address">
            <p>{{ payPassword }}</p>
            <van-icon name="arrow" class="icon" />
          </div> -->
        </div>
      </van-col>
    </van-row>
    <van-row>
      <van-col span="24">
        <div class="footer">
          <div class="opinion">
            <van-icon name="records" class="icon" />
            <p>{{ Content }}</p>
          </div>
          <div class="opinion" @click.stop="ExitHandle">
            <van-icon name="friends-o" class="icon" />
            <p>{{ Exit }}</p>
          </div>
        </div>
      </van-col>
    </van-row>
  </div>
</template>

<script>
import { Dialog } from "vant";
export default {
  components: {},
  data() {
    return {
      ToSetUp: "去设置",
      payPassword: "京东支付密码",
      Security: "账户与安全",
      AuthorManage: "密码/实名认证等管理",
      AddressManage: "收获地址管理",
      CreateAddress: "创建第一个收货地址",
      MyAccount: "管理我的账户",
      UserNameAll: "nhl0626",
      UserNameItem: "nhl0626",
      CurretLogin: "当前登录",
      Contact_Service: "联系客服",
      Answer: "即时解答用户疑难",
      SwitchSite: "切换站点",
      Content: "意见反馈",
      Exit: "退出登录",
    };
  },
  methods: {
    ExitHandle() {
      Dialog.confirm({
        title: "退出",
        message: "确定退出",
      })
        .then(() => {
          this.$router.push({ path: "/" })
          this.$toast("您已退出");
        })
        .catch(() => {
          this.$toast("取消退出");
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.whole,
.address {
  width: 100%;
  background: #fff;
  border-top: 1px solid #e5e5e5;
  padding: 10px;
  box-sizing: border-box;
  border-bottom-left-radius: 10px;
  border-bottom-right-radius: 10px;
  .manage_account {
    display: flex;
    margin-bottom: 10px;
    > p {
      color: #333;
      font-size: 16px;
    }
  }
  .account_list {
    list-style: none;
    position: relative;
    margin: 0;
    padding: 2px 0 15px;
    > li {
      background: #fff9f9;
      height: 90px;
      padding: 10px;
      border-radius: 10px;
      border: 1px solid #ff414e;
      background-color: #fff9f9;
      padding: 10px;
      box-sizing: border-box;
      display: flex;
      align-items: center;
      > .user_info {
        display: flex;
        align-items: center;
        > .user_avator-wrapper {
          > img {
            border-radius: 50%;
          }
        }
        > .user_detail {
          display: flex;
          flex-direction: column;
          flex-wrap: wrap;
          margin-left: 10px;
          > .main_detail {
            > p {
              font-size: 13px;
            }
          }
          > .append_detail {
            > p {
              font-size: 12px;
              color: #333;
              opacity: 0.7;
              margin-top: 3px;
            }
          }
        }
        .current_account_tip {
          position: absolute;
          right: 1px;
          top: 3px;
          padding: 1px 10px;
          background-color: #ffe4e4;
          color: #e2231a;
          border-top-right-radius: 10px;
          border-bottom-left-radius: 10px;
          > p {
            font-size: 12px;
            font-weight: normal;
          }
        }
        .top_right_decoration_points {
          position: absolute;
          bottom: 29px;
          right: 45px;
          width: 27px;
          height: 22px;
          background-image: url("../../../../assets/accout.png");
          background-size: 27px 22px;
        }
        .top_right_decoration_ring {
          position: absolute;
          bottom: 24px;
          right: 18px;
          width: 13px;
          height: 13px;
          background: transparent;
          border-radius: 100%;
          border: 2px solid #ffa9a9;
          opacity: 0.2;
        }
        .top_right_decoration_circle {
          position: absolute;
          width: 52px;
          height: 52px;
          bottom: -7px;
          right: -23px;
          border-radius: 100%;
          background-color: #ffa9a9;
          opacity: 0.2;
        }
      }
    }
  }
}
.address,
.security,
.pay_pwd,
.customer_service,
.switch_site {
  border-top: none;
  border-radius: 10px;
  margin: 20px 0;
  padding: 12px;
  box-sizing: border-box;
  .all_goods_list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    > .manment_address {
      display: flex;
      align-items: center;
      > p,
      .icon {
        font-size: 12px;
        color: #999;
      }
    }
  }
}
.security,
.pay_pwd,
.customer_service,
.switch_site {
  margin: 0;
  background: #fff;
}
.pay_pwd,
.switch_site {
  border-top: 1px solid #f2f2f2;
}
.customer_service {
  margin-top: 20px;
}
.footer {
  width: 100%;
  padding: 10px 40px;
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;
  > .opinion {
    display: flex;
    align-items: center;
    > p {
      color: #666;
      font-size: 14px;
    }
    > .icon {
      font-size: 20px;
    }
  }
}
</style>
