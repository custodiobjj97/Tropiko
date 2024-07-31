import React, { useEffect, useRef, useState } from 'react';
import './slide.css'

const Slides = ({slides}) => {
    const [active,setActive]=useState(0);
    const [position,setPosition]=useState(0);

    const contentRef = useRef();

    useEffect(()=>{
        const { width } = contentRef.current.getBoundingClientRect();

        setPosition(-(width * active))
    },[active])

    function slidePrev(){
        if(active > 0){
            setActive(active - 1)
        }else{
            setActive(slides.length - 1)
        }
    }

    function slideNext(){
        if(active < slides.length - 1){
            setActive(active + 1)
        }else{
            setActive(0)
        }
    }
  return (
    <section className='wrapper'>
        <div className="slide" ref={contentRef}  style={{transform:`translateX(${position}px)`}}>
            {slides.map((slide)=>{
                return (
                    <div key={slide.id} className='item'>
                        <img src={slide.img} alt="" />
                        <p>{slide.text}</p>
                    </div>
                )
            })}
        </div>
        <nav className='nav'>
            <button onClick={slidePrev}>Prev</button>
            <button onClick={slideNext}>Next</button>
        </nav>
    </section>
  )
}

export default Slides