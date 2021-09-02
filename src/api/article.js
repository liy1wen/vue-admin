import axios from "@/utils/request";

export const fetchList = query =>
  axios.get("/vue-element-admin/article/list", { params: query });

export const fetchArticle = id =>
  axios.get("/vue-element-admin/article/detail", { params: { id } });

export const fetchPv = pv => {
  axios.get("/vue-element-admin/article/pv", { params: { pv } });
};

export const createArticle = data =>
  axios.post("/vue-element-admin/article/create", data);

export const updateArticle = data =>
  axios.post("/vue-element-admin/article/update", data);
