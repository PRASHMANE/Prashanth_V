import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
  const name = "PRASHANTH";
  const [show, setShow] = useState(true);
  const [glowPhase, setGlowPhase] = useState(false);

  useEffect(() => {
    // Start glow phase after typing animation
    const glowTimer = setTimeout(() => {
      setGlowPhase(true);
    }, 2000);

    // Remove loader completely
    const endTimer = setTimeout(() => {
      setShow(false);
    }, 4000);

    return () => {
      clearTimeout(glowTimer);
      clearTimeout(endTimer);
    };
  }, []);

  return (
    show && (
      <div className="preloader">
        <h1 className="loader-name">
          {name.split("").map((letter, index) => (
            <span
              key={index}
              className={glowPhase ? "glow-letter" : ""}
              style={{
                animationDelay: `${index * 0.2}s`,
              }}
            >
              {letter}
            </span>
          ))}
        </h1>
      </div>
    )
  );
}

export default Preloader;