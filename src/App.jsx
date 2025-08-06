import "./App.css";

import MenuHorizontal from "./components/MenuHorizontal/MenuHorizontal";
import MenuVertical from "./components/menuvertical/menuvertical";
import Banner from "./components/Banner/Banner";
import About from "./components/About/About";
import Card from "./components/Card/Card";
import Project from "./components/project/project";
import CarruselSkill from "./components/Skill/Skill";

function App() {
  return (
    <div className="layout">
      <MenuVertical />
      <div className="main-content">
        <MenuHorizontal />
        <Banner></Banner>
        <div className="contenido">
          <h1>¡Welcome to my portfolio!</h1>
          <div className="contenido-principal">
            <About></About>
            <CarruselSkill></CarruselSkill>
            <Card></Card>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
