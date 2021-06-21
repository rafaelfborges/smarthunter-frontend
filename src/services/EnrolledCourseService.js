import api from "../api";

const createEnrolledCourse = async (enrolledCourse) => {
  const {data: response} = await api.post("enrolled_courses", enrolledCourse);
  return response;
};

export { createEnrolledCourse }