import api from "./api";

const findAll = async () => {
  const { data: response } = await api.get("users");
  return response;
};

const create = async (user) => {
  const { data: response } = await api.post("users", user);
  return response;
};

const findById = async (id) => {
  const { data: response } = await api.get(`users/${id}`);
  return response;
};

const updateById = async (id, user) => {
  const { data: response } = await api.put(`users/${id}`, user);
  return response;
};

const remove = async (id) => {
  const { data: response } = await api.delete(`users/${id}`);
  return response;
};

export { findAll, create, findById, updateById, remove };
