import React, { use } from "react";
import Product from "../Product/Product";

const LatestProduct = ({ latestProductsPromise }) => {
  const products = use(latestProductsPromise);
    // console.log(products);
  return (
    <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl md:text-5xl font-bold text-center my-5 mt-10">Recent <span className="text-purple-700">Products</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product key={product._id} product={product}></Product>
        ))}
      </div>
    </div>
  );
};

export default LatestProduct;
