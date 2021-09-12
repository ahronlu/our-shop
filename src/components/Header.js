import { Link, useLocation } from "react-router-dom";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const location = useLocation();
  console.log(location);

  const links = [
    "home",
    "men's clothing",
    "women's clothing",
    "jewelery",
    "electronic",
  ];

  return (
    <header>
      <Navbar bg="white" expand="lg">
        <Container>
          <Link to="/">
            <Navbar.Brand>Shop</Navbar.Brand>
          </Link>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mx-auto">
              {links.map((link) => (
                <Link to={`/${link === "home" ? "" : link}`}>
                  <Nav.Link
                    className={`text-capitalize ${
                      location.pathname === "/" + link ? "text-warning" : ""
                    }`}
                  >
                    {link}
                  </Nav.Link>
                </Link>
              ))}
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </header>
  );
};
