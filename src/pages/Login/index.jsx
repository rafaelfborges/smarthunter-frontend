import {useContext, useRef, useState} from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { Alert, Button, Card, Form } from "react-bootstrap";

import history from "../../history";
import {AuthContext} from "../../contexts/AuthContext";

import Logo from "../../assets/images/logo.png";

export default function Login() {
  const { handleLogin } = useContext(AuthContext)
  const [error, setError] = useState("");
  const emailRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await handleLogin({
        email: emailRef.current.value,
        password: passwordRef.current.value  
      });

      if (response) {
        setError(response);
      } else {
        history.push("/");
      }
    } catch (error) {
      setError("Failed to log in");
      console.log(error.message);
    }
  };

  return (
    <Container
      className="d-flex align-items-center justify-content-center min-vw-100 min-vh-100 background"
      fluid
    >
      <Row>
        <Col>
          <Card className="card-bg">
            <Card.Body>
              <div className="text-center mb-3">
                <img className="w-75" src={Logo} alt="Pseudoflix" />
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit} className="login-form">
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" className="form-control" ref={passwordRef} required />
                </Form.Group>
                <Button className="w-100" type="submit">
                  Entrar
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                <Link to="/forgot-password">Esqueceu a senha?</Link>
              </div>
              <div className="w-100 text-center mt-2">
                Você é novo aqui?
                <Link to="/signup"> Cadastre-se</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}