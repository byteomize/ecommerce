import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import ShopCategory from "./Pages/ShopCategory";
import Product from "./Pages/Product";
import Cart from "./Pages/Cart";
import LoginSignup from "./Pages/LoginSignup";
import Footer from "./Components/Footer/Footer";
import men_banner from "./Components/assets/banner_mens.png";
import women_banner from "./Components/assets/banner_women.png";
import kids_banner from "./Components/assets/banner_kids.png";
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shop />}></Route>
          <Route
            path="/men"
            element={<ShopCategory category="men" banner={men_banner} />}
          ></Route>
          <Route
            path="/women"
            element={<ShopCategory category="women" banner={women_banner} />}
          ></Route>
          <Route
            path="/kid"
            element={<ShopCategory category="kid" banner={kids_banner} />}
          ></Route>
          <Route path="/product" element={<Product />}>
            <Route path=":productID" element={<Product />}></Route>
          </Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/login" element={<LoginSignup />}></Route>
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
