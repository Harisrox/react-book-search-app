import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Pages from "./components/Pages";
import { BrowserRouter } from "react-router-dom";
import Footer from "./components/Footer";

function App() {
  return (
    <BrowserRouter>
      <div>
        <Navbar />
        <Pages />
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
