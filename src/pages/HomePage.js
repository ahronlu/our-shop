import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ProductCard } from "../components";

export const HomePage = () => {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      fetch("https://api.jsonbin.io/b/5eba60b58284f36af7b9c829/1")
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    getProducts();
  }, []);

  return (
    <Row>
      <h1 className="text-uppercase my-5 text-center">Latest Products</h1>
      {products.length ? (
        products
          ?.slice(0, 4)
          .map((product) => <ProductCard key={product.id} product={product} />)
      ) : (
        <h2>There are no products</h2>
      )}
    </Row>
  );
};
