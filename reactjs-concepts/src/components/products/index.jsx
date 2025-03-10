import React from "react";
import ProductItem from "./components/product-item";

const dummyProductData = ["Product1", "Product2", "Product3"];

const ProductList = ({ name, city }) => {
   // const { name, city } = props;
  return (
    <div>
      <h3>ECommerce Project</h3>
      {/* <ProductItem /> */}

      <h4>Name is {name} and city is {city}</h4>
      <ul>
        {dummyProductData.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default ProductList;
