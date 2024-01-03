import { Navbar, Container, Nav, Button } from 'react-bootstrap';

const MyNavbar = () => {
  return (
    <Navbar expand="lg" style={{ backgroundColor: '#A356CC' }}>
      <Container>
        <Navbar.Brand href="/" className="fs-4 nav-link">
          <div className="fs-2 me-2">🦄&nbsp;&nbsp;Idioma</div>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarSupportedContent" />
        <Navbar.Collapse id="navbarSupportedContent">
          <Nav className="mb-2 mb-lg-0">
            <Nav.Link href="/" className="nav-link fs-4">
              Texts
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fs-4">
              Tasks
            </Nav.Link>
            <Nav.Link href="#" className="nav-link fs-4">
              Profile
            </Nav.Link>
          </Nav>
          <Button variant="outline-dark fs-5" href="#" role="button">
            Log in
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default MyNavbar;
