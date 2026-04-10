import { useState } from "react";
import "./Skills.css";

// IMPORT LOGOS
import java from "../assets/hero.png";
import spring from "../assets/hero.png";
import python from "../assets/hero.png";
import react from "../assets/hero.png";
import docker from "../assets/hero.png";
import aws from "../assets/hero.png";

function Skills() {

  const [selected, setSelected] = useState(null);

  const skillData = [
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85, icon: java },
        { name: "Spring Boot", level: 80, icon: spring },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 70, icon: react },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Python", level: 80, icon: python },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", level: 75, icon: docker },
        { name: "AWS", level: 70, icon: aws },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85, icon: java },
        { name: "Spring Boot", level: 80, icon: spring },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 70, icon: react },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Python", level: 80, icon: python },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", level: 75, icon: docker },
        { name: "AWS", level: 70, icon: aws },
      ],
    },
    {
      title: "Backend",
      skills: [
        { name: "Java", level: 85, icon: java },
        { name: "Spring Boot", level: 80, icon: spring },
      ],
    },
    {
      title: "Frontend",
      skills: [
        { name: "React", level: 70, icon: react },
      ],
    },
    {
      title: "AI / ML",
      skills: [
        { name: "Python", level: 80, icon: python },
      ],
    },
    {
      title: "DevOps",
      skills: [
        { name: "Docker", level: 75, icon: docker },
        { name: "AWS", level: 70, icon: aws },
      ],
    },
  ];

  return (
    <section className="skills-section">

      <h2>My Skills</h2>

      {/* GRID */}
      <div className="skills-grid">
        {skillData.map((item, index) => (
          <div
            key={index}
            className="skill-card"
            onClick={() => setSelected(item)}
          >
            <h3>{item.title}</h3>
            <p>Click to view</p>
          </div>
        ))}
      </div>

      {/* MODAL */}
      {selected && (
        <div className="modal" onClick={() => setSelected(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>

            <h2>{selected.title}</h2>

            {selected.skills.map((skill, i) => (
              <div key={i} className="modal-skill">

                <div className="skill-header">
                  <div className="left">
                    <img src={skill.icon} alt="" />
                    <span>{skill.name}</span>
                  </div>
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

            <button onClick={() => setSelected(null)}>Close</button>

          </div>
        </div>
      )}

    </section>
  );
}

export default Skills;