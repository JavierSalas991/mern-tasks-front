import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Proyectos from "./components/proyectos/Proyectos";
import Login from "./components/auth/Login";
import NuevaCuenta from "./components/auth/NuevaCuenta";
import ProyectoState from "./context/proyectos/proyectoState";
import TareaState from "./context/tareas/tareaState";

function App() {
  return (
    <TareaState>
      <ProyectoState>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="nueva-cuenta" element={<NuevaCuenta />} />
            <Route path="proyectos" element={<Proyectos />} />
          </Routes>
        </BrowserRouter>
      </ProyectoState>
    </TareaState>
  );
}

export default App;
