import { useState } from "react";
import "./Education.css";
import { FaEye } from "react-icons/fa";

import School from "../assets/AB.png";
import PU from "../assets/Fuel.png";
import College from "../assets/Take.png";

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      institute: "Almabetter",
      degree: "Gen AI Intern",
      time: "July 2025 - Jan 2026",
      location: "Remote",
      logo: School,
      proof: School, // marksheet
    },
    {
      institute: "Fuel",
      degree: "Devops Intern",
      time: "Oct 2025 - Nov 2025",
      location: "Hubli",
      logo: PU,
      proof: PU,
    },
    {
      institute: "Take - It - Smart",
      degree: "DataScience Intern",
      time: "Feb 2026 - Present",
      location: "Hybrid",
      logo: College,
      proof: College,
    },
  ];

  return (
    <section className="education">

      <h2 className="edu-title">Experience</h2>

      <div className="edu-wrapper">

        <div className="edu-line"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`edu-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="edu-card">

              <div className="edu-header">
                <img src={item.logo} alt="logo" />

                <div>
                  <h3>{item.institute}</h3>
                  <p>{item.degree}</p>
                </div>

                <span className="loc">{item.location}</span>
              </div>

              <div className="edu-time">{item.time}</div>

              {/* 👁 VIEW BUTTON */}
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

export default Education;