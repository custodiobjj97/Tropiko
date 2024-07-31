import React from 'react';
import './contact.css'

const Contact = () => {
  return (
    <section className='contact' id='contact'>
        <h1>Contact Us</h1>
        <form action="#">
            <input type="text" placeholder='Name'/>
            <input type="text" placeholder='Phone Number'/>
            <input type='email' placeholder='Email'/>
            <textarea placeholder='Message'/>
        </form>
    </section>
  )
}

export default Contact