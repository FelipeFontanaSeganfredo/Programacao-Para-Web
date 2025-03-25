import { NavLink, Outlet } from "react-router-dom";
import { Navbar, Nav, Container } from "react-bootstrap";

const MenuPrivado = () => {
  return (
    <>
      <Navbar bg="dark" variant="dark" expand="lg">
        <Container>
          <Navbar.Brand href="/privado">Menu Privado</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/privado">Home</Nav.Link>
            <Nav.Link as={NavLink} to="/privado/usuario">Usuário</Nav.Link>
            <Nav.Link as={NavLink} to="/privado/inss">INSS</Nav.Link>
            <Nav.Link as={NavLink} to="/privado/login">Logout</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
      <Container className="mt-4">
        <Outlet />
      </Container>
    </>
  );
};

export default MenuPrivado;