import React from "react";
import { Route, Routes } from "react-router-dom";
import { ProtectedRoutes } from "../components/ProtectedRoutes";
import HomePage from "../pages/HomePage";
import LoginPage from "../pages/LoginPage";
import RegisterContactPage from "../pages/RegisterContactPage";
import RegisterPage from "../pages/RegisterPage";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />

      <Route path="home" element={<ProtectedRoutes />}>
        <Route index element={<HomePage />} />
      </Route>

      <Route path="contacts" element={<ProtectedRoutes />}>
        <Route index element={<RegisterContactPage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
