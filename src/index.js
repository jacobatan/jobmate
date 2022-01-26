import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./components/Login";

ReactDOM.render(
  <BrowserRouter>
    <Routes>
      <Route path="login" element={<Login />} />
      <Route index element={<App />} />
    </Routes>
  </BrowserRouter>,
  document.getElementById("root")
);
