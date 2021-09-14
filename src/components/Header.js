import { Link, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Button, Container, Nav, Navbar } from "react-bootstrap";
import { OPEN_CART } from "../constants/cartConstants";

export const Header = () => {
  const location = useLocation();

  const dispatch = useDispatch();

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
          <Navbar.Toggle aria-controls="basic-navbar-nav" className="order-3" />
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
          <Button
            variant="white"
            onClick={() => dispatch({ type: OPEN_CART })}
            className="mb-0 mx-3 p-0 order-2"
          >
            Cart(
            {cartItems.reduce((acc, item) => acc + item.qty, 0)})
          </Button>
        </Container>
      </Navbar>
    </header>
  );
};
