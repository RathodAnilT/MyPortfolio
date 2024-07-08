import React from "react";
import "./SkilsComp.css";
import html from "../../assets/icons/html.png";
import css from "../../assets/icons/css.png";
import javascript from "../../assets/icons/javascript.png";
import react from "../../assets/icons/react.png";
import express from "../../assets/icons/express.png";
import sql from "../../assets/icons/sql.png"
import c from "../../assets/icons/c.png"
import Cpp from "../../assets/icons/Cpp.png"
import vscode from "../../assets/icons/vscode.png"
import { SiMongodb, SiPostman } from "react-icons/si";

import { FaCss3Alt,FaGit, FaGitAlt, FaGithub, FaHtml5, FaJava, FaNodeJs} from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SiMui } from "react-icons/si";
import Tailwind from "../../assets/icons/Tailwind.png";
import firebase from "../../assets/icons/firebase.png";
import Python from "../../assets/icons/Python.png";
import insomnia from "../../assets/icons/insomnia.jpeg";

const SkillsComp = () => {
  return (
    <div className="skills-container">
      <h1>Skills</h1>
      <div className="skills-grid">
        <div className="column">
          <div className="skills-card">
            <h2>Frontend</h2>
            <FaHtml5 className="tech-icon" size={64} color="#B22222"/>
            <FaCss3Alt className="tech-icon" size={64} color="#1F42CB"/>
            <img className="tech-icon" style={{"height":"10%"}}src={Tailwind} alt="Tailwind Icon" />
            <IoLogoJavascript color="yellow" className="tech-icon" size={64}/>
            <img className="tech-icon" style={{"height":"10%"}}src={react} alt="React Icon" />
            <SiMui  className="tech-icon" color='#0077FF'></SiMui>
          </div>
          <div className="skills-card">
            <h2>Backend</h2>
            <img className="tech-icon" style={{"height":"10%"}}src={firebase} alt="firebase Icon" />
            <FaNodeJs className="tech-icon" size={64} color="#349C21"/>
            <img className="tech-icon" src={express} alt="Express Icon" />
            <SiPostman className="tech-icon" size={64} color="#C66B0A"/>
            <img className="tech-icon" src={insomnia} alt="insomnia Icon" />
          </div>
        </div>
        <div className="line"></div>
        <div className="column">
          <div className="skills-card">
            <h2>Databases</h2>
            <SiMongodb className="tech-icon" color="#349C21" />
            <img className="tech-icon" src={sql}  />
          </div>
          <div className="skills-card">
            <h2>Languages</h2>
            <img className="tech-icon" src={Cpp} alt="Cpp Icon" />
            <FaJava className="tech-icon"/>
             <IoLogoJavascript color="yellow" className="tech-icon" size={64}/>
             <img className="tech-icon" src={c} alt="C Icon" />
            <img className="tech-icon" src={Python} alt="Python Icon" />
          </div>
          <div className="skills-card">
            <h2>Tools</h2>
            <FaGitAlt className="tech-icon" color="orange"/>
             <FaGithub  className="tech-icon" size={64}/>
            <img src={vscode} className="tech-icon" color="blue"  />
           
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillsComp;
