import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
  const name = "P R A S H M A N E";
  const [show, setShow] = useState(true);
  const [showP, setShowP] = useState(false);
  const [showName, setShowName] = useState(false);

  useEffect(() => {
    // Show P after hex draw
    setTimeout(() => setShowP(true), 1800);

    // Show name after P
    setTimeout(() => setShowName(true), 2600);

    // Remove loader
    setTimeout(() => setShow(false), 6000);
  }, []);

  return (
    show && (
      <div className="preloader">
        {/* HEXAGON */}
        <div className="hex-container">
          <svg viewBox="0 0 200 200" className="hex-svg">
            <polygon
              points="100,10 180,55 180,145 100,190 20,145 20,55"
              className="hex-shape"
            />
          </svg>

          {/* Letter P */}
          {showP && <div className="logo-letter">P</div>}
        </div>

        {/* Rockstar Name Entry */}
        {showName && (
          <h1 className="rock-name">
            {name.split("").map((letter, index) => (
              <span
                key={index}
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {letter}
              </span>
            ))}
          </h1>
        )}
      </div>
    )
  );
}

export default Preloader;