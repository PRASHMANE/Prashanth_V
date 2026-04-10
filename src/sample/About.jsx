import "./About.css";
import profileImg from "../assets/hero.png"; // your image

function About() {
  return (
    <section id="about" className="about">

      <h2 className="about-title">About Me</h2>

      <div className="about-container">

        {/* LEFT SIDE */}
        <div className="about-left">

          {/* Photo */}
          <div className="about-image-box">
            <img src={profileImg} alt="Prashanth" />
          </div>

          {/* Stats Cards */}
          <div className="about-stats">
            <div className="stat-card">
              <h3>10+</h3>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h3>3+</h3>
              <p>Internships</p>
            </div>
          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="about-right">

          <div className="about-card-main">
            <h3>Who I Am</h3>

            <p>
              I’m a passionate fresher focused on <span>Backend Development</span> 
              and <span>AI/ML</span>, dedicated to building scalable and efficient systems.
            </p>

            <p>
              I have experience in developing <span>REST APIs</span>, working with 
              <span> Microservices</span>, and designing real-world backend solutions.
            </p>

            <p>
              My goal is to continuously learn, innovate, and create impactful 
              applications that solve real-world problems.
            </p>

            <h4>My Passion 🚀</h4>

            <p>
              I enjoy transforming ideas into real applications, exploring new technologies, 
              and pushing my limits in <span>problem-solving</span> and system design.
            </p>
          </div>

        </div>

      </div>

    </section>
  );
}

export default About;