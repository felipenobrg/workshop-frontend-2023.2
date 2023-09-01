import { Routes, Route } from "react-router-dom";
import { Galeria } from "../pages/galeria";
import { Home } from "../pages/home";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />}>
        <Route path="/galeria" element={<Galeria />} />
      </Route>
    </Routes>
  );
};
