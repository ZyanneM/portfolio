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
      <div className='text-homepage'>
        <h1 className='name'>Marilyn Olejniczak</h1>
        <h1 className='title'>Développeuse Front-End</h1>
      </div>
    </div>
  )
}

export default App
