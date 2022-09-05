import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import AddData from "./routes/addData";
import List from "./routes/list";
import LaptopInfo from "./routes/laptopinfo";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/List" element={<List />} />
        <Route path="/addData" element={<AddData />} />
        <Route path="/LaptopInfo/:id" element={<LaptopInfo />} />
        <Route
          path="*"
          element={
            <main style={{ padding: "1rem" }}>
              <p>ასეთი გვერდი არ არსებობს!</p>
            </main>
          }
        />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>
);
