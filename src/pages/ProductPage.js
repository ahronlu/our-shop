import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Button, Spinner } from "react-bootstrap";

export const ProductPage = ({ match }) => {
  const { productId } = match.params;

  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProduct = async () => {
      const res = await fetch(`https://fakestoreapi.com/products/${productId}`);
      const data = await res.json();
      setProduct(data);
      setLoading(false);
    };
    getProduct();
  }, []);

  return (
    <Row className="align-items-center">
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : (
        <>
          <Link to={`/${product.category}`}>Back to {product.category}</Link>
          <Col xs={12} md={6}>
            <img src={product.image} alt={product.title} />
          </Col>
          <Col xs={12} md={6}>
            <h1>{product.title}</h1>
            <Link
              className="text-uppercase text-muted"
              to={`/${product.category}`}
            >
              {product.category}
            </Link>
            <p className="description text-muted">{product.description}</p>
            <h2 className="text-bold mb-4">{product.price}$</h2>
            <Button variant="warning">Add To Cart</Button>
          </Col>
        </>
      )}
    </Row>
  );
};
