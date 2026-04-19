import { useEffect, useState } from "react";
import "./Preloader.css";

function Preloader() {
  const name = "P R A S H M A N E";

  const [show, setShow] = useState(true);
  const [showP, setShowP] = useState(false);
  const [showName, setShowName] = useState(false);
  const [reverse, setReverse] = useState(false);

  useEffect(() => {
    const isMobile = window.innerWidth < 768;

    const t1 = setTimeout(() => setShowP(true), isMobile ? 400 : 1200);
    const t2 = setTimeout(() => setShowName(true), isMobile ? 800 : 2000);
    const t3 = setTimeout(() => setReverse(true), isMobile ? 1800 : 3500);
    const t4 = setTimeout(() => {
      setShow(false);
      document.body.style.overflow = "auto";
    }, isMobile ? 2500 : 4000);

    document.body.style.overflow = "hidden";

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
      clearTimeout(t4);
    };
  }, []);

  if (!show) return null;

  return (
    <div className="preloader">
      <div className={`hex-container ${reverse ? "reverse" : ""}`}>
        <svg viewBox="0 0 200 200" className="hex-svg">
          <polygon
            points="100,10 180,55 180,145 100,190 20,145 20,55"
            className="hex-shape"
          />
        </svg>

        {showP && <div className="logo-letter">P</div>}
      </div>

      {showName && (
        <h1 className={`rock-name ${reverse ? "fade-out" : ""}`}>
          {name.split("").map((letter, index) => (
            <span key={index} style={{ animationDelay: `${index * 0.08}s` }}>
              {letter}
            </span>
          ))}
        </h1>
      )}
    </div>
  );
}

export default Preloader;