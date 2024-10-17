import React from "react";
import Home from "./pages/Home";
import Renders from "./pages/Renders";
import { Route, Routes } from "react-router-dom";
import Wallpapers from "./pages/Wallpapers";
import Animals from "./pages/Animals";
import Film from "./pages/Film";

const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/render" element={<Renders />} />
        <Route path="/wallpapers" element={<Wallpapers />} />
        <Route path="/animals" element={<Animals />} />
        <Route path="/film" element={<Film />} />
      </Routes>
    </div>
  );
};

export default App;
