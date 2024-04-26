import logo from './logo.svg';
import './App.css';
import Header from './Header/Header';
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom';

import Bibliography from './Components/Bibliography';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import Education from './Components/Education';
import Experiencie from './Components/Experiencie';
import Contact from './Components/Contact';

function App() {
  return (
    <div className="">
      <Router>
        <Header/>
        <Routes>
          <Route path='/bibliography' element={<Bibliography/>} />
          <Route path='/skills' element={<Skills/>} />
          <Route path='/projects' element={<Projects/>} />
          <Route path='/education' element={<Education/>} />
          <Route path='/experience' element={<Experiencie/>} />
          <Route path='/contact' element={<Contact/>} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
