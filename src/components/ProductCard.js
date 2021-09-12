import { Col, Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export const ProductCard = ({
  product: { image, title, description, price, category, id },
}) => {
  return (
    <Col
      className="d-flex flex-column align-items-center text-center mb-5"
      xs={12}
      md={3}
    >
      <img
        src={image}
        alt={title}
        height="200px"
        width="auto"
        style={{ width: "auto" }}
      />
      <Link to={`/${category}`}>{category}</Link>
      <Link to={`/product/${id}`}>
        <h2>{title.slice(0, 25)}</h2>
      </Link>
      <p className="description">{description.slice(0, 100)}...</p>
      <p>{price}$</p>
      <Button variant="warning">Add To Cart</Button>
    </Col>
  );
};
