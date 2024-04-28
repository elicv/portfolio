import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Route,  } from 'react-router-dom';

import Bibliography from './Components/Bibliography';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Experiencie from './Components/Experiencie';
import Contact from './Components/Contact';
import Container from 'react-bootstrap/esm/Container';

function App() {

  const [activeTab, setActiveTab] = useState('Bibliography');

  return (
    <div className="">
      <Header activeTab={activeTab} onTabChange={setActiveTab} />
      
        { activeTab === 'Bibliography' && <Bibliography />}
        { activeTab === 'Skills' && <Skills />}
        { activeTab === 'Projects' && <Projects />}
        { activeTab === 'Education' && <Education />}
        { activeTab === 'Work Experience' && <Experiencie />}
        { activeTab === 'Contact' && <Contact />}
      
    </div>
  );
}

export default App;
