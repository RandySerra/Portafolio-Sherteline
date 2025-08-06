import React from "react";
import "./Skill.css";
import {
  SiAdobeillustrator,
  SiAdobephotoshop,
  SiAdobeaftereffects,
  SiAdobepremierepro,
  SiFigma,
  SiDavinciresolve,
} from "react-icons/si";

import { FaUserEdit } from "react-icons/fa";

const skills = [
  { nombre: "Illustrator", logo: <SiAdobeillustrator /> },
  { nombre: "Photoshop", logo: <SiAdobephotoshop /> },
  { nombre: "After Effects", logo: <SiAdobeaftereffects /> },
  { nombre: "Premiere pro", logo: <SiAdobepremierepro /> },
  { nombre: "Figma", logo: <SiFigma /> },
   { nombre: "Davinci", logo: <SiDavinciresolve /> },

  
];

const CarruselSkill = () => {
  return (
    <>
      <div className="titulo" id="SkillS"><FaUserEdit /><h2 className="subtitulos">SKILLS</h2></div>
      
      <div className="carrusel-wrapper">
        <div className="carrusel iconos-carrusel">
          {[...skills].map((tec, index) => (
            <div className="carrusel-item" key={index}>
              <div className="icono">{tec.logo}</div>
              <p>{tec.nombre}</p>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default CarruselSkill;
