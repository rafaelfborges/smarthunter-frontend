import React, { useState, useEffect } from "react";
import { Container } from "react-bootstrap";

import Loading from "../../components/Loading";
import { findById } from "../../services/UsersDAO";

export default function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      const { enrolledCourses } = await findById(1);
      setEnrolledCourses(enrolledCourses);
      setLoading(false);
    })()
  }, []);

  return loading ? (
    <Loading />
  ) : (
    <Container className="mt-4" fluid>
      <h1>{console.log(enrolledCourses)}</h1>
    </Container>
  );
}
