import React from "react"; 
import {Navbar, Container, Nav,NavDropdown} from "react-bootstrap"
import Cartwidgets from "./CartWidgets"

function navBar(){
    return(
<Navbar bg="light" expand="lg" className="contenedor-nav">
  <Container>
    <Navbar.Brand href="/">THREE</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link href="/">Inicio</Nav.Link>
        <Nav.Link href="/contacto">Contacto</Nav.Link>
        <NavDropdown title="Productos" id="basic-nav-dropdown">
        <Nav.Link href="/categoria/nezuko">NEZUKO</Nav.Link>
        <Nav.Link href="/categoria/sukuna">ZUKUNA</Nav.Link>
        <Nav.Link href="/categoria/adorno">ADORNO</Nav.Link>
        </NavDropdown>
      </Nav>
    </Navbar.Collapse>  
    <Cartwidgets/>
  </Container>
</Navbar> 
)
}
export default navBar;

