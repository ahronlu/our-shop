import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ProductCard } from "../components";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = () => {
      fetch("https://fakestoreapi.com/products?limit=4")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    getProducts();
  }, []);

  return (
    <Row>
      <h1 className="text-uppercase my-5 text-center">Latest Products</h1>
      {products.length ? (
        products?.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      ) : (
        <h2>There are no products</h2>
      )}
    </Row>
  );
};
