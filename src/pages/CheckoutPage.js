import { useSelector } from "react-redux";
import { Row, Col } from "react-bootstrap";

export const CheckoutPage = () => {
  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <h1 className="text-uppercase my-5 text-center">
        Order <span className="text-warning">Summary</span>
      </h1>
      {cartItems.length ? (
        cartItems?.map((item) => (
          <Row className="align-items-center mb-5">
            <Col xs={5} md={2}>
              <img src={item.image} alt={item.title} height="100" />
            </Col>
            <Col xs={5} md={2}>
              <h2>{item.title}</h2>
            </Col>
            <Col xs={2} md={1}>
              <span>-</span><span>{item.qty}</span><span>+</span>
            </Col>
            
          </Row>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </>
  );
};
