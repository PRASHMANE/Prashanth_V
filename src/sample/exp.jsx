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
      time: "July 2025 -  July 2026",
      location: "remort",
      logo: Almabetter,
      proof: Almabetter, // offer letter
    },
    {
      company: "Fuel",
      role: "Devops Intern",
      time: "Oct 2025 - Nov 2025",
      location: "Remote",
      logo: Fuel,
      proof: "https://via.placeholder.com/600",
    },
    {
      company: "Take - It - Smart",
      role: "DataScience Intern",
      time: "Feb 2026 - Present",
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