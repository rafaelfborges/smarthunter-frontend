import React from "react";
import {Container, Image, Spinner} from "react-bootstrap";

import Logo from "../../assets/images/logo.png";

export default function Loading({ onlySpinner }) {
    
  return (
    <Container
      className="d-flex flex-column align-items-center justify-content-center min-vw-100 min-vh-100"
      fluid
    >
      { 
        onlySpinner ? (
          <Spinner animation="border" variant="warning" className="mt-5"/>
        ) : (
          <>
            <Image src={Logo} className="logo-static"/>
            <Spinner animation="border" variant="warning" className="mt-5"/>
          </>
        )
      }
    </Container>
  );
}
