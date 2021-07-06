import MyHeader from "./headerinfo.vue";
// 这里是重点
const HeaderCom = {
    install: function(Vue) {
        Vue.component("HeaderCom", MyHeader);
    },
};

// 导出组件
export default HeaderCom;