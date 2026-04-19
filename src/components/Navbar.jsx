import { useState } from "react";
import "./Navbar.css";

function Navbar() {
  const [open, setOpen] = useState(false);

  const links = [
    "Home","About","Skills","Experience",
    "Projects","Education","Achievements","Contact",
  ];

  return (
    <div className="navbar">
      <h2 className="logo">Prashanth.V</h2>

      {/* 🔥 Hamburger */}
      <div className="hamburger" onClick={() => setOpen(!open)}>
        ☰
      </div>

      <div className={`nav-links ${open ? "show" : ""}`}>
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="nav-item"
            onClick={() => setOpen(false)}
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;