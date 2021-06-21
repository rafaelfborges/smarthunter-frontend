import React, {useContext, useEffect, useState} from "react";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";

import {AuthContext} from "../../contexts/AuthContext";

import {findUserById} from "../../services/UserService";
import {findCourseById} from "../../services/CourseService";
import Loading from "../../components/Loading";

export default function EnrolledCourses() {
  const {logguedUser} = useContext(AuthContext);
  const [loading, setLoading] = useState(true)
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const {enrolledCourses} = await findUserById(logguedUser.id);

      const courses = await Promise.all(enrolledCourses.map(async ({course}) => {
        return await findCourseById(course.id);
      }));

      setEnrolledCourses(courses);
      setLoading(false);
    })()
  }, [logguedUser]);

  return loading ? (
    <Loading onlySpinner={true} />
  ) : (
    <Container className="mt-2 mb-2">
      <Row>
        {enrolledCourses.map((course) => (
          <Col key={course.id} className="mt-2 mb-2 ml-2">
            <CardDeck>
              <Card style={{minWidth: '18rem', maxWidth: '27rem'}} key={course.id}>
                <Card.Img variant="top" src={course.thumbUrl}/>
                <Card.Body>
                  <Card.Title>{course.name}</Card.Title>
                  <Card.Text>{course.description}</Card.Text>
                  <Button variant="primary">Assistir</Button>
                </Card.Body>
              </Card>
            </CardDeck>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
