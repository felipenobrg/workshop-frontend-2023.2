import { Routes, Route } from "react-router-dom";
import { Galeria } from "../pages/galeria";
import { Home } from "../pages/home";
import { Planetas } from "../pages/galeria/components/pages/planetas";
import { Especies } from "../pages/galeria/components/pages/especies";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/galeria/pessoas" element={<Galeria />} />
      <Route path="/galeria/planetas" element={<Planetas />} />
      <Route path="/galeria/especies" element={<Especies />} />
    </Routes>
  );
};
