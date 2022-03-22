import React from "react"; 
import {Navbar, Container, Nav,NavDropdown} from "react-bootstrap"
import Cartwidgets from "./CartWidgets"

function navBar(){
    return(
<Navbar bg="light" expand="lg" className="contenedor-nav">
  <Container>
    <Navbar.Brand href="#home">THREE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="#home">Inicio</Nav.Link>
        <Nav.Link href="#link">Novedades</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">Personajes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.2">Moldes</NavDropdown.Item>
          <NavDropdown.Item href="#action/3.3">Adornos</NavDropdown.Item>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>  
    <Cartwidgets/>
  </Container>
</Navbar>
    )
}
export default navBar;

