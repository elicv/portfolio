import React, { useState } from 'react';

import './App.css';
import Header from './Header/Header';


import Bibliography from './Components/Bibliography';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Experiencie from './Components/Experiencie';
import Contact from './Components/Contact';
import 'animate.css/animate.min.css';

function App() {

  const [activeTab, setActiveTab] = useState('Education');

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
