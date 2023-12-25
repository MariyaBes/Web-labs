import React from "react";
import {Routes, Route, Outlet} from "react-router-dom";

const Products = () => {

    return (
        <div>
            <h2>Товары</h2>
            <Outlet />
        </div>
    );
};

export default Products;
