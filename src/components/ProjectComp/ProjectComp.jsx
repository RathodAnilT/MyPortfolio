import React from 'react';
import './ProjectComp.css';

import WeatherApp from '../../images/WeatherApp.png';
import pp2 from '../../images/pp-2.jpg';
import pp4 from '../../images/pp-4.jpg';
import Blog from '../../images/Blog.png';
import NetflixClone from '../../images/Netflix.png';
import pp7 from '../../images/pp-7.jpg';
import { FaExternalLinkAlt } from "react-icons/fa";

const ProjectComp = () => {
  return (
    <div className="project-container" id='project'>
        <h1>Projects</h1>
        <div className='card-grid'>
            <div className='card'>
                <img src={WeatherApp} alt='WeatherApp' />
                <a href='https://github.com/RathodAnilT/weatherForecastApp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>WeatherApp</h3>
                    <p>"Discover my weather app—real-time updates crafted with HTML, CSS, and JavaScript. Fetching data from an API, it provides accurate weather forecasts to keep you informed on the go."</p>
                </div>
            </div>

            <div className='card'>
                <img src={Blog} alt='<MERN Blog' />
                <a href='https://github.com/RathodAnilT/mern' 
                target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>MERN Blog</h3>
                    <p>This project is a user-friendly blog website built with the MERN stack (MongoDB, Express.js, React.js, Node.js). It provides a robust platform for creating, managing, and interacting with blog posts.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp4} alt='User Management System' />
                <a href='https://github.com/lathika-sunder/user-management-client/' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>User Management System</h3>
                    <p>A comprehensive User Management System powered by MERN stack and Material-UI, implementing RESTful APIs for seamless user interaction and control.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp2} alt='React Flow Family Tree' />
                <a href='https://github.com/lathika-sunder/family-tree-client' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>React Flow Family Tree</h3>
                    <p>A dynamic Family Tree application developed with the MERN stack and ReactFlow library, enabling intuitive visualization and navigation of familial relationships.</p>
                </div>
            </div>

            <div className='card'>
                <img src={pp7} alt='Notes Application' />
                <a href='https://github.com/lathika-sunder/mynotesapp' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>Notes Application</h3>
                    <p>An interactive Notes Application built on the MEEN stack with Google Auth integration for secure user authentication and seamless note-taking experiences.</p>
                </div>
            </div>

            <div className='card'>
                <img src={NetflixClone} alt='NetflixClone' />
                <a href='https://github.com/RathodAnilT/NetflixClone' target="_blank"><button><FaExternalLinkAlt /></button></a>
                <div className='content'>
                    <h3>NetflixClone</h3>
                    <p>This project is a static website created as a clone of Netflix. It is developed using only HTML and CSS, serving as a learning exercise to practice web design and front-end development skills.</p>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ProjectComp;
