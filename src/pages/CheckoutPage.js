import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import { decrementCartItem, incrementCartItem, removeFromCart } from "../actions/cartActions";

export const CheckoutPage = () => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  return (
    <>
      <h1 className="text-uppercase my-5 text-center">
        Order <span className="text-warning">Summary</span>
      </h1>
      {cartItems.length ? (
        cartItems?.map((item) => (
          <Row className="align-items-center mb-5">
            <Col xs={5}>
              <img src={item.image} alt={item.title} height="100" />
            </Col>
            <Col xs={5}>
              <h2>{item.title}</h2>
            </Col>
            <Col className="d-flex justify-content-between align-items-center" xs={2}>
              <span onClick={() => dispatch(decrementCartItem(item))}>-</span><span>{item.qty}</span>
                <span onClick={() => {
                            item.qty === 1 ?
                           dispatch(removeFromCart(item.id)) :
                           dispatch(incrementCartItem(item))
                       }}>+</span>
            </Col>
            
          </Row>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </>
  );
};
