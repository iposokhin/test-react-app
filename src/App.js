import React from "react";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./styles.css";
import { Routes } from "./routes";

export default function App() {
  return (
    <div className="App">
      <Routes />
      <ToastContainer position="bottom-right" />
    </div>
  );
}
