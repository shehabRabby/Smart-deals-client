import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./components/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import AuthProvider from "./contexts/AuthProvider";
import Register from "./components/Register/Register";
import MyProducts from "./components/My Products/MyProducts";
import MyBids from "./components/MyBids/MyBids";
import ProductDetails from "./components/ProductDetails/ProductDetails";

const router = createBrowserRouter([
  {
    path: "/",
    Component: RootLayouts,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "allProducts",
        Component: AllProducts,
      },
      {
        path: "register",
        Component: Register,
      },
      {
        path: "myProducts",
        element: <MyProducts></MyProducts>,
      },
      {
        path: "myBids",
        element: <MyBids></MyBids>,
      },
      {
        path: "productDetails/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/products/${params.id}`),
        Component: ProductDetails,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </StrictMode>
);
