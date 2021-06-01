import api from "./api";

const findAll = async () => {
  return await api.get("users");
};

const create = async (user) => {
  return await api.post("users", user);
};

const findById = async (id) => {
  return await api.get(`users/${id}`);
};

const updateById = async (id, user) => {
  return await api.put(`users/${id}`, user);
};

const remove = async (id) => {
  return await api.delete(`users/${id}`);
};

export { findAll, create, findById, updateById, remove };
