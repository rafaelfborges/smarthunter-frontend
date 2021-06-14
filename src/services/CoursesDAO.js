import api from "./api";

const findAll = async () => {
  const { data: response } = await api.get("courses");
  return response;
};

const create = async (course) => {
  const { data: response } = await api.post("courses", course);
  return response;
};

const findById = async (id) => {
  const { data: response } = await api.get(`courses/${id}`); 
  return response;
};

const updateById = async (id, course) => {
  const { data: response } = await api.put(`courses/${id}`, course); 
  return response;
};

const remove = async (id) => {
  const { data: response } = await api.delete(`courses/${id}`);
  return response
};

export { findAll, create, findById, updateById, remove };
