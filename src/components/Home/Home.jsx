import React from 'react'
import './home.css';
import Button from '../Button/Button';
const Home = () => {
  return (
    <section className='home' id='home'>
        <div className="home-text">
        <h1>
            Welcome to <br/>
            Our Fruits Shop
        </h1> 
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.</p>
        <Button text='Shop Now' className='btn'/>
        <Button text='Contact us' className='btn-border'/>
        </div>
        <div className="home-image">
            <img src="./images/slide-img.png" alt="" />
        </div>
    </section>
  )
}

export default Home