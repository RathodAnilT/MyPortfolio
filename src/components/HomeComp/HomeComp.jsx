// HomeComp.jsx

import React from "react";
import "./HomeComp.css";
import { IoIosCheckbox, IoMdDownload } from "react-icons/io";

const HomeComp = () => {

  const handleDownload=()=>{
    const resume= window.location.origin + '/Anil-Rathod-Resume.pdf';

    const link=document.createElement("a");
    link.href=resume;
    link.download="Anil Rathod Resume"
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link)

  }
  return (
    <div className="home-container" id="about">
      <div className="profile-image">
        {/* Replace the 'your-image-path.jpg' with the actual path to your profile image */}
        <img src="/Anil2-image.png" alt="Profile" />
      </div>
      <div className="about">
        <h1>Aspiring Software <span style={{color:"#78a2c0"}}>Developer</span></h1>
     
     
        <blockquote className="otro-blockquote">
        "In order to be irreplaceable, one must always be different."
          {/* <span>Steve Jobs</span> */}
        </blockquote>
        <p>
        Hi, I'm Anil, a software engineer passionate about creating impactful solutions. Currently completing my final year in Computer Engineering, I aspire to innovate and excel as a Software Developer (SDE) and full-stack engineer, with a keen interest in AI/ML.
        </p>
        <div className="buttons">
          <button className="btn" onClick={handleDownload}>
            Download my Resume
            <IoMdDownload style={{ paddingLeft: "3vh" }} />
          </button>
          
          <a
            href=""
            target="_blank"
          ><button className="btn">
            
            Hire Me Now!
            <IoIosCheckbox style={{ paddingLeft: "3vh" }} />
          </button></a>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default HomeComp;
