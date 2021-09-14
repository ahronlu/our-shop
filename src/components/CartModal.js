import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { CLOSE_CART } from "../constants/cartConstants";
import { decrementCartItem, incrementCartItem, removeFromCart } from "../actions/cartActions";

export const CartModal = () => {
    const dispatch = useDispatch();

    const { cartItems, cartOpen } = useSelector((state) => state.cart);

    const handleClose = () => dispatch({ type: CLOSE_CART });
    
    return (
          <Modal show={cartOpen} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body>
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
                   <span onClick={() => {
                       item.qty === 1 ?
                       dispatch(removeFromCart(item.id)) :
                       dispatch(decrementCartItem(item))
                   }}>-</span>
                   <span>{item.qty}</span>
                   <span onClick={() => dispatch(incrementCartItem(item))}>+</span>
                 </Col>
                </Row>
               ))
             ) : (
              <h2>Your cart is empty</h2>
             )}
            </Modal.Body>

            <Modal.Footer>
              <p><b>Total:</b> {cartItems.reduce((acc, item) => acc + item.qty * item.price, 0).toFixed(2)}</p>
              <Link to="/checkout">
                <Button variant="warning">Checkout</Button>
              </Link>
            </Modal.Footer>
          </Modal>
  )
}
