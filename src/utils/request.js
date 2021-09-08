import axios from "axios";
import { MessageBox, Message, Loading } from "element-ui";
import store from "@/store";
import { getToken } from "@/utils/auth";
let count = 0;
let loadingInstance = null;
const closeLoading = () => {
  console.log(count, "===");
  count--;
  if (count == 0) {
    loadingInstance.close();
  }
};
// create an axios instance
const service = axios.create({
  baseURL: process.env.VUE_APP_BASE_API, // url = base url + request url
  timeout: 5000 // request timeout
});

// request interceptor
service.interceptors.request.use(
  config => {
    if (count == 0) {
      loadingInstance = Loading.service({
        fullscreen: true,
        spinner: "el-icon-loading",
        text: "拼命加载中"
      });
    }
    count++;
    // if (store.getters.token) {
    //   config.headers["X-Token"] = getToken();
    // }

    return config;
  },
  error => {
    loadingInstance && closeLoading();
    // do something with request error
    console.log(error); // for debug
    return Promise.reject(error);
  }
);

// response interceptor
service.interceptors.response.use(
  response => {
    loadingInstance && closeLoading();
    const res = response.data;
    if (res.code !== 20000) {
      switch (res.code) {
        case 400:
          Message.error("错误请求");
          break;
        case 401:
          Message.error("未授权，请重新登录");
          MessageBox.confirm(
            "You have been logged out, you can cancel to stay on this page, or log in again",
            "Confirm logout",
            {
              confirmButtonText: "Re-Login",
              cancelButtonText: "Cancel",
              type: "warning"
            }
          ).then(() => {
            store.dispatch("user/resetToken").then(() => {
              location.reload();
            });
          });
          break;
        case 403:
          Message.error("拒绝访问");
          break;
        case 404:
          Message.error("请求错误,未找到该资源");
          break;
        case 405:
          Message.error("请求方法未允许");
          break;
        case 408:
          Message.error("请求超时");
          break;
        case 500:
          Message.error("服务器内部错误");
          break;
        case 501:
          Message.error("服务未实现");
          break;
        case 502:
          Message.error("服务器端出错");
          break;
        case 503:
          Message.error("服务不可用");
          break;
        case 505:
          Message.error("http版本不支持该请求");
          break;
        default:
          Message.error(res.msg);
      }
      return Promise.reject(new Error(res.message || "Error"));
    } else {
      return Promise.resolve(res);
    }
  },
  error => {
    loadingInstance && closeLoading();
    console.log("err" + error); // for debug
    Message({
      message: error.message,
      type: "error",
      duration: 5 * 1000
    });
    return Promise.reject(error);
  }
);

export default service;
