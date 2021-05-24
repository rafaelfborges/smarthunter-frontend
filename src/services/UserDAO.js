import axios from "axios";

const apiUrl = process.env.BACKEND_APP_URL;

const create = async (user) => {
  return axios.post(`${apiUrl}/users`, user);
};

const findAll = async () => {
  return axios.get(`${apiUrl}/users`);
};

const findById = async (id) => {
  return axios.get(`${apiUrl}/users/${id}`);
};

const updateById = async (id, user) => {
  return axios.put(`${apiUrl}/users/${id}`, user);
};

const remove = async (id) => {
  return axios.delete(`${apiUrl}/users/${id}`);
};

export { create, findAll, findById, updateById, remove };
