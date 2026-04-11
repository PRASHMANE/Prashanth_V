import { useState } from "react";
import "./Achievements.css";
import { FaEye } from "react-icons/fa";

function Achievements() {
  const data = [
    {
      title: "600+ LeetCode Problems",
      desc: "Strong problem-solving and DSA skills.",
      img: "/certificates/leetcode.png",
    },
    {
      title: "10+ Projects",
      desc: "Built scalable real-world applications.",
      img: "/certificates/projects.png",
    },
    {
      title: "3+ Internships",
      desc: "Hands-on industry experience.",
      img: "/certificates/internship.png",
    },
  ];

  const [selected, setSelected] = useState(null);

  return (
    <section className="achievements">

      <h2 className="ach-title">Achievements</h2>

      {/* 3 CARDS ROW */}
      <div className="ach-row">
        {data.map((item, index) => (
          <div className="ach-card" key={index}>

            <h3>{item.title}</h3>
            <p>{item.desc}</p>

            <button
              className="eye-btn"
              onClick={() => setSelected(item.img)}
            >
              <FaEye />
            </button>

          </div>
        ))}
      </div>

      {/* POPUP */}
      {selected && (
        <div className="popup">
          <div className="popup-content">
            <img src={selected} alt="certificate" />

            <button
              className="close-btn"
              onClick={() => setSelected(null)}
            >
              ✖
            </button>
          </div>
        </div>
      )}

    </section>
  );
}

export default Achievements;