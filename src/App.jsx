// App.js

import { useState, useEffect, useMemo } from 'react';
import Particles, { initParticlesEngine } from '@tsparticles/react';
import { loadSlim } from '@tsparticles/slim';

import HeaderComp from './components/HeaderComp/HeaderComp';
import ExperienceComp from './components/ExperienceComp/ExperienceComp'
import './App.css';
import Design from './components/DesignComp';
import HomeComp from './components/HomeComp/HomeComp';
import ProjectComp from './components/ProjectComp/ProjectComp';
import SkillsComp from './components/SkillsComp/SkillsComp';
import ContactComp from './components/ContactMeComp/ContactComp';

function App() {

    return (
    <>
    <HeaderComp/>
    <HomeComp/>
    <Design/>
    <ExperienceComp/>
    <ProjectComp/>
    <SkillsComp/>
    <ContactComp/>
    </>
    )
 
}

export default App;
