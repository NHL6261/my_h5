import axios from "axios"; // 引入axios
import QS from "qs";
axios.defaults.timeout = 6000;
axios.defaults.headers.post["Content-Type"] =
    "application/x-www-form-urlencoded;charset=UTF-8";
axios.defaults.headers.put["Content-Type"] = "image/jpeg";
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function get(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
                headers: {
                    // Authorization: sessionStorage.getItem("token")
                    // UserName: sessionStorage.getItem("UserName"),
                    // Token: sessionStorage.getItem("Token")
                },
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function getWithoutToken(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .get(url, {
                params: params,
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 */
export function post(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err.data);
            });
    });
}

export function put(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .put(url, params, {
                headers: {
                    "Content-Type": "image/jpeg",
                },
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

export function options(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .options(url, params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                },
            })
            .then((res) => {
                resolve(res);
            })
            .catch((err) => {
                console.log(err);
                reject(err.data);
            });
    });
}

// 文件上传
export function filePost(url, params) {
    return new Promise((resolve, reject) => {
        axios
            .post(url, params, {
                headers: {
                    "Content-Type": "multipart/form-data",
                    Authorization: sessionStorage.getItem("token"),
                },
            })
            .then((res) => {
                resolve(res.data);
            })
            .catch((err) => {
                reject(err.data);
            });
    });
}

axios.interceptors.request.use(
    function(config) {
        return config;
    },
    function(error) {
        // 对请求错误做些什么
        return Promise.reject(error);
    }
);

// 响应拦截器
axios.interceptors.response.use(
    (response) => {
        console.log(response)
        if (response.status === 200) {
            return Promise.resolve(response.data);
        } else {
            return Promise.reject(response);
        }
    },
    // 服务器状态码不是2开头的的情况
    // 这里可以跟你们的后台开发人员协商好统一的错误状态码
    // 然后根据返回的状态码进行一些操作，例如登录过期提示，错误提示等等
    // 下面列举几个常见的操作，其他需求可自行扩展
    (error) => {
        if (error.response.status) {
            if (error.response.status == 400) {
                alert('参数错误')
            } else if (error.response.status == 500) {
                alert('服务器错误')

            }
            return Promise.reject(error.response);
        }
    }
);