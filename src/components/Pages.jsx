import React from "react";
import { Route, Routes } from "react-router-dom";
import Genre from "./Genre";
import Search from "./Search";
import Name from "./Name";
import Home from "./Home";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/genre" element={<Genre />} />
      <Route path="/:name" element={<Name />} />
      <Route path="/genre/:name" element={<Search />} />
    </Routes>
  );
};

export default Pages;
