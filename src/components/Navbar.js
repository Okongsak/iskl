import React from "react";
import { Navbar, Container  } from "react-bootstrap";

const Navs = () => {
  return (
    <Navbar expand="lg">
      <Container>
        <Navbar.Brand href="/"><img src="/logo_sh.png" alt=""/></Navbar.Brand>
        <div className="right-logo">
            <img src="/ISKL_Logo.png" alt=""/>
        </div>
      </Container>
    </Navbar>
  );
};

export default Navs;