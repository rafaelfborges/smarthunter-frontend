import React, {useContext, useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";

import Loading from "../../components/Loading"

import {AuthContext} from "../../contexts/AuthContext";

import {findAllCourses} from "../../services/CourseService";
import {findUserById} from "../../services/UserService";
import {createEnrolledCourse} from  "../../services/EnrolledCourseService";

import history from "../../history";

export default function Courses() {
  const {logguedUser} = useContext(AuthContext);

  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [enrolledCourses, setEnrolledCourses] = useState([]);
  
  const handleEnroll = async (userId, courseId) => {
    const request = {
      course: {
        id: courseId
      },
      user: {
        id: userId
      }
    }
    const data = await createEnrolledCourse(request);
    alert("Você foi matriculado com sucesso!")
    history.push("/my-courses")
  }
  
  useEffect(() => {
    (async () => {
      const {content: courses} = await findAllCourses();
      const {enrolledCourses} = await findUserById(logguedUser.id);
      setCourses(courses);
      setEnrolledCourses(enrolledCourses)
      setLoading(false);
    })()
  }, [logguedUser]);
  
  return loading ? (
    <Loading onlySpinner={true} />
  ) : (
    <>
      <Container className="mt-2 mb-2">
        <Row>
          {courses.map((course) => (
            <Col key={course.id} className="mt-2 mb-2 ml-2 card-course">
              <CardDeck key={course.id}>
                <Card key={course.id} className="card-course">
                  <Card.Img className="card-image" variant="top" src={course.thumbUrl}/>
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    { 
                      enrolledCourses.length === 0 ? (
                        <Button variant="primary" onClick={() => handleEnroll(logguedUser.id, course.id)}>
                          Matricular
                        </Button>
                      ) : (
                        enrolledCourses.map(({course: userCourse}) => (
                          <div key={userCourse.id}>
                            {userCourse.id !== course.id ? (
                              <Button variant="primary" onClick={() => handleEnroll(logguedUser.id, course.id)}>
                                Matricular
                              </Button>
                            ) : (
                              <Button as={Link} to={`/course/${course.id}`} variant="success">Assistir</Button>
                            )}
                          </div>
                        ))
                      )
                    }
                  </Card.Body>
                </Card>
              </CardDeck>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
}
