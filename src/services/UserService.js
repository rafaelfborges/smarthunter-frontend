import api from "./api";

const findAllUsers = async () => {
  const {data: response} = await api.get("users");
  return response;
};

const createUser = async (user) => {
  const {data: response} = await api.post("users", user);
  return response;
};

const findUserById = async (id) => {
  const {data: response} = await api.get(`users/${id}`);
  return response;
};

const updateUserById = async (id, user) => {
  const {data: response} = await api.put(`users/${id}`, user);
  return response;
};

const removeUser = async (id) => {
  const {data: response} = await api.delete(`users/${id}`);
  return response;
};

export {findAllUsers, createUser, findUserById, updateUserById, removeUser};
