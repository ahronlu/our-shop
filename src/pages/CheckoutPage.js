import { useSelector } from "react-redux";
import { Row, Col, Spinner } from "react-bootstrap";

export const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <h1 className="text-uppercase my-5 text-center">
        Order <span className="text-warning">Summary</span>
      </h1>
      {!cartItems.length ? (
        <Spinner animation="border" className="mx-auto" />
      ) : cartItems.length ? (
        cartItems?.map((item) => (
          <Row className="align-items-center mb-5">
            <Col xs={6} md={2}>
              <img src={item.image} alt={item.title} height="100" />
            </Col>
            <Col xs={6} md={2}>
              <h2>{item.title}</h2>
            </Col>
          </Row>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </>
  );
};
