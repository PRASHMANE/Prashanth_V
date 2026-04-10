import "./Skills.css";

import {
  FaJava, FaReact
} from "react-icons/fa";

import {
  SiSpringboot, SiJavascript,SiPython
} from "react-icons/si";

function Skills() {

  const skillData = [
    {
      title: "Frontend (Basic)",
      skills: [
        { name: "React", level: 70, icon: <FaReact /> },
        { name: "HTML/CSS", level: 80, icon: <SiJavascript /> },
        { name: "JavaScript", level: 65, icon: <SiJavascript /> },
      ],
    },
    {
      title: "Strong Backend",
      skills: [
        { name: "Java", level: 85, icon: <FaJava /> },
        { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
        { name: "REST APIs", level: 80, icon: <SiSpringboot /> },
      ],
    },
    {
        title: "Microservices",
        skills: [
            { name: "Spring Cloud", level: 75, icon: <SiSpringboot /> },
            { name: "Eureka", level: 70, icon: <SiSpringboot /> },
            { name: "API Gateway", level: 70, icon: <SiSpringboot /> },
          ],
        },
    {
        title: "AI / ML",
        skills: [
            { name: "TensorFlow", level: 70, icon: <SiPython /> },
            { name: "Scikit-learn", level: 75, icon: <SiPython /> },
            { name: "NLP", level: 65, icon: <SiPython /> },
        ],
    },
    {
      title: "Frontend (Basic)",
      skills: [
        { name: "React", level: 70, icon: <FaReact /> },
        { name: "HTML/CSS", level: 80, icon: <SiJavascript /> },
        { name: "JavaScript", level: 65, icon: <SiJavascript /> },
      ],
    },
    {
      title: "Strong Backend",
      skills: [
        { name: "Java", level: 85, icon: <FaJava /> },
        { name: "Spring Boot", level: 85, icon: <SiSpringboot /> },
        { name: "REST APIs", level: 80, icon: <SiSpringboot /> },
      ],
    },
    {
        title: "Microservices",
        skills: [
            { name: "Spring Cloud", level: 75, icon: <SiSpringboot /> },
            { name: "Eureka", level: 70, icon: <SiSpringboot /> },
            { name: "API Gateway", level: 70, icon: <SiSpringboot /> },
          ],
        },
    {
        title: "AI / ML",
        skills: [
            { name: "TensorFlow", level: 70, icon: <SiPython /> },
            { name: "Scikit-learn", level: 75, icon: <SiPython /> },
            { name: "NLP", level: 65, icon: <SiPython /> },
        ],
    }
  ];

  return (
    <section className="skills-section">

      <h2 className="skills-title">Skills & Expertise</h2>

      <div className="skills-container">
        {skillData.map((domain, index) => (
          <div className="skill-card" key={index}>

            <h3>{domain.title}</h3>

            {domain.skills.map((skill, i) => (
              <div key={i} className="skill-item">

                <div className="skill-header">

                  <div className="left">
                    <span className="icon">{skill.icon}</span>
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

          </div>
        ))}
      </div>

    </section>
  );
}

export default Skills;