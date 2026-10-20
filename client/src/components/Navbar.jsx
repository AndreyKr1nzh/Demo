import { Link, NavLink } from 'react-router-dom';
import { Container, Nav, Navbar as BSNavbar, Button } from 'react-bootstrap';
import logo from '../assets/logo.png';

export default function Navbar() {
  return (
    <BSNavbar bg="light" expand="lg">
      <Container fluid>
        <BSNavbar.Brand as={Link} to="/" className="d-flex align-items-center gap-2">
          <img
            src={logo}
            alt="Logo"
            width="40"
            height="40"
            className="rounded-circle"
          />
          <span className="fw-bold">Читатель</span>
        </BSNavbar.Brand>

        <BSNavbar.Toggle aria-controls="main-nav" />

        <BSNavbar.Collapse id="main-nav">
          {/* Ссылки на страницы */}
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/" end>
              Главная
            </Nav.Link>
            <Nav.Link as={NavLink} to="/catalog">
              Каталог
            </Nav.Link>
            <Nav.Link as={NavLink} to="/contacts">
              Контакты
            </Nav.Link>
          </Nav>

          {/* Кнопки авторизации */}
          <div className="d-flex gap-2">
            <Button variant="outline-primary">Войти</Button>
            <Button variant="primary">Регистрация</Button>
          </div>
        </BSNavbar.Collapse>
      </Container>
    </BSNavbar>
  );
}