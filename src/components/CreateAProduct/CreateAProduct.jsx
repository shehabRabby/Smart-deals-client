import React from "react";
import { FaChevronCircleLeft } from "react-icons/fa";
import { Link } from "react-router";
import Swal from "sweetalert2";
import useAuth from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";

const CreateAProduct = () => {
  const { user } = useAuth(); //custom hook
  // const axiosInstance = useAxios();
  const axiosSecure = useAxiosSecure();

  const handleCreateAProduct = (e) => {
    e.preventDefault();
    const title = e.target.title.value;
    const image = e.target.image.value;
    const location = e.target.location.value;
    const condition = e.target.condition.value;
    const price_min = e.target.price_min.value;
    const price_max = e.target.price_max.value;

    const newProduct = {
      title,
      image,
      location,
      seller_name: user.displayName,
      condition,
      price_max,
      price_min,
      email: user.email,
    };

    // axios.post("http://localhost:3000/products", newProduct).then((data) => {
    //   if (data.data.insertedId) {
    //     Swal.fire({
    //       position: "center",
    //       icon: "success",
    //       title: "Your Product has been Created",
    //       showConfirmButton: false,
    //       timer: 1800,
    //     });
    //   }
    // });

    // axios instance here

    axiosSecure.post("/products", newProduct).then((data) => {
      if (data.data.insertedId) {
        Swal.fire({
          position: "center",
          icon: "success",
          title: "Your Product has been Created",
          showConfirmButton: false,
          timer: 1800,
        });
      }
    });
  };

  return (
    <div className="w-7xl mx-auto">
      <Link
        to="/myProducts"
        className="flex justify-center items-center gap-2 mt-5"
      >
        <FaChevronCircleLeft size={25} className="text-purple-700" />
        <h3 className="font-medium">Back to Products</h3>
      </Link>
      <h2 className="text-3xl font-bold text-center">
        Create <span className="text-purple-700">A Product</span>
      </h2>
      <div>
        <form onSubmit={handleCreateAProduct}>
          <fieldset className="fieldset">
            <label className="label">Product Name</label>
            <input
              type="text"
              name="title"
              className="input w-full"
              placeholder="Enter name"
            />
            <label className="label">Product Image</label>
            <input
              type="text"
              name="image"
              className="input w-full"
              placeholder="product image here"
            />
            <label className="label">Address</label>
            <input
              type="text"
              name="location"
              className="input w-full"
              placeholder="Enter location"
            />

            <label className="label">Product Condition</label>
            <input
              type="text"
              name="condition"
              className="input w-full"
              placeholder="Product condition"
            />
            <label className="label">Min Price</label>
            <input
              type="text"
              name="price_min"
              className="input w-full"
              placeholder="min price"
            />
            <label className="label">Max Price</label>
            <input
              type="text"
              name="price_max"
              className="input w-full"
              placeholder="max price"
            />

            <button className="btn btn-primary mt-1">Add Product</button>
          </fieldset>
        </form>
      </div>
    </div>
  );
};

export default CreateAProduct;
