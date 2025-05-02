import React from "react";
import "./App.css";
import {
  createBrowserRouter,
  createRoutesFromElements,
  Route,
  Router,
  RouterProvider,
} from "react-router-dom";
import LayOutOne from "./layouts/LayOutOne";
import Home from "./pages/Home";
import AllProduct from "./pages/AllProduct";

const App = () => {
  const myRouter = createBrowserRouter(
    createRoutesFromElements(
      <Route>
        <Route path="/" element={<LayOutOne />}>
          <Route index element ={<Home />}/>
          <Route path="/allProducts" element ={<AllProduct />}/>
        </Route>
      </Route>
    )
  );
  return (
    <>
      <RouterProvider router={myRouter} />
    </>
  );
};

export default App;
