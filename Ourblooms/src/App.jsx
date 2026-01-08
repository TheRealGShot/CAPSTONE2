
import './App.css'
import Navbar from './components/Navbar.jsx'
import Home from './components/Home.jsx'
import Gallery from "./pages/Gallery.jsx"

import {BrowserRouter, Routes, Route} from 'react-router-dom'

function App() {

  return (
    <>
      <Navbar/>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/gallery" element={<Gallery/>}/>
        </Routes>
      </BrowserRouter>

      
      
      
    </>
  )
}

export default App
