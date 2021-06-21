import React, {useEffect, useState} from "react";
import { Link } from "react-router-dom";
import {Button, Card, CardDeck, Col, Container, Row} from "react-bootstrap";

import Loading from "../../components/Loading"

import {findAllCourses} from "../../services/CourseService";

export default function Courses() {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  
  useEffect(() => {
    (async () => {
      const {content: courses} = await findAllCourses();
      setCourses(courses);
      setLoading(false);
    })()
  }, []);
  
  return loading ? (
    <Loading onlySpinner={true} />
  ) : (
    <>
      <Container className="mt-2 mb-2">
        <Row>
          {courses.map((course) => (
            <Col key={course.id} className="mt-2 mb-2 ml-2 card-course">
              <CardDeck>
                <Card as={Link} to={`/course/${course.id}`} key={course.id} className="card-course">
                  <Card.Img className="card-image" variant="top" src={course.thumbUrl}/>
                  <Card.Body>
                    <Card.Title>{course.name}</Card.Title>
                    <Card.Text>{course.description}</Card.Text>
                    <Button variant="success">Assistir</Button>
                    <Button variant="primary">Matricular</Button>
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
