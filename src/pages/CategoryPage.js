import { useEffect, useState } from "react";
import { Row, Spinner } from "react-bootstrap";
import { ProductCard } from "../components";

export const CategoryPage = (props) => {
  const { categoryName } = props.match.params;

  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch(
        `https://fakestoreapi.com/products/category/${categoryName}`
      );
      const data = await res.json();
      setProducts(data);
      setLoading(false);
    };
    getProducts();
  }, [categoryName]);

  return (
    <Row>
      <h1 className="text-center text-capitalize my-5">{categoryName}</h1>
      {loading ? (
        <Spinner animation="border" className="mx-auto" />
      ) : (
        products.map((product) => (
          <ProductCard key={product.id} product={product} />
        ))
      )}
    </Row>
  );
};
