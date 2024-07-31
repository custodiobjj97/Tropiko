import React, { useEffect, useRef, useState,useContext } from 'react'

import {FaBars,FaSearch,FaTimes} from 'react-icons/fa'
import "./header.css";
const Header = () => {
    const [open,setOpen]=useState(false);
    const menuRef = useRef(null);
    
    const navLinks = ['home','services','testimonial' ,'contact']
    
   
        const handleClickNav=(e)=>{
            e.preventDefault()
            const href = e.target.getAttribute('href')
            const element = document.querySelector(href)
            element.scrollIntoView({ behavior: "smooth", block: "start"});
            
        }
    

    const handleClick=()=>{
        setOpen(!open)
    }

    const handleOutsideClick=(e)=>{
        if(menuRef.current && !menuRef.current.contains(e.target)){
            setOpen(false)
        }

    }
    useEffect(()=>{
        document.addEventListener('mousedown', handleOutsideClick);

        return () => {
            document.removeEventListener('mousedown', handleOutsideClick)
        }
    },[])
  return (
    <header>
       <a href="#" className='logo'>
        <img src="./images/logo.png" alt="" /> Tropiko
        </a>

        <nav ref={menuRef}>
            <ul className={open ? "list-menu open" : "list-menu"}>
                 {navLinks.map((link)=>{
                    return <li onClick={handleClickNav}><a href={'#'+link}>{link}</a></li>
                 })}
                <li><a href="#" className='btn-navbar'>GET A QUOTE</a></li>
                <li><a href="#"><FaSearch/></a></li>
            </ul>
        </nav>

        <div onClick={handleClick} className="toggle">
            {open ? <FaTimes/> : <FaBars/>}
        </div>
    </header>
  )
}

export default Header