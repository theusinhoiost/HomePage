//IMPORTS
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
//JSX Files
import Home from "./assets/Home/Home.jsx";
import Portfolio from "./assets/Portfolio/Portfolio.jsx";
import Contact from "./assets/Contact/Contact.jsx";
//BOOTSTRAP
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';



createRoot(document.getElementById("root")).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/HomePage" element={<Home/>}></Route>
        <Route path="/portfolio" element={<Portfolio/>}></Route>
        <Route path="/contact" element={<Contact/>}></Route>
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
