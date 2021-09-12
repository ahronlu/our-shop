import { useEffect, useState } from "react";

export const ProductPage = ({ params }) => {
  const [prodcuts, setProdcuts] = useState([]);
  useEffect(() => {
    const getProducts = async () => {
      const res = await fetch("https://fakestoreapi.com/products?limit=4");
      const data = await res.json();
      setProdcuts(data);
    };
    getProducts();
  }, []);

  console.log(prodcuts);

  return <></>;
};
