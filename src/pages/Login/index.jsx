/*import {useRef, useState} from "react";
import {Link, useHistory} from "react-router-dom";
import {Container, Col, Row, Alert, Button, Card, Form} from "react-bootstrap";
import Logo from "../../assets/images/logo.png";

export default function Login() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const [loading, setLoading] = useState(false);
  const [error, setErro] = useState("");
  const history = useHistory();
  
  const formSubmit = async (e) =>{
    e.preventDefault();
    
  };
  //FAZER IMPLEMENTAÇÃO COM O LOGIN
  return (
    <Container
      className="d-flex align-items-center  justify-content-center min-vw-100 min-vh-100 background fluid">
      <Row>
        <Col>
          <Card className="card-bg" text="white">
            <Card.Body>
              <div className="text-center mb-3">
                <img className="w-75" src={Logo} alt="Pseudoflix" />
              </div>
              <Form onSubmit={formSubmit} className="login-form">
                <Form.Group id="email">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" ref={emailRef} required />
                </Form.Group>
                <Form.Group id="password">
                  <Form.Label>Senha</Form.Label>
                  <Form.Control type="password" ref={passwordRef} required />
                </Form.Group>
                <Button disabled={loading} className="w-100" type="submit">
                  Entrar
                </Button>
              </Form>
              <div className="w-100 text-center mt-2">
                Você é novo aqui ?
                <Link to="/signup"> Cadastre-se</Link>
              </div>
            </Card.Body>
          </Card>
        </Col>
      </Row>
      
    </Container>
  )
}*/
