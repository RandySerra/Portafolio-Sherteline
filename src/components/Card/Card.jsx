import "./Card.css";
import { AiFillPicture } from "react-icons/ai";
function Card() {
  const proyectos = [
    {
      titulo: "Proyecto",
      imagen: "./public/AsianGirls.jpg",
      descripcion: "Este es un ejemplo de descripción.",
      link: "https://example.com",
      ver: "Ver proyecto",
    },
    {
      titulo: "Segundo Proyecto",
      imagen: "./public/anya.jpg",
      descripcion: "Otro ejemplo de tarjeta.",
      link: "#",
      ver: "Explorar",
    },
    {
      titulo: "Segundo Proyecto",
      imagen: "./public/japon.jpg",
      descripcion: "Otro ejemplo de tarjeta.",
      link: "#",
      ver: "Explorar",
    },
    {
      titulo: "Segundo Proyecto",
      imagen: "./public/china.jpg",
      descripcion: "Otro ejemplo de tarjeta.",
      link: "#",
      ver: "Explorar",
    },
    {
      titulo: "Segundo Proyecto",
      imagen: "./public/domi.jpg",
      descripcion: "Otro ejemplo de tarjeta.",
      link: "#",
      ver: "Explorar",
    },
    {
      titulo: "Segundo Proyecto",
      imagen: "./public/AsianGirls.jpg",
      descripcion: "Otro ejemplo de tarjeta.",
      link: "#",
      ver: "Explorar",
    },
  ];

  return (
    <>
      <div id="proyect" className="titulo">
        {" "}
        <AiFillPicture />
        <h2 className="subtitulos">PROJETS</h2>
      </div>

      <div className="proyectos-container">
        {proyectos.map((proyecto, index) => (
          <div className="proyecto-card" key={index}>
            <div className="proyecto-container-img">
              <img
                className="proyectos-img"
                src={proyecto.imagen}
                alt={proyecto.titulo}
              />
            </div>
            <h3>{proyecto.titulo}</h3>
            <p>{proyecto.descripcion}</p>
            <div className="proyecto-alinear-botones">
              <a href={proyecto.link} target="_blank" rel="noopener noreferrer">
                <button className="botones-iconos">{proyecto.ver}</button>
              </a>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default Card;
