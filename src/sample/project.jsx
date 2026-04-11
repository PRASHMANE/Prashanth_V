import { useState } from "react";
import "./Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

function Projects() {
  const projects = [
    {
      name: "JungleEye AI",
      video: "/Users/prashmane/Documents/my_portfolio/src/assets/project1.mp4",
      tools: ["Python", "OpenCV", "TensorFlow"],
      desc: "AI-based wildlife monitoring system to prevent human-animal conflict.",
    },
    {
      name: "Uber Clone Backend",
      video: "/videos/project2.mp4",
      tools: ["Java", "Spring Boot", "Kafka", "Docker"],
      desc: "Scalable backend system for ride matching and real-time tracking.",
    },
    {
      name: "DevOps Pipeline",
      video: "/videos/project3.mp4",
      tools: ["AWS", "Jenkins", "Kubernetes"],
      desc: "CI/CD pipeline for automated deployment and scaling.",
    },
  ];

  const [index, setIndex] = useState(0);

  const next = () => {
    setIndex((prev) => (prev + 1) % projects.length);
  };

  const prev = () => {
    setIndex((prev) => (prev - 1 + projects.length) % projects.length);
  };

  const current = projects[index];

  return (
    <section className="projects">

      <h2 className="proj-title">Projects</h2>

      <div className="proj-card">

        {/* LEFT VIDEO */}
        <div className="proj-left">
          <video
            key={current.video}   // 🔥 IMPORTANT (forces reload)
            src={current.video}
            autoPlay
            loop
            muted
            playsInline
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="proj-right">

          <h3>{current.name}</h3>

          <div className="tools">
            {current.tools.map((tool, i) => (
              <span key={i}>{tool}</span>
            ))}
          </div>

          <p>{current.desc}</p>

          {/* ARROWS */}
          <div className="arrows">
            <button onClick={prev}>
              <FaArrowLeft />
            </button>

            <button onClick={next}>
              <FaArrowRight />
            </button>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;