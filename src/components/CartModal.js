import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Col, Row } from "react-bootstrap";
import { closeCartModal } from "../actions/cartActions";

export const CartModal = () => {
    const dispatch = useDispatch();

    const { cartItems, cartOpen } = useSelector((state) => state.cart);

    const handleClose = () => dispatch(closeCartModal(false));
    
    return (
          <Modal show={cartOpen} onHide={handleClose}>
            <Modal.Header closeButton>
            </Modal.Header>

            <Modal.Body>
              {cartItems.length ? (
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
            </Modal.Body>

            <Modal.Footer>
              <p><b>Total:</b> 26.98%</p>
              <Button variant="primary">Checkout</Button>
            </Modal.Footer>
          </Modal>
  )
}
