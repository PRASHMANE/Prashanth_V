import { useState } from "react";
import "./Experience.css";

// ICONS
import { FaEye, FaTimes, FaExternalLinkAlt } from "react-icons/fa";

// IMAGES (ADD YOURS)
import company1 from "../assets/hero.png";
import company2 from "../assets/hero.png";
import company3 from "../assets/hero.png";

import offer1 from "../assets/hero.png";
import offer2 from "../assets/hero.png";
import offer3 from "../assets/hero.png";

import leetcode from "../assets/hero.png";
import github from "../assets/hero.png";
import codeforces from "../assets/hero.png";

function Experience() {
  const [selectedImage, setSelectedImage] = useState(null);

  const workData = [
    {
      company: "ABC Tech",
      logo: company1,
      location: "Bangalore",
      role: "Backend Intern",
      duration: "Jan 2024 - Mar 2024",
      offer: offer1,
    },
    {
      company: "XYZ Solutions",
      logo: company2,
      location: "Remote",
      role: "Software Intern",
      duration: "Jun 2024 - Aug 2024",
      offer: offer2,
    },
    {
      company: "Startup Hub",
      logo: company3,
      location: "Hyderabad",
      role: "AI/ML Intern",
      duration: "Sep 2024 - Dec 2024",
      offer: offer3,
    },
  ];

  const codingData = [
    {
      name: "LeetCode",
      logo: leetcode,
      link: "https://leetcode.com/",
    },
    {
      name: "GitHub",
      logo: github,
      link: "https://github.com/",
    },
    {
      name: "Codeforces",
      logo: codeforces,
      link: "https://codeforces.com/",
    },
  ];

  return (
    <section className="experience">

      <h2 className="exp-title">Experience</h2>

      <div className="exp-container">

        {/* LEFT SIDE */}
        <div className="exp-left">
          {workData.map((item, i) => (
            <div className="exp-card" key={i}>

              {/* TOP */}
              <div className="exp-top">
                <div className="left">
                  <img src={item.logo} alt="" />
                  <h3>{item.company}</h3>
                </div>

                <span className="location">{item.location}</span>
              </div>

              {/* ROLE */}
              <p className="role">{item.role}</p>

              {/* TIME */}
              <p className="time">{item.duration}</p>

              {/* EYE ICON */}
              <div className="view-btn">
                <FaEye onClick={() => setSelectedImage(item.offer)} />
              </div>

            </div>
          ))}
        </div>

        {/* RIGHT SIDE */}
        <div className="exp-right">
            
          {codingData.map((item, i) => (
            <div className="code-card" key={i}>

              <div className="left">
                <img src={item.logo} alt="" />
                <h3>{item.name}</h3>
              </div>

              <a href={item.link} target="_blank" rel="noreferrer">
                <FaExternalLinkAlt />
              </a>

            </div>
          ))}
        </div>

      </div>

      {/* MODAL */}
      {selectedImage && (
        <div className="modal" onClick={() => setSelectedImage(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <FaTimes className="close" onClick={() => setSelectedImage(null)} />
            <img src={selectedImage} alt="offer" />
          </div>
        </div>
      )}

    </section>
  );
}

export default Experience;