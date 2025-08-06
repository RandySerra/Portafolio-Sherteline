import React, { useEffect, useState } from "react";
import "./MenuHorizontal.css";

function MenuHorizontal() {
  const [fijo, setFijo] = useState(false);
  const [mostrar, setMostrar] = useState(false);

  useEffect(() => {
    // Activar animación un poquito después de montar el componente
    const timeout = setTimeout(() => setMostrar(true), 100);

    const handleScroll = () => {
      setFijo(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      clearTimeout(timeout);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const items = [
    { nombre: "Home", enlace: "#home" },
    { nombre: "About", enlace: "#about" },
    { nombre: "Skill", enlace: "#Skill" },
    { nombre: "Project", enlace: "#Project" },
  ];

  return (
    <nav
      className={`menu-horizontal-contenedor ${fijo ? "fixed" : ""} ${
        mostrar ? "aparecer" : ""
      }`}
    >
      <ul className="menu-lista">
        {items.map((item, index) => (
          <li className="li" key={index}>
            <a href={item.enlace}>{item.nombre}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default MenuHorizontal;
