import React from "react";
import "./assets/style.css"; 
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import OrderForm from "./components/OrderForm";
import AdminLogin from "./components/AdminLogin";
import ProductCatalog from "./components/ProductCatalog";

function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/order" element={<OrderForm />} />
        <Route path="/admin" element={<AdminLogin />} />
        <Route path="/catalog" element={<ProductCatalog />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
