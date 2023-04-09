import { useState } from 'react'
import './App.css'
import Navmenu from './components/Navmenu/Navmenu.jsx'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'
import Skills from './components/Skills/Skills';
import Work from './components/Work/Work';

function App() {

  return (
    <div className="App">
      <Navmenu />
      <Homepage/>
      <About/>
      <Skills/>
      <Work/>
    </div>
  )
}

export default App
