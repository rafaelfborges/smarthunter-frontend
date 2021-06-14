import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Loading from "../../components/Loading";
import { findAll } from "../../services/CoursesDAO";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
        const { content: courses } = await findAll();
        setCourses(courses);
        setLoading(false);
    })()
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container className="mt-4" fluid>
      {courses.map((course) => (
        <h1 key={course.id}>{course.name}</h1>
      ))}
    </Container>
  );
}
