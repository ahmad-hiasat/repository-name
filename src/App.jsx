import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import NavBar from './componants/NavBar'
import Me from './componants/Me'

import { Link } from "react-scroll";
function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <div style={{width:'100%' , height:'100vh' , background:'linear-gradient(rgba(30, 30, 46, 1), rgba(48, 48, 72, 1));'}}>
      <NavBar ></NavBar>
      <Me></Me>
      </div>

    
    </>
  )
}

export default App
