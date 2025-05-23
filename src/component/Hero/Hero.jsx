import React from "react";
import "./Hero.css";
import profile_img from "../../assets/profile_img.svg";
import AnchorLink from "react-anchor-link-smooth-scroll";
const Hero = () => {
  return (
    <div className="hero-container">
      <fieldset id="home" className="hero">
        <legend className="hero-legend">
          <img src={profile_img} alt="Alok" className="hero-img" />
        </legend>

        <h1>
          <span>I'm Alok</span> Frontend Developer
        </h1>

        <p>
          I create engaging and intuitive web experiences using modern
          technologies like React, JavaScript, and CSS.
        </p>

        <div className="hero-action">
          <div className="hero-connect">
            {" "}
            <AnchorLink className="anchor-link" href="#contact">
              Connect with me
            </AnchorLink>
          </div>
          <div className="hero-resume">
            <a
              className="anchor-link"
              href="/Alok_Kumar_Yadav.pdf"
              target="_blank"
              download
            >
              My Resume
            </a>
          </div>
        </div>
      </fieldset>
    </div>
  );
};

export default Hero;
