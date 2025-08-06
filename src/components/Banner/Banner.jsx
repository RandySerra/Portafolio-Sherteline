import "./Banner.css";
import React from "react";

function Banner() {
  return (
    <>
      <div className="banner">
        {" "}
        <div className="foto-banner-contenedor">
          <img className="foto-banner"src="/public/banner.png" alt="" />
        </div>
      </div>
    </>
  );
}

export default Banner;
