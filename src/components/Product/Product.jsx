import React, { use } from "react";
import { Link } from "react-router";

const Product = ({ product }) => {
  const {_id,title, price_min, price_max,image } = product;
  return (
    <div className="card bg-base-100 shadow-sm">
      <figure className="px-4 pt-4">
        <img
          src={image}
          alt="Shoes"
          className="rounded-xl h-56"
        />
      </figure>
      <div className="card-body">
        <span className="text-center bg-purple-100 w-[70px] rounded-3xl p-1 text-purple-800">on sale</span>
        <h2 className=" card-title text-purple-600">{title}</h2>
        <p className="font-medium">${price_min}-${price_max}</p>
        <div className="card-actions">
          <Link to={`/productDetails/${_id}`} className="btn btn-primary w-full">View Details</Link>
        </div>
      </div>
    </div>
  );
};

export default Product;
