import {useContext, useEffect, useRef, useState} from "react";
import { Link } from "react-router-dom";
import { Container, Col, Row } from "react-bootstrap";
import { Alert, Button, Card, Form } from "react-bootstrap";

import history from "../../history";

import { createUser } from "../../services/UserService";

import Logo from "../../assets/images/logo.png";
import {AuthContext} from "../../contexts/AuthContext";

export default function Register() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmRef = useRef();

  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const { authenticated } = useContext(AuthContext)

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (passwordRef.current.value !== passwordConfirmRef.current.value) {
      return setError("Senhas não conferem");
    }

    try {
      setLoading(true);
      const response = await createUser({
          name: nameRef.current.value,
          email: emailRef.current.value,
          password: passwordRef.current.value
      });
      
      if (response) {
        alert("Usuário cadastro com sucesso!");
        history.push("/login");
      } else {
        setError("Erro ao cadastrar o usuário!");
        setLoading(false);
      }
    } catch {
      setError("Falha ao criar a conta");
    }
  };

  useEffect(() => {
    if(authenticated) {
      history.push("/")
    }
  }, [authenticated]);

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
                <img className="w-75" src={Logo} alt="Smarthunter" />
              </div>
              {error && <Alert variant="danger">{error}</Alert>}
              <Form onSubmit={handleSubmit}>
                <Form.Group id="name">
                  <Form.Label>Name</Form.Label>
                  <Form.Control type="text" ref={nameRef} autoComplete="off" required/>
                </Form.Group>
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} autoComplete="off" required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" ref={passwordRef} autoComplete="off" required />
                </Form.Group>
                <Form.Group id="password-confirm">
                  <Form.Label>Confirmação senha</Form.Label>
                  <Form.Control
                    type="password"
                    ref={passwordConfirmRef}
                    autoComplete="off"
                    required
                  />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Cadastrar
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Já possuí uma conta? <Link to="/login">Login</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </Container>
  );
}