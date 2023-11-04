import React from "react";
import RegistrationScreen from "./screens/RegistrationScreen";
import LoginScreen from "./screens/LoginScreen";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import ProductDetailsScreen from "./screens/ProductDetailsScreen";
import ProductUploadPage from "./screens/ProductUploadPage";
import AdminPage from "./screens/AdminPage";
import Layout from "./Layout";
import ContactForm from "./screens/ContactForm";
import About from "./screens/About";
import ProfilePage from "./screens/ProfilePage";
import AdminProductsPage from "./screens/AdminProductsPage";
import AdminUsersProduct from "./screens/AdminUsersProduct";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/adminProduct" element={<AdminProductsPage />} />
          <Route path="/adminUsers" element={<AdminUsersProduct />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<ContactForm />} />
          <Route path="/adminPage" element={<AdminPage />} />
          <Route path="/addProduct" element={<ProductUploadPage />} />
          <Route path="/product/:data" element={<ProductDetailsScreen />} />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
