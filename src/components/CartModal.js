import { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { Modal, Button } from "react-bootstrap" ;
import { useSelector } from "react-redux";

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
              <p>Modal body text goes here.</p>
            </Modal.Body>

            <Modal.Footer>
              <p><b>Total:</b> 26.98%</p>
              <Button variant="primary">Checkout</Button>
            </Modal.Footer>
          </Modal>
  )
}
