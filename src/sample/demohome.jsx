import { useEffect, useState } from "react";
import "./Home.css";

/* SOCIAL ICONS */
import { FaGithub, FaLinkedin, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

/* SKILL ICONS */
import {
  FaJava, FaDocker, FaAws, FaReact, FaNodeJs, FaGitAlt, FaLinux
} from "react-icons/fa";

import {
  SiSpringboot, SiKubernetes, SiPython, SiFastapi, SiTensorflow,
  SiMysql, SiPostgresql, SiMongodb, SiRedis,
  SiApachekafka, SiRabbitmq,
  SiJenkins, SiGithubactions, SiTerraform,
  SiNginx, SiApache,
  SiPandas, SiNumpy, SiScikitlearn,
  SiFlask, SiDjango,
  SiTypescript, SiJavascript,
  SiHtml5, SiCss3,
  SiFirebase,
  SiElasticsearch,
  SiGrafana, SiPrometheus,
  SiOpenai
} from "react-icons/si";

function Home() {

  /* TYPING EFFECT */
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

  /* SKILLS DATA (40+ ICONS) */
  const skillsUp = [
    { icon: <FaJava />, name: "Java" },
    { icon: <SiSpringboot />, name: "Spring Boot" },
    { icon: <FaDocker />, name: "Docker" },
    { icon: <FaAws />, name: "AWS" },
    { icon: <SiKubernetes />, name: "Kubernetes" },
    { icon: <SiMysql />, name: "MySQL" },
    { icon: <SiPostgresql />, name: "PostgreSQL" },
    { icon: <SiRedis />, name: "Redis" },
    { icon: <SiApachekafka />, name: "Kafka" },
    { icon: <SiRabbitmq />, name: "RabbitMQ" },
    { icon: <SiNginx />, name: "Nginx" },
    { icon: <SiApache />, name: "Apache" },
    { icon: <FaLinux />, name: "Linux" },
    { icon: <SiTerraform />, name: "Terraform" },
    { icon: <SiJenkins />, name: "Jenkins" },
    { icon: <SiGithubactions />, name: "GitHub Actions" },
    { icon: <SiElasticsearch />, name: "ElasticSearch" },
    { icon: <SiGrafana />, name: "Grafana" },
    { icon: <SiPrometheus />, name: "Prometheus" }
  ];

  const skillsDown = [
    { icon: <SiPython />, name: "Python" },
    { icon: <SiFastapi />, name: "FastAPI" },
    { icon: <SiFlask />, name: "Flask" },
    { icon: <SiDjango />, name: "Django" },
    { icon: <SiTensorflow />, name: "TensorFlow" },
    { icon: <SiPandas />, name: "Pandas" },
    { icon: <SiNumpy />, name: "NumPy" },
    { icon: <SiScikitlearn />, name: "Scikit-Learn" },
    { icon: <FaReact />, name: "React" },
    { icon: <FaNodeJs />, name: "Node.js" },
    { icon: <SiJavascript />, name: "JavaScript" },
    { icon: <SiTypescript />, name: "TypeScript" },
    { icon: <SiHtml5 />, name: "HTML" },
    { icon: <SiCss3 />, name: "CSS" },
    { icon: <SiFirebase />, name: "Firebase" },
    { icon: <SiMongodb />, name: "MongoDB" },
    { icon: <FaGitAlt />, name: "Git" },
    { icon: <SiOpenai />, name: "OpenAI" }
  ];

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
      <div className="center-content">
        <h1>Hi, I’m <span>Prashanth V</span></h1>

        <h2 className="typing">
          {text}
          <span className="cursor">|</span>
        </h2>

        <a href="/resume.pdf" className="cv-btn">Download CV</a>
      </div>

      {/* RIGHT SKILLS */}
      <div className="skills">

        <div className="column up">
          {skillsUp.map((skill, i) => (
            <div className="card" key={i}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

        <div className="column down">
          {skillsDown.map((skill, i) => (
            <div className="card" key={i}>
              {skill.icon}
              <span>{skill.name}</span>
            </div>
          ))}
        </div>

      </div>

    </section>
  );
}

export default Home;