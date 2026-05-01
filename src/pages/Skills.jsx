import { useState } from "react";
import "./Skills.css";

function Skills() {

  const [activeSkill, setActiveSkill] = useState(null);

  const skills = [
    {
      title: "Languages",
      desc: "Java · Python · SQL",

      // ✅ SHOW ONLY THIS IN CARD
      preview: [
        { name: "Python", percent: 98 },
        { name: "Java", percent: 92 },
        { name: "JavaScript", percent: 65 },
      ],

      // ✅ SHOW THIS IN MODAL (FULL)
      full: [
        { name: "Python", percent: 98 },
        { name: "Java", percent: 92 },
        { name: "JavaScript", percent: 65 },
        { name: "Sql", percent: 75 },
        { name: "C", percent: 60 },
        { name: "Flutter", percent: 50 },
      ]
    },

    {
      title: "Frount-End",
      desc: "React · HTML/CSS",

      preview: [
        { name: "React", percent: 90 },
        { name: "HTML", percent: 85 },
        { name: "CSS", percent: 80 },
      ],

      full: [
        { name: "React", percent: 90 },
        { name: "HTML", percent: 85 },
        { name: "CSS", percent: 80 },
      ]
    },
    {
      title: "Backend",
      desc: "APIs · Microservices",

      // ✅ SHOW ONLY THIS IN CARD
      preview: [
        { name: "Spring Boot", percent: 90 },
        { name: "REST APIs", percent: 92 },
        { name: "Microservices", percent: 85 },
      ],

      // ✅ SHOW THIS IN MODAL (FULL)
      full: [
        { name: "Spring Boot", percent: 90 },
        { name: "REST APIs", percent: 92 },
        { name: "Microservices", percent: 85 },
        { name: "FastApi", percent: 75 },
        { name: "gRPC", percent: 70 },
        { name: "JWT Auth", percent: 88 },
      ]
    },
    {
      title: "AI/ML/GenAI",
      desc: "TensorFlow · PyTorch · Hugging Face",

      // ✅ SHOW ONLY THIS IN CARD
      preview: [
        { name: "Numpy", percent: 90 },
        { name: "Pandas", percent: 85 },
        { name: "Scikit-learn", percent: 80 },
      ],

      // ✅ SHOW THIS IN MODAL (FULL)
      full: [
        { name: "Numpy", percent: 90 },
        { name: "Pandas", percent: 85 },
        { name: "Scikit-learn", percent: 80 },
        { name: "TensorFlow", percent: 75 },
        { name: "PyTorch", percent: 70 },
        { name: "Hugging Face", percent: 88 },
        { name: "LangChain", percent: 85 },
        { name: "LangGraph", percent: 80 },
        { name: "Transformers", percent: 75 },
      ]
    },
    {
      title: "Databases",
      desc: "SQL · NoSQL · MongoDB",

      // ✅ SHOW ONLY THIS IN CARD
      preview: [
        { name: "MySQL", percent: 90 },
        { name: "PostgreSQL", percent: 92 },
        { name: "MongoDB", percent: 85 },
      ],

      // ✅ SHOW THIS IN MODAL (FULL)
      full: [
        { name: "MySQL", percent: 90 },
        { name: "PostgreSQL", percent: 92 },
        { name: "MongoDB", percent: 85 },
        { name: "Vector DB", percent: 75 },
        { name: "Redis", percent: 70 },
        { name: "Faiss", percent: 88 },
      ]
    },
    {
      title: "DevOps",
      desc: "CI/CD · Docker · Kubernetes",

      // ✅ SHOW ONLY THIS IN CARD
      preview: [
        { name: "CI/CD", percent: 90 },
        { name: "Docker", percent: 92 },
        { name: "Kubernetes", percent: 85 },
      ],

      // ✅ SHOW THIS IN MODAL (FULL)
      full: [
        { name: "CI/CD", percent: 90 },
        { name: "Docker", percent: 92 },
        { name: "Kubernetes", percent: 85 },
        { name: "Jenkins", percent: 75 },
        { name: "AWS", percent: 70 },
        { name: "Grafana", percent: 88 },
      ]
    },
  ];

  return (
    <section className="skills-section">

      <h2 className="skills-title">Skills</h2>

      <div className="skills-grid">

        {skills.map((skill, i) => (
          <div
            key={i}
            className="skill-card"
            onClick={() => setActiveSkill(skill)}
          >
            <h3>{skill.title}</h3>
            <p>{skill.desc}</p>

            {/* 🔥 ONLY PREVIEW SHOWN */}
            {skill.preview.map((item, idx) => (
              <div key={idx} className="bar">
                <span>{item.name}</span>
                <div className="progress">
                  <div style={{ width: `${item.percent}%` }}></div>
                </div>
              </div>
            ))}

            {/* 👉 small hint */}
            <p className="more">+ more...</p>

          </div>
        ))}

      </div>

      {/* 🔥 FULL REPORT MODAL */}
      {activeSkill && (
        <div className="modal" onClick={() => setActiveSkill(null)}>

          <div
            className="report-card"
            onClick={(e) => e.stopPropagation()}
          >
            <h2>{activeSkill.title} Report</h2>

            {/* 🔥 SHOW FULL DATA */}
            {activeSkill.full.map((item, i) => (
              <div key={i} className="report-row">
                <span>{item.name}</span>
                <span>{item.percent}%</span>
              </div>
            ))}

            <button onClick={() => setActiveSkill(null)}>
              Close
            </button>

          </div>

        </div>
      )}

    </section>
  );
}

export default Skills;