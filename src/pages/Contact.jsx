import "./Contact.css";
import {
  FaGithub,
  FaLinkedin,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
} from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";

function Contact() {
  return (
    <section className="contact">

      <h2 className="contact-title">Get In Touch</h2>

      <div className="contact-grid">

        {/* Gmail */}
        <a
          href="mailto:prashanthvprashanthv46@gmail.com"
          className="contact-card email"
        >
          <FaEnvelope />
          <p>Gmail</p>
          <span>p******46@gmail.com</span>
        </a>

        {/* LinkedIn */}
        <a
          href="https://www.linkedin.com/in/prashanth1615/"
          target="_blank"
          className="contact-card linkedin"
        >
          <FaLinkedin />
          <p>LinkedIn</p>
          <span>Connect with me</span>
        </a>

        {/* GitHub */}
        <a
          href="https://github.com/PRASHMANE"
          target="_blank"
          className="contact-card github"
        >
          <FaGithub />
          <p>GitHub</p>
          <span>My Projects</span>
        </a>

        {/* LeetCode */}
        <a
          href="https://leetcode.com/u/Prashmane/"
          target="_blank"
          className="contact-card leetcode"
        >
          <SiLeetcode />
          <p>LeetCode</p>
          <span>Problem Solving</span>
        </a>

        {/* Phone */}
        <div className="contact-card phone">
          <FaPhone />
          <p>Phone</p>
          <span>+91 8904311838</span>
        </div>

        

      </div>
    </section>
  );
}

export default Contact;