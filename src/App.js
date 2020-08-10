import React from 'react';
import './App.css';

import Aboutme from './components/Aboutme/Aboutme';
import Navbar from './components/Navbar/Navbar';
import Projects from './components/Projects/Projects';
import Contactme from './components/Contactme/Contactme';

const App = () => {
  return (
    <div>
      <Navbar />
      <Aboutme />
      <Projects />
      <Contactme />
    </div>
  );
}

export default App;
