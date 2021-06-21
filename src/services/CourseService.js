import api from "../api";

const findAllCourses = async () => {
  const {data: response} = await api.get("courses");
  return response;
};

const createCourse = async (course) => {
  const {data: response} = await api.post("courses", course);
  return response;
};

const findCourseById = async (id) => {
  const {data: response} = await api.get(`courses/${id}`);
  return response;
};

const updateCourseById = async (id, course) => {
  const {data: response} = await api.put(`courses/${id}`, course);
  return response;
};

const removeCourse = async (id) => {
  const {data: response} = await api.delete(`courses/${id}`);
  return response
};

export {findAllCourses, createCourse, findCourseById, updateCourseById, removeCourse};
