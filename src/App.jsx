import React from 'react'
import './App.css'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import Services from './components/Services/Services'
import Scroll from './components/Scroll/Scroll'
import Banner from './components/Banner/Banner'
import Testimonial from './components/Testimonial/Testimonial'
import Contact from './components/Contatc/Contact'
import Footer from './components/Footer/Footer'

function App() {
  

  return (
    <>
      <Header/>
      <Scroll children={<Home/>}/>
      <Scroll children={<Services/>}/>
      <Scroll children={<Banner/>}/>
      <Scroll children={<Testimonial/>} />
      <Scroll children={<Contact/>}/>
      <Footer/>
    </>
  )
}

export default App
