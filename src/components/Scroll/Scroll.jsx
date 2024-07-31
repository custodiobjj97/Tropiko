import React, { useEffect, useRef } from 'react'
import './scroll.css'
const Scroll = ({children}) => {
    const element = useRef(null);

    useEffect(()=>{
        const handleScroll=()=>{
            const top = element.current.getBoundingClientRect().top;
            const halfHeight = window.innerHeight * 0.6;
            const isSection = (top - halfHeight) < 0
            if(isSection){
                element.current.classList.add('visible')
            }
        }

        handleScroll()

        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll)
        }
    },[])
  return (
    <section ref={element} className='scroll'>
         {children}
    </section>
  )
}

export default Scroll