
import { Container, Nav } from 'react-bootstrap';
import { Telegram, Github } from 'react-bootstrap-icons';

const MyFooter = () => {
  return (
    <Container>
      <footer className="py-3 my-4">
        <p className="text-center nav-item nav-link px-2 text-body-secondary text-decoration-none text-reset fs-5">🦄 Idioma</p>
        <Nav className="justify-content-center pb-1 mb-1">
          <Nav.Item>
            <Nav.Link href="#" target="_blank" className="nav-link px-2 text-body-secondary text-decoration-none text-reset fs-5"><Telegram /></Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link href="#" target="_blank" className="nav-link px-2 text-body-secondary text-decoration-none text-reset fs-5"><Github /></Nav.Link>
          </Nav.Item>
        </Nav>
      </footer>
    </Container>
  );
};

export default MyFooter;