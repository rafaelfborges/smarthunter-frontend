import api from "./api";

const findAll = async () => {
  return await api.get("courses");
};

const create = async (course) => {
  return await api.post("courses", course);
};

const findById = async (id) => {
  return await api.get(`courses/${id}`);
};

const updateById = async (id, course) => {
  return await api.put(`courses/${id}`, course);
};

const remove = async (id) => {
  return await api.delete(`courses/${id}`);
};

export { findAll, create, findById, updateById, remove };
