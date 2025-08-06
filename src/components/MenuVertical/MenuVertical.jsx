import "./MenuVertical.css";
import React from "react";
import { FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { SiGmail } from "react-icons/si";

function MenuVertical() {
  const botonescontact = [
    {
      nombre: "correo",
      icono: <SiGmail />,
      texto: "nalmanzar1310@",
      link: "https://mail.google.com/mail/u/0/#inbox?compose=new",
    },
    {
      nombre: "Linkedin",
      icono: <FaLinkedinIn />,
      texto: "Linkedin",
      link: "",
    },
       {
      nombre: "Linkedin",
      icono: <FaLinkedinIn />,
      texto: "Linkedin",
      link: "",
    },
  
  ];

    const botones = [
 
    {
      nombre: "cv",
      icono: <FaFilePdf />,
      texto: "Curriculum",
      link: "/Portafolio-Dev/RandyCVDev.pdf",
      descargar: true,
    },
      {
      nombre: "Linkedin",
      icono: <FaLinkedinIn />,
      texto: "Linkedin",
      link: "",
    },
  ];

  return (
    <>
      <aside className="aside-menu-verical">
        <div className="menu-vertical-contenedor">
          <img className="foto" src="/public/foto 2.jpg" alt="" />
          <h2 className="nombre">Shesterlyn Nicole</h2>
          <h3 className="nombre">Almanzar Almanzar</h3>
        </div>
        <section className="section-contacto">
          <h3>CONTACT</h3>
          {botonescontact.map((element) => (
            <button className="botones">{element.icono}{element.texto}</button>
          ))}
        </section>
         <section className="section-contacto">
          <h3>FORMATION</h3>
          {botones.map((element) => (
           <a href={element.link}><button className="botones">{element.icono}{element.texto}</button></a>
          ))}
        </section>
      </aside>
    </>
  );
}

export default MenuVertical;
