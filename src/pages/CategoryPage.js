import { useEffect, useState } from "react";
import { Row } from "react-bootstrap";
import { ProductCard } from "../components";

export const CategoryPage = (props) => {
  const { categoryName } = props.match.params;

  const [products, setProducts] = useState([]);
  useEffect(() => {
    const getProducts = () => {
      fetch(`https://fakestoreapi.com/products/category/${categoryName}`)
        .then((res) => res.json())
        .then((json) => setProducts(json));
    };
    getProducts();
  }, []);

  return (
    <Row>
      <h1 className="text-center text-capitalize my-5">{categoryName}</h1>
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </Row>
  );
};
