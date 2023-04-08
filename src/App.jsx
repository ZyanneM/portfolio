import { useState } from 'react'
import './App.css'
import Navmenu from './components/Navmenu/Navmenu.jsx'
import Homepage from './components/Homepage/Homepage'
import About from './components/About/About'

function App() {

  return (
    <div className="App">
      <Navmenu />
      <Homepage/>
      <About/>
    </div>
  )
}

export default App
