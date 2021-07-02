/*
 *  设备管理所有的api
 */
import { post, get } from "@/request/http.js";
export const rq_fun = {
    // 登录
    async loginAction(params = {}) {
        const res = await post("/apiP/login", params);
        return res;
    },
};