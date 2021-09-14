import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { CLOSE_CART } from "../constants/cartConstants";
import {
  decrementCartItem,
  incrementCartItem,
  removeFromCart,
} from "../actions/cartActions";

export const CartModal = () => {
  const dispatch = useDispatch();

  const { cartItems, cartOpen } = useSelector((state) => state.cart);

  const handleClose = () => dispatch({ type: CLOSE_CART });

  return (
    <Modal show={cartOpen} onHide={handleClose}>
      <Modal.Header closeButton></Modal.Header>
      <Modal.Body>
        {cartItems.length ? (
          cartItems?.map((item) => (
            <Row className="align-items-center text-center">
              <Col xs={3}>
                <img src={item.image} alt={item.title} height="100" />
              </Col>
              <Col xs={6} md={7}>
                <h2>{item.title}</h2>
              </Col>
              <Col xs={3} md={2}>
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
          ))
        ) : (
          <h2>Your cart is empty</h2>
        )}
      </Modal.Body>

      <Modal.Footer>
        <h2>
          <b>Total:</b> $
          {cartItems
            .reduce((acc, item) => acc + item.qty * item.price, 0)
            .toFixed(2)}
        </h2>
        <Link to="/checkout">
          <Button
            onClick={() => dispatch({ type: CLOSE_CART })}
            variant="warning"
          >
            Checkout
          </Button>
        </Link>
      </Modal.Footer>
    </Modal>
  );
};
