import React, {useEffect, useState} from "react";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";

import {findUserById} from "../../services/UserService";
import {findCourseById} from "../../services/CourseService";

export default function EnrolledCourses() {
  const [enrolledCourses, setEnrolledCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const {enrolledCourses} = await findUserById(1);

      const courses = await Promise.all(enrolledCourses.map(async ({course}) => {
        return await findCourseById(course.id);
      }));

      setEnrolledCourses(courses);
      //setLoading(false);
    })()
  }, []);

  return (
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
