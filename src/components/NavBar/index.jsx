import React, {useContext} from "react";
import {Link} from "react-router-dom";
import {Button, Form, FormControl, Nav, Navbar, NavDropdown,} from "react-bootstrap";

import {AuthContext} from "../../contexts/AuthContext";

import Logo from "../../assets/images/logo.png";

export default function NavBar() {
  const { handleLogout, logguedUser } = useContext(AuthContext)
  
  return (
    <Navbar expand="lg">
      <Navbar.Brand as={Link} to="/">
        <img
          src={Logo}
          height="30"
          alt="Pseudoflix"
          className="d-inline-block align-top"
        />
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link as={Link} to="/">
            Cursos
          </Nav.Link>
          <Nav.Link as={Link} to="/my-courses">
            Meus Cursos
          </Nav.Link>
        </Nav>
        <Form inline>
          <FormControl
            type="text"
            placeholder="Buscar cursos"
            className="mr-sm-2"
          />
          <Button variant="outline-success">Buscar</Button>
        </Form>
        <Nav className="mr-5 ml-4">
          <NavDropdown title={logguedUser.username} id="basic-nav-dropdown">
            <NavDropdown.Item href="#a1">Meu Perfil</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#logout" onClick={handleLogout}>Sair</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}
