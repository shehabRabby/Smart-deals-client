import React, { Suspense } from "react";
import LatestProduct from "../LatestProducts/LatestProduct";
import HomeHero from "./HomeHero";
//promise
const latestProductsPromise = fetch(
  "http://localhost:3000/latest-products"
).then((res) => res.json());

const Home = () => {
  return (
    <div>
      <HomeHero></HomeHero>

      <Suspense fallback={<p className="text-center">Loading products...</p>}>
        <LatestProduct latestProductsPromise={latestProductsPromise} />
      </Suspense>
    </div>
  );
};

export default Home;
