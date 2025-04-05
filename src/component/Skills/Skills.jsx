import { useEffect, useState } from "react";
import "./Skills.css";

const skills = [
  { name: "HTML & CSS", level: 90 },
  { name: "ReactJs", level: 85 },
  { name: "JavaScript", level: 80 },
  { name: "NextJs", level: 75 },
];

export default function Skills() {
  return (
    <div className="skills-container">
      {skills.map((skill, index) => (
        <div key={index} className="skill">
          <div className="skill-info">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="progress-bar">
            <div
              className="progress-fill"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );
}
