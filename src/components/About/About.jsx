import "./About.css";
import { IoPerson } from "react-icons/io5";

function About() {
  return (
    <div className="about">
      <div className="id">
        <h2>
          <IoPerson /> About me
        </h2>
        <div className="contenedor-about">
          <p>
            Hi! I’m Kokito, a passionate video editor, designer, and digital
            animator. I specialize in creating dynamic and creative visual
            content, blending technical skills with a personal artistic touch in
            every project I take on. I love exploring the world of editing and
            animation—crafting unique cuts, visual effects, and transitions that
            tell stories and evoke emotions. Every piece I create carries my
            personal style, always aiming to connect with the audience in an
            authentic way. I work with professional tools like After Effects,
            Premiere Pro, DaVinci Resolve, Adobe Audition, Illustrator, and
            Canva, which allow me to handle a wide range of audiovisual and
            graphic projects with efficiency and quality. I’m constantly growing
            and learning, fully committed to delivering creative, professional,
            and impactful results.
          </p>
          <img className="about-foto" src="/Logo-kokito.png" alt="Kokito logo" />
        </div>
      </div>
    </div>
  );
}

export default About;
