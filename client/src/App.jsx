import React, { useState } from "react";
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
import PrivateRoute from "./PrivateRoute";
import ChatScreen from "./screens/ChatScreen";

const App = () => {
  const [searchTerm, setSearchTerm] = useState(null);
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
          }
        >
          <Route
            path="/"
            element={
              <PrivateRoute>
                <HomeScreen searchTerm={searchTerm} />
              </PrivateRoute>
            }
          />

          <Route
            path="/messages"
            element={
              <PrivateRoute>
                <ChatScreen/>
              </PrivateRoute>
            }
          />
          <Route
            path="/adminProduct"
            element={
              <PrivateRoute>
                <AdminProductsPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/adminUsers"
            element={
              <PrivateRoute>
                <AdminUsersProduct />
              </PrivateRoute>
            }
          />
          <Route
            path="/profile"
            element={
              <PrivateRoute>
                <ProfilePage />
              </PrivateRoute>
            }
          />
          <Route
            path="/about"
            element={
              <PrivateRoute>
                <About />
              </PrivateRoute>
            }
          />
          <Route
            path="/contact"
            element={
              <PrivateRoute>
                <ContactForm />
              </PrivateRoute>
            }
          />
          <Route
            path="/adminPage"
            element={
              <PrivateRoute>
                <AdminPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/addProduct"
            element={
              <PrivateRoute>
                <ProductUploadPage />
              </PrivateRoute>
            }
          />
          <Route
            path="/product/:data"
            element={
              <PrivateRoute>
                <ProductDetailsScreen />
              </PrivateRoute>
            }
          />
        </Route>
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/register" element={<RegistrationScreen />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
