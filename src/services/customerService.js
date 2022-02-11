import http from "../http-common";

const getAll = () => {
  return http.get("/customers");
};

const create = (data) => {
  return http.post("/customers", data);
};

const get = (id) => {
  return http.get(`/customers/${id}`);
};

export default {
  get,
  getAll,
  create,
};
