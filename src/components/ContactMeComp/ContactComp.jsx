import React from "react";
import { IoIosCheckbox, IoMdDownload } from "react-icons/io";
import "./ContactComp.css";
import {
  SiGeeksforgeeks,
  SiGithub,
  SiGmail,
  SiHackerrank,
  SiLeetcode,
  SiLinkedin,
  SiCodechef,
} from "react-icons/si";
const ContactComp = () => {
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
    <div className="contact-container" id="contact">
      <div className="hire-container">
        <div className="title-ad">
          <h2>
          <span>"Hire Me!"</span>
          </h2>
        </div>
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
      <div className="contact-me">
        <div className="tech-icons">
          <h2 className="otro-blockquote" style={{ border: "0" }}>
            My coding profiles
          </h2>
          
          <a href="https://www.linkedin.com/in/anil-rathod-1a088819b/" target="_blank">
            <SiLinkedin className="tech-icon" />
          </a>
          <a href="https://github.com/RathodAnilT" target="_blank">
            <SiGithub className="tech-icon" />
          </a>
          <a href="https://leetcode.com/u/Anil_Rathod/" target="_blank">
            <SiLeetcode className="tech-icon" />
          </a>
          <a
            href="https://www.geeksforgeeks.org/user/anilrathl9tb/"
            target="_blank"
          >
            <SiGeeksforgeeks className="tech-icon" />
          </a>
          <a
            href="https://www.codechef.com/users/anilrathod1501"
            target="_blank"
          >
            <SiCodechef className="tech-icon" />
          </a>
          <a
            href="https://www.hackerrank.com/profile/anilrathod1501"
            target="_blank"
          >
            <SiHackerrank className="tech-icon" />
          </a>
         
        </div>
      </div>
      <footer>Conact me at anilrathod.150198@gmail.com</footer>
    </div>
  );
};

export default ContactComp;
