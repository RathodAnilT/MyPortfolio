import React from "react";
import "./ExperienceComp.css";

const ExperienceComp = () => {
  const experiences = [
    {
      title: "ReactJs Developer-Intern",
      company: "CodSoft Pvt. Ltd.",
      years: "25 Dec 2023 to 25 jan 2024",
      desc: [
        "Created an E-Commerce platform with functionalities for electronics products, clothes, mobiles, and more.",
        "Delivered static web applications to fulfill client requirements, consistently meeting project deadlines while ensuring high-quality code and user-friendly designs.",
      ],
    },
    {
      title: "Software Engineer - Intern",
      company: "Oasis Infobyte ",
      years: "5/2/2024",
      desc: [
        "Managed the project keeping up with deadlines and scrutinizing project possibilities to deliver the best end results.",
        "Worked on Frontend development part using frontend framework and libraries.",
      ],
    },
    {
      title: "Web Development - Intern",
      company: "TechnoHacks EduTech",
      years: "14/01/2024",
      desc: [
        "As a backend developer intern at Eddyease, I collaborated remotely to develop a large-scale learner management system.",
        "I designed a scalable database schema, showcasing expertise in backend development and database architecture.",
        "The integration of NextJS enhanced the project's efficiency and underscored a commitment to modern web development tools.",
      ],
    },    
  ];

  return (
    <div className="experience-container" id="experience">
      <h1>Experiences</h1>
      <div className="timeline">
        {experiences.map((experience, index) => (
          <div key={index} className="">   {/* Added key={index} here .. error resolved 02/07/24 */}
            <div className="content">
              <h3>{experience.title}</h3>
              <h5>{experience.company}</h5>
              <p>{experience.years}</p>
              <ul>
                {experience.desc.map((desc, descIndex) => (
                  <li key={descIndex}>{desc}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceComp;
