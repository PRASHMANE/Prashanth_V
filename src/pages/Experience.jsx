import { useState } from "react";
import "./Experience.css";
import { FaEye } from "react-icons/fa";

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      company: "Tech Company A",
      role: "Backend Intern",
      time: "Jan 2024 - May 2024",
      location: "Bangalore",
      logo: "https://via.placeholder.com/50",
      proof: "https://via.placeholder.com/600", // offer letter
    },
    {
      company: "Tech Company B",
      role: "Software Intern",
      time: "Jun 2024 - Oct 2024",
      location: "Remote",
      logo: "https://via.placeholder.com/50",
      proof: "https://via.placeholder.com/600",
    },
    {
      company: "Startup C",
      role: "AI/ML Intern",
      time: "Nov 2024 - Present",
      location: "Hyderabad",
      logo: "https://via.placeholder.com/50",
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