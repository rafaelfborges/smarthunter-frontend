import React, {useEffect, useState} from "react";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";

import {findAllCourses} from "../../services/CourseService";

export default function Courses() {
  const [courses, setCourses] = useState([]);

  useEffect(() => {
    (async () => {
      const {content: courses} = await findAllCourses();
      setCourses(courses);
      //setLoading(false);
    })()
  }, []);

  return (
    <Container className="mt-2 mb-2">
      <Row>
        {courses.map((course) => (
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
