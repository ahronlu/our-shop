import { Link } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { CLOSE_CART } from "../constants/cartConstants";

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
                  <Col xs={5} md={2}>
                    <img src={item.image} alt={item.title} height="100" />
                  </Col>
                 <Col xs={5} md={2}>
                   <h2>{item.title}</h2>
                 </Col>
                 <Col xs={2} md={2}>
                   <span>-</span><span>{item.qty}</span><span>+</span>
                 </Col>
                </Row>
               ))
             ) : (
              <h2>Your cart is empty</h2>
             )}
            </Modal.Body>

            <Modal.Footer>
              <p><b>Total:</b> 26.98%</p>
              <Link to="/checkout">
                <Button variant="primary">Checkout</Button>
              </Link>
            </Modal.Footer>
          </Modal>
  )
}
