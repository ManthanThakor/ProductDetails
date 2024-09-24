import "./App.css";
import Cart from "./components/Cart";
import Dashboard from "./components/Dashboard";
import Product from "./components/Product";

import {
  createBrowserRouter,
  Route,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import Layout from "./components/RootLayout/Layout";
import Home from "./components/Home";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="dashboard" element={<Dashboard />}></Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={router}></RouterProvider>
    </>
  );
}

export default App;
