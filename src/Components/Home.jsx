import React from 'react'
import Navbar from './Navbar'
import Slider from "./Slider"
import Main from './Main'
import Footer from './Footer'
const Home = () => {
  return (
    <div>
        <Navbar/>
        <br/>
        <Slider/>
        <br/>
        <Main/>
        <Footer/>
    </div>
  )
}

export default Home