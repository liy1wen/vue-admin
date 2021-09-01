import axios from "@/utils/request";

export const login = (p, config) => axios.post("/adm/login", p, config);

export const getInfo = token =>
  axios.get("/vue-admin-template/user/info", { token });

export const logout = () => axios.post("/vue-admin-template/user/logout");
