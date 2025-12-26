import { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

function ProductList() {
  const [productList, setProductList] = useState([]);

  useEffect(() => {
    getDataFromDatabase();
  }, []);

  async function getDataFromDatabase() {
    const response = await fetch("http://localhost:3000/product/getAllProducts");
    const data = await response.json();
    setProductList(data);
  }

  return (
    <>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(260px, 1fr))",
          gap: "24px",
          maxWidth: "1300px",
          padding: "30px 20px",
          margin: "0 auto",
        }}
      >
        {productList.map((item, index) => (
          <ProductCard key={index} product={item} />
        ))}
      </div>
    </>
  );
}

export default ProductList;