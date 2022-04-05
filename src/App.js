import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import Proyectos from "./components/proyectos/Proyectos";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="nueva-cuenta" element={<NuevaCuenta />} />
        <Route path="proyectos" element={<Proyectos />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
