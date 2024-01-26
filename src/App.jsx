import React, { useState } from "react";
import { Route, Routes, useNavigate } from "react-router-dom";
import { Home, ProductDetail } from "./components/pages";
import { Nav } from "./components/ui";
import Footer from "./components/ui/Footer.ui";

const App = () => {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/productDetail/:id" element={<ProductDetail />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;
