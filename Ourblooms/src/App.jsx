import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar.jsx'
import Hero from './components/Hero.jsx'

import c from "./assets/carousel_images/Image.png"
import c1 from "./assets/carousel_images/Image-1.png"
import c2 from "./assets/carousel_images/Image-2.png"
import c3 from "./assets/carousel_images/Image-3.png"
import c4 from "./assets/carousel_images/Image-4.png"

import sec1 from './assets/section_images/sec1.png'
import sec2 from './assets/section_images/sec2.png'
import sec3 from './assets/section_images/sec3.png'

import midsec from './assets/mid_sec/midsec.png'
import midsec1 from './assets/mid_sec/midsec1.png'
import midsec2 from './assets/mid_sec/midsec2.png'

import footer from './assets/footer/footer.png'
import footer1 from './assets/footer/footer1.png'
import footer2 from './assets/footer/footer2.png'
function App() {

  return (
    <>
      <Navbar/>
      <Hero/>
      {/*writing the main section*/}
      <div>
        <div className="who_we_are_container">
          <p className="caption1">WHO WE ARE</p>
          <p className="heading1">We're Our Blooms® and we're here to help you find your floral story.</p>
          <button className='button_danger'>About Us</button>
        </div>
      

        <div className="carousel">
            <img src={c} alt="carousel image"/>
            <img src={c1} alt="carousel image"/>
            <img src={c2} alt="carousel image"/>
            <img src={c3} alt="carousel image"/>
            <img src={c4} alt="carousel image"/>
        </div>

        <div className="what_we_do">
          <p className="heading1">WHAT WE DO</p>
          <p className="paragraph1">We bring a touch of that simple magic into your world.</p>
        </div>
        <hr/>

        <div className="section1">
          <p className="heading1">1</p>
          <img src={sec1} alt="section image"/>
          <p className="heading1">FLORAL INSTALLATIONS</p>
          <p className="paragraph1">Living art for homes, businesses, and events.</p>
          <hr/>
        </div>
        <div className="section1">
          <p className="heading1">2</p>
          <img src={sec2} alt="section image"/>
          <p className="heading1">NATIVE PLANT ARRANGEMENTS</p>
          <p className="paragraph1">Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
          <hr/>
        </div>
        <div className="section1">
          <p className="heading1">3</p>
          <img src={sec3} alt="section image"/>
          <p className="heading1">CUSTOM FLORAL CONCEPTS</p>
          <p className="paragraph1">Your vision, our blooms. We build arrangements that are both personal and exquisitely simple. Whether it’s a private retreat or a public space, we craft floral experiences that bloom beyond expectations.</p>
          <hr/>
        </div>

        <picture>
          <source media="(min-width:1200px)" srcSet={midsec}/>
          <source media="(min-width:800px)" srcSet={midsec1}/>
          <img src={midsec2} alt="Mid Section Image"/>
        </picture>

        <div className="work_with_us">
          <p className="caption1">Work with us</p>
          <p className="heading2">Discover how we can add a touch of natural beauty to your next event.</p>
          <button className="button_danger">.About US</button>
        </div>

        <picture>
          <source media="(min-width:1200px)" srcSet={footer}/>
          <source media="(min-width:800px)" srcSet={footer1}/>
          <img src={footer2} alt="Footer Section Image"/>
        </picture>

      </div>
    </>
  )
}

export default App
