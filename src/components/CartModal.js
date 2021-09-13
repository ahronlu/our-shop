import { useState } from "react";
import { Modal } from "react-bootstrap" ;

export const CartModal = () => {
    const [show, setShow] = useState(false);

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
