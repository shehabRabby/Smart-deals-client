import React from "react";

const HomeHero = () => {
  return (
    <div className="relative p-2 py-8 w-full flex flex-col items-center justify-center space-y-6 px-6 md:px-20 text-center  bg-gradient-to-t from-[#7368d698] via-[#63aae456] to-[#29a3d32d]">
      <h1 className="text-3xl md:text-5xl font-extrabold leading-snug text-gray-900">
        Deal Your <span className="text-purple-700">Products</span>
        <br />
        in a <span className="text-purple-700">Smart</span> way!
      </h1>

      {/* Subtitle */}
      <p className="text-sm md:text-base text-gray-600 ">
        SmartDeals helps you sell, resell, and shop from trusted local sellers —
        all in one place!
      </p>

      {/* Search Bar */}
      <div className="flex flex-col md:flex-row w-1/3">
        <input
          type="text"
          placeholder="Search For Products, Categories..."
          className="bg-white shadow-2xl  flex-1 rounded-l-3xl rounded-r-3xl md:rounded-r-none px-4 py-2 text-purple-700 focus:ring-1 focus:ring-purple-400 focus:outline-none"
        />
        <button className="mt-2 lg:mt-0 btn-primary cursor-pointer rounded-l-3xl lg:rounded-l-none px-5 py-2 rounded-r-3xl ">
          Search
        </button>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col md:flex-row gap-3 mt-2">
        <button className="btn btn-primary py-2  shadow-md hover:shadow-lg transition">
          Watch All Products
        </button>
        <button className="btn btn-outline border-purple-700 py-2 text-purple-700 shadow-md hover:shadow-lg transition">
          Post a Products
        </button>
      </div>
    </div>
  );
};

export default HomeHero;
