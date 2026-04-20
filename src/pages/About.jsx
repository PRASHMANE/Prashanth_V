import { useState, useEffect } from "react";
import "./About.css";
import profileImg from "../assets/prash.png";

function About() {

  const lines = [
    "I’m a passionate fresher focused on Backend Development and AI/ML.",
    "I build scalable applications using REST APIs and Microservices.",
    "My goal is to continuously learn, innovate, and create impactful solutions.",
    "My Passion 🚀",
    "I love transforming ideas into real applications and exploring new technologies."
  ];

  const [displayedLines, setDisplayedLines] = useState([]);
  const [currentLine, setCurrentLine] = useState(0);
  const [currentText, setCurrentText] = useState("");

  useEffect(() => {
    if (currentLine >= lines.length) return;

    let charIndex = 0;

    const interval = setInterval(() => {
      setCurrentText(lines[currentLine].slice(0, charIndex + 1));
      charIndex++;

      if (charIndex === lines[currentLine].length) {
        clearInterval(interval);

        setTimeout(() => {
          setDisplayedLines((prev) => [...prev, lines[currentLine]]);
          setCurrentText("");
          setCurrentLine((prev) => prev + 1);
        }, 500);
      }
    }, 35);

    return () => clearInterval(interval);
  }, [currentLine]);

  return (
    <section id="about" className="about">

      <h2 className="about-title">About Me</h2>

      <div className="about-container">

        {/* LEFT */}
        <div className="about-left">

          <div className="about-image-box">
            <img src={profileImg} alt="Prashanth" />
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>600+</h3>
              <p>LeetCode Problems</p>
            </div>


            <div className="stat-card">
              <h3>3+</h3>
              <p>Internships</p>
            </div>
          </div>

        </div>

        {/* RIGHT */}
        <div className="about-right">
          <div className="about-card-main">

            {displayedLines.map((line, index) => (
              <p key={index} className="typed-line">
                {highlightText(line)}
              </p>
            ))}

            {currentLine < lines.length && (
              <p className="typed-line">
                {highlightText(currentText)}
                <span className="cursor">|</span>
              </p>
            )}

          </div>
        </div>

      </div>

    </section>
  );
}

/* FIXED Highlight Function */
function highlightText(text) {
  const keywords = [
    "Backend Development",
    "AI/ML",
    "REST APIs",
    "Microservices",
    "Passion"
  ];

  let result = text;

  keywords.forEach((word) => {
    result = result.replace(
      word,
      `<span class="highlight-orange">${word}</span>`
    );
  });

  return <span dangerouslySetInnerHTML={{ __html: result }} />;
}

export default About;