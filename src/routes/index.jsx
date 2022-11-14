import React from "react";
import { lazy } from "react";
import { Route, Routes } from "react-router-dom";
const Home = lazy(() => import("../pages/Home"));
const About = lazy(() => import("../pages/About"));
const Project = lazy(() => import("../pages/Projects"));
const Contact = lazy(() => import("../pages/Contact"));
const LandingPage = lazy(() => import("../pages"));

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />}>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
