import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const location = useLocation();

  const links = [
    "home",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronics",
  ];

  return (
    <header className="border-bottom border-light">
      <Navbar bg="white" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {links.map((link) => (
                <Link
                  key={link}
                  to={`/${link === "home" ? "" : link}`}
                  className={`text-capitalize mx-3 ${
                    location.pathname === "/" + link ? "text-warning" : ""
                  }`}
                >
                  {link}
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
