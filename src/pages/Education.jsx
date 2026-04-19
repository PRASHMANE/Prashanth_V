import { useState } from "react";
import "./Education.css";
import { FaEye } from "react-icons/fa";

import School from "../assets/St.png";
import PU from "../assets/PES.png";
import College from "../assets/CIT.png";

function Education() {
  const [selectedImage, setSelectedImage] = useState(null);

  const data = [
    {
      institute: "St.Thomas Convent And High School",
      degree: "SSLC (10th)",
      time: "2019 - 2020",
      location: "Karnataka",
      logo: School,
      proof: School, // marksheet
    },
    {
      institute: "P.E.S PU College",
      degree: "PUC (12th)",
      time: "2020 - 2022",
      location: "Karnataka",
      logo: PU,
      proof: PU,
    },
    {
      institute: "Cambridge Institute Of Technology North Campus",
      degree: "B.E / B.Tech",
      time: "2022 - 2026",
      location: "India",
      logo: College,
      proof: College,
    },
  ];

  return (
    <section className="education">

      <h2 className="edu-title">Education</h2>

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