import React, {useEffect, useState} from 'react';
import {useParams} from 'react-router-dom';

import {findCourseById} from "../../services/CourseService";
import {Card, Col, Container, ListGroup, Row} from "react-bootstrap";
import Loading from "../../components/Loading";

export default function Course() {
  const [course, setCourses] = useState({});
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [urlVideo, setUrlVideo] = useState("");
  
  const { id } = useParams();

  const handleUrlVideo = (url) => {
    setUrlVideo(url)
  };

  useEffect(() => {
    findCourseById(id).then((course) => {
      const { lessons } = course;
      const firstUrlVideo = lessons[0].activities[0].urlVideo;
      setCourses(course);
      setLessons(lessons);
      
      if(!urlVideo) {
        setUrlVideo(firstUrlVideo);
      }
      
      setLoading(false);
    })
  }, [id, urlVideo]);
  
  
  return loading ? (
    <Loading onlySpinner={true} />
  ) : (
    <Container className="mt-4 mb-4">
      <div>
        <h1>{course.name}</h1>
      </div>
      <Row>
        <Col md={8}>
          <Card>
            <Card.Body>
              <div className="embed-responsive embed-responsive-16by9">
                <iframe
                  title={course.name}
                  className="embed-responsive-item"
                  width="100%"
                  height="315"
                  src={!!urlVideo && urlVideo.replace("watch?v=", "embed/")}
                  frameBorder="0"
                  allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
            </Card.Body>
          </Card>
        </Col>
        <Col md={4}>
          <Card>
            <Card.Body>
              {lessons.map(({id: lessonId, name: lessonName, activities: lessonActivities}) => (
                <div key={lessonId}>
                  <h3>{lessonName}</h3>
                  <ListGroup as="ul" variant="flush">
                    {
                      lessonActivities.map(({id: activityId, title, urlVideo}) => (
                      <ListGroup.Item 
                        className="list-course" 
                        as="li" key={activityId} 
                        onClick={() => handleUrlVideo(urlVideo)} 
                        action
                      >
                        {title}
                      </ListGroup.Item>
                    ))}
                  </ListGroup>
                </div>
              ))}
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}