import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { ProductCard } from "../components";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };

    getProducts();
  }, []);

  return (
    <Row>
      <h1 className="text-uppercase my-5 text-center">Latest Products</h1>
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : products.length ? (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>There are no products</h2>
      )}
    </Row>
  );
};
