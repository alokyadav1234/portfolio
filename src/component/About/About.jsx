import React from "react";
import "./About.css";
import theme_pattern from "../../assets/theme_pattern.svg";
import profile_img from "../../assets/profile_img.svg";
import Skills from "../Skills/Skills";
const About = () => {
  return (
    <div id="about" className="about">
      <div className="about-title">
        <h1>About Me</h1>
        <img src={theme_pattern} alt="arrow" className="about-arrow" />
      </div>
      <div className="about-sections">
        <div className="about-left">
          <img src={profile_img} alt="Alok" className="about-img" />
        </div>

        <div className="about-right">
          <div className="about-para">
            <p>
              I am a passionate frontend developer with a knack for creating
              engaging and intuitive web experiences. I specialize in using
              modern technologies like React, JavaScript, and CSS to bring ideas
              to life.
            </p>
            <p>
              My journey in web development began with a fascination for how
              things work behind the scenes. I love turning complex problems
              into simple, beautiful, and user-friendly interfaces. I am
              constantly learning and exploring new technologies to enhance my
              skills and stay updated with industry trends.
            </p>
          </div>
          {/* <div className="about-skills">
            <div className="about-skill">
              <p>HTML & Css</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>ReactJs</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Java Script</p>
              <hr style={{ width: "50%" }} />
            </div>
            <div className="about-skill">
              <p>Next Js</p>
              <hr style={{ width: "50%" }} />
            </div>
          </div> */}
          <Skills />
        </div>
      </div>
      <div className="about-achievements">
        <div className="about-achievement">
          <h1>4+</h1>
          <p>YEARS OF EXPRIENCE</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>6+</h1>
          <p>PROJECTS COMPLETED</p>
        </div>
        {/* <hr />
        <div className="about-achievement">
          <h1>100+</h1>
          <p>HAPPY CLIENTS</p>
        </div>
        <hr />
        <div className="about-achievement">
          <h1>20+</h1>
          <p>AWARDS WON</p>
        </div> */}
      </div>
    </div>
  );
};

export default About;
