import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({
  product: { image, title, description, price, category, id },
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
      <Link to={`/product/${id}`}>{category}</Link>
      <h2>{title.slice(0, 25)}</h2>
      <p className="description">{description.slice(0, 100)}...</p>
      <p>{price}$</p>
      <Button variant="warning">Add To Cart</Button>
    </Col>
  );
};
