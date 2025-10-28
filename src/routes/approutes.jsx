import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "../layout";
import Home from "../pages/home";

const AppRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Home />} />
          {/* Future pages can go here like About, Contact, etc. */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default AppRoutes;
