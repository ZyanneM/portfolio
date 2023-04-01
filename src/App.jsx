import { useState } from 'react'
import './App.css'
import Navmenu from './components/Navmenu/Navmenu.jsx'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navmenu />
      {/* <h1>Bienvenue sur mon Portfolio</h1> */}
      <div className='home'></div>
      <h1>Marilyn Olejniczak</h1>
      <h1>Développeuse Front-End</h1>
    </div>
  )
}

export default App
