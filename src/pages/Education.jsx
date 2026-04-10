import "./Education.css";

function Education() {
  const data = [
    {
      title: "School",
      place: "XYZ High School",
      year: "2018 - 2020",
      desc: "Built strong academic foundation and discipline.",
    },
    {
      title: "PUC",
      place: "ABC PU College",
      year: "2020 - 2022",
      desc: "Focused on Science and developed interest in coding.",
    },
    {
      title: "Engineering",
      place: "CSE - Final Year",
      year: "2022 - 2026",
      desc: "Specialized in Backend, AI/ML, System Design.",
    },
  ];

  return (
    <section className="education">

      <h2 className="edu-title">Education Roadmap</h2>

      <div className="edu-wrapper">

        <div className="edu-line"></div>

        {data.map((item, index) => (
          <div
            key={index}
            className={`edu-item ${index % 2 === 0 ? "left" : "right"}`}
          >

            <div className="edu-card">

              <div className="dot"></div>

              <h3>{item.title}</h3>
              <h4>{item.place}</h4>
              <span>{item.year}</span>
              <p>{item.desc}</p>

            </div>

          </div>
        ))}

      </div>
    </section>
  );
}

export default Education;