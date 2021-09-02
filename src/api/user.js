import axios from "@/utils/request";

export const login = p => axios.post("/vue-element-admin/user/login", p);

export const getInfo = token =>
  axios.get("/vue-element-admin/user/info", { token });

export const logout = () => axios.post("/vue-element-admin/user/logout");
