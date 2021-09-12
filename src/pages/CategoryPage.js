import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ProductCard } from "../components";

export const CategoryPage = (props) => {
  const { categoryName } = props.match.params;

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
      <h1 className="text-center text-capitalize my-5">{categoryName}</h1>
      {products
        .filter((p) => p.category === categoryName)
        .map((product) => (
          <ProductCard key={product.id} product={product} />
        ))}
    </Row>
  );
};
