import React, { useEffect, useState } from "react";
import { slide as Menu } from "react-burger-menu";
import { Link, useLocation } from "react-router-dom";
import "./Burger.css";

export default function Burger() {
  const [menuOpen, setMenuOpen] = useState(false);
  const location = useLocation(); // Detecta cambio de ruta

  // Cierra el menú al cambiar de ruta
  useEffect(() => {
    setMenuOpen(false);
  }, [location]);

  const handleStateChange = (state) => {
    setMenuOpen(state.isOpen);
  };

  return (
    <>
      <Menu
        left
        isOpen={menuOpen}
        onStateChange={handleStateChange}
      >
        <Link to="/">Inicio</Link>
        <Link to="/el-parque">El parque</Link>
        <Link to="/que-hacemos">Qué hacemos</Link>
        <Link to="/galeria">Galería</Link>
        <Link to="/entradas">Entradas</Link>
        <Link to="/contacto">Contacto</Link>
      </Menu>
    </>
  );
}
