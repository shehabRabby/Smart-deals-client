import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter } from "react-router";
import { RouterProvider } from "react-router/dom";
import RootLayouts from "./layouts/RootLayouts";
import Home from "./components/Home/Home";
import AllProducts from "./components/AllProducts/AllProducts";
import AuthProvider from "./contexts/AuthProvider";

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
        path:'/allProducts',
        Component: AllProducts
      },
      {

      }
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
