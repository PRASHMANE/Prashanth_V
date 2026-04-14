import { useState } from "react";
import "./Experience.css";
import { FaEye } from "react-icons/fa";
import Almabetter from "../assets/AB.png";
import Fuel from "../assets/Fuel.png";
import Take from "../assets/Take.png";

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      company: "AlmaBetter",
      role: "Gen AI Intern",
      time: "July 2025 -  Jan 2026",
      location: "remort",
      logo: Almabetter,
      proof: Almabetter, // offer letter
    },
    {
      company: "Tech Company B",
      role: "Software Intern",
      time: "Jun 2024 - Oct 2024",
      location: "Remote",
      logo: Fuel,
      proof: "https://via.placeholder.com/600",
    },
    {
      company: "Startup C",
      role: "AI/ML Intern",
      time: "Nov 2024 - Present",
      location: "Hyderabad",
      logo: Take,
      proof: "https://via.placeholder.com/600",
    },
  ];

  return (
    <section className="experience">

      <h2 className="exp-title">Experience</h2>

      <div className="exp-wrapper">

        <div className="exp-line"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`exp-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="exp-card">

              <div className="exp-header">
                <img src={item.logo} alt="logo" />

                <div>
                  <h3>{item.company}</h3>
                  <p>{item.role}</p>
                </div>

                <span className="loc">{item.location}</span>
              </div>

              <div className="exp-time">{item.time}</div>

              {/* EYE BUTTON */}
              <div
                className="eye"
                onClick={() => setSelectedImage(item.proof)}
              >
                <FaEye />
              </div>

            </div>

          </div>
        ))}

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <img src={selectedImage} alt="proof" />
        </div>
      )}

    </section>
  );
}

export default Experience;