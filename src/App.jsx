import { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Preloader from "./components/Preloader";
function App() {
  useEffect(() => {
  const main = document.querySelector(".cursor-main");
  const dots = document.querySelectorAll(".cursor-child");

  let mouseX = 0;
  let mouseY = 0;
  let lastX = 0;
  let lastY = 0;

  const positions = Array.from({ length: dots.length }, () => ({
    x: 0,
    y: 0,
  }));

  const move = (e) => {
    mouseX = e.clientX;
    mouseY = e.clientY;
  };

  window.addEventListener("mousemove", move);

  const animate = () => {
    // calculate speed
    const speed = Math.hypot(mouseX - lastX, mouseY - lastY);

    lastX = mouseX;
    lastY = mouseY;

    // main dot
    main.style.left = mouseX + "px";
    main.style.top = mouseY + "px";

    let prevX = mouseX;
    let prevY = mouseY;

    dots.forEach((dot, i) => {
      let pos = positions[i];

      // dynamic smoothness (this is the MAGIC)
      const factor = speed > 20 ? 0.35 : 0.15;

      pos.x += (prevX - pos.x) * factor;
      pos.y += (prevY - pos.y) * factor;

      dot.style.left = pos.x + "px";
      dot.style.top = pos.y + "px";

      prevX = pos.x;
      prevY = pos.y;

      positions[i] = pos;
    });

    requestAnimationFrame(animate);
  };

  animate();

  return () => window.removeEventListener("mousemove", move);
}, []);

  return (
    <>
      {/* Mother dot */}
      <div className="cursor-main"></div>

      {/* Child dots */}
      <div className="cursor-child"></div>
      <div className="cursor-child"></div>
      <div className="cursor-child"></div>
      
      <Preloader/>
      <Navbar />
      <section id="home" style={{ height: "100vh" }}> <Home /> </section>
      <section id="about" style={{ height: "100vh" }}> <About /> </section>
      <section id="skills" style={{ height: "100vh" }}>Skills</section>
      <section id="experience" style={{ height: "100vh" }}>Experience</section>
      <section id="projects" style={{ height: "100vh" }}>Projects</section>
      <section id="education" style={{ height: "100vh" }}>Education</section>
      <section id="achievements" style={{ height: "100vh" }}>Achievements</section>
      <section id="contact" style={{ height: "100vh" }}>Contact</section>
      
      
    </>
  );
}

export default App;