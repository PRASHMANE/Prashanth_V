import "./Navbar.css";

function Navbar() {
  const links = [
    "Home",
    "About",
    "Skills",
    "Experience",
    "Projects",
    "Education",
    "Achievements",
    "Contact",
  ];

  return (
    <div className="navbar">
      <h2 className="logo">Prashanth.V</h2>

      <div className="nav-links">
        {links.map((link, index) => (
          <a
            key={index}
            href={`#${link.toLowerCase()}`}
            className="nav-item"
          >
            {link}
          </a>
        ))}
      </div>
    </div>
  );
}

export default Navbar;