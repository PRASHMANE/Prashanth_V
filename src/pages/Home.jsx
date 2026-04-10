import { useEffect, useState } from "react";
import "./Home.css";
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { 
  FaJava, FaDocker, FaAws, FaReact 
} from "react-icons/fa";


import { 
  SiSpringboot, SiKubernetes, SiPython, SiFastapi, SiTensorflow ,SiMysql
} from "react-icons/si";





function Home() {

  const roles = [
    "Software Developer",
    "Backend Engineer",
    "AI/ML Enthusiast",
    "DevOps Learner"
  ];

  const [text, setText] = useState("");
  const [index, setIndex] = useState(0);
  const [roleIndex, setRoleIndex] = useState(0);

  useEffect(() => {
    const current = roles[roleIndex];

    const typing = setInterval(() => {
      setText(current.slice(0, index + 1));
      setIndex((prev) => prev + 1);

      if (index === current.length) {
        clearInterval(typing);

        setTimeout(() => {
          setIndex(0);
          setText("");
          setRoleIndex((prev) => (prev + 1) % roles.length);
        }, 1200);
      }
    }, 80);

    return () => clearInterval(typing);
  }, [index, roleIndex]);

  return (
    <section className="home">

      {/* LEFT SOCIAL */}
      <div className="socials">
        <FaLinkedin />
        <FaGithub />
        <FaWhatsapp />
        <FaEnvelope />
        <SiLeetcode />
      </div>

      {/* CENTER TEXT */}
      <div className="center-wrapper">
        <div className="center-content">

          <h3 className="intro">Hello, I'm</h3>

          <h1 className="name">Prashanth V</h1>

          <h2 className="typing">
            {text}
            <span className="cursor">|</span>
          </h2>

          <a href="/resume.pdf" download className="cv-btn">
            Download CV
          </a>

        </div>
      </div>

      {/* RIGHT SKILLS */}
      <div className="skills">

        {/* UP COLUMN */}
        <div className="column up">

          <div className="card">
            <FaJava /> <span>Java</span>
          </div>

          <div className="card">
            <SiSpringboot /> <span>Spring</span>
          </div>

          <div className="card">
            <FaDocker /> <span>Docker</span>
          </div>

          <div className="card">
            <FaAws /> <span>AWS</span>
          </div>

          <div className="card">
            <SiKubernetes /> <span>K8s</span>
          </div>

        </div>

        {/* DOWN COLUMN */}
        <div className="column down">

          <div className="card">
            <SiPython /> <span>Python</span>
          </div>

          <div className="card">
            <SiFastapi /> <span>FastAPI</span>
          </div>

          <div className="card">
            <SiTensorflow /> <span>ML</span>
          </div>

          <div className="card">
            <FaReact /> <span>React</span>
          </div>

          <div className="card">
            <SiMysql /> <span>MySQL</span>
          </div>

        </div>



        <div className="column up">

          <div className="card">
            <FaJava /> <span>Java</span>
          </div>

          <div className="card">
            <SiSpringboot /> <span>Spring</span>
          </div>

          <div className="card">
            <FaDocker /> <span>Docker</span>
          </div>

          <div className="card">
            <FaAws /> <span>AWS</span>
          </div>

          <div className="card">
            <SiKubernetes /> <span>K8s</span>
          </div>

        </div>

        {/* DOWN COLUMN */}
        <div className="column down">

          <div className="card">
            <SiPython /> <span>Python</span>
          </div>

          <div className="card">
            <SiFastapi /> <span>FastAPI</span>
          </div>

          <div className="card">
            <SiTensorflow /> <span>ML</span>
          </div>

          <div className="card">
            <FaReact /> <span>React</span>
          </div>

          <div className="card">
            <SiMysql /> <span>MySQL</span>
          </div>

        </div>

      </div>

    </section>
  );
}

export default Home;