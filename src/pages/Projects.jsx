import { useState } from "react";
import "./Projects.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import project1 from "../assets/project1.mp4";

function Projects() {
  const projects = [
    {
    name: "JungleEye AI",
    video: project1,
    tools: ["Python", "OpenCV", "TensorFlow"],
    desc: "AI-based wildlife monitoring system.",
    live: "",
    github: "https://github.com/PRASHMANE",
  },

  {
    name: "Where Am I",
    video: "",
    tools: ["Python", "OpenCV", "TensorFlow"],
    desc: "AI-based wildlife monitoring system.",
    live: "",
    github: "https://github.com/PRASHMANE",
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


            <div className="proj-links">
                {current.live && (
                    <a href={current.live} target="_blank" rel="noreferrer">
                        Live Demo
                    </a>
                )}
                <a href={current.github} target="_blank" rel="noreferrer">
                    GitHub
                </a>
            </div>

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