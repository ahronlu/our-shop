import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";
import { Container, Nav, Navbar } from "react-bootstrap";

export const Header = () => {
  const location = useLocation();

  const { cartItems } = useSelector((state) => state.cart);

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
          <Navbar.Collapse id="basic-navbar-nav" className="order-sm-3">
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
          <Link to="/cart" className="mb-0 order-sm-2">
            Cart({cartItems.length})
          </Link>
        </Container>
      </Navbar>
    </header>
  );
};
