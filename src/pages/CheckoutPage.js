import { useSelector, useDispatch } from "react-redux";
import { Row, Col } from "react-bootstrap";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../actions/cartActions";
import PayPalButton from "../components/PaypalButton";

export const CheckoutPage = ({ history }) => {
  const dispatch = useDispatch();

  const { cartItems } = useSelector((state) => state.cart);

  const cartTotal = cartItems
    .reduce((acc, item) => acc + item.qty * item.price, 0)
    .toFixed(2);

  return (
    <>
      <h1 className="text-uppercase my-5 text-center">
        Order <span className="text-warning">Summary</span>
      </h1>
      {cartItems.length ? (
        cartItems?.map((item) => (
          <>
            <Row className="align-items-center mb-5 text-center">
              <Col xs={3}>
                <img src={item.image} alt={item.title} height="100" />
              </Col>
              <Col xs={6}>
                <h2>{item.title}</h2>
              </Col>
              <Col xs={3}>
                <i
                  class="bi bi-dash"
                  style={{ cursor: "pointer" }}
                  onClick={() => {
                    item.qty === 1
                      ? dispatch(removeFromCart(item.product))
                      : dispatch(decrementCartItem(item));
                  }}
                ></i>
                <span>{item.qty}</span>
                <i
                  class="bi bi-plus"
                  style={{ cursor: "pointer" }}
                  onClick={() => dispatch(incrementCartItem(item))}
                ></i>
              </Col>
            </Row>
            <Row>
              <Col className="text-center" xs={12}>
                <h2>
                  <b>Total:</b> ${cartTotal}
                </h2>
                <PayPalButton
                  total={cartTotal}
                  // clearCart={clearCart}
                  history={history}
                />
              </Col>
            </Row>
          </>
        ))
      ) : (
        <h2>Your cart is empty</h2>
      )}
    </>
  );
};
