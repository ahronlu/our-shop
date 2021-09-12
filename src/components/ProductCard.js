import { Col, Button } from "react-bootstrap";

export const ProductCard = ({
  product: { image, title, description, price, category },
}) => {
  return (
    <Col
      className="d-flex flex-column align-items-center text-center"
      xs={12}
      md={3}
    >
      <img
        src={image}
        alt={title}
        height="200"
        width="auto"
        style={{ width: "auto" }}
      />
      <p>{category}</p>
      <h2>{title.slice(0, 25)}</h2>
      <p className="description">{description.slice(0, 100)}...</p>
      <p>{price}</p>
      <Button variant="warning">Add To Cart</Button>
    </Col>
  );
};
