import React from "react";
import "./App.css";
import Home from "./pages/Home";
import LogInPage from "./pages/LoginPage";
import SignUpPage from "./pages/SignUpPage";

import { createRoot } from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
  Route,
  Link,
} from "react-router-dom";
import Cart from "./features/cart/Cart";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Home></Home>
  },
  {
    path: "/login",
    element: <LogInPage></LogInPage>,
  },
  {
    path: "/signup",
    element: <SignUpPage></SignUpPage>
  },
  {
    path: "/cart",
    element: <Cart></Cart>
  },
]);

function App() {
  return (
    <div className="App">
     <RouterProvider router={router} />
    </div>
  );
}

export default App;
