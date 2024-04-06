import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Error from "../pages/Error/Error"
import React from "react";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import Shop from "../pages/Shop/Shop";
import Cart from "../pages/ShoppingCart/ShoppingCart";

const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error />,
        children: [
            {
                path: "/",
                element: <Home />
            },
            {
                path: "/shop/:slug",
                element: <Product />
            },
            {
                path: "/shop",
                element: <Shop />
            },
            {
                path: "/cart",
                element: <Cart />
            }
        ]
    },
]);

export default router;