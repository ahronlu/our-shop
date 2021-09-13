import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button, Col, Row } from "react-bootstrap" ;

export const CartModal = () => {
    const [show, setShow] = useState(false);

    const { cartItems } = useSelector((state) => state.cart);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
  
    return (
          <Modal show={show} onHide={handleClose}>
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
