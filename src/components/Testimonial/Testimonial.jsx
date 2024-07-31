import React from 'react'
import './testimonial.css';
import Slides from '../Slide/Slides';
const Testimonial = () => {
    const datas=[
        {
            id:'slide-1',
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
            img:'./images/client.png',
        },
        {
            id:'slide-2',
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
            img:'./images/client.png',
        },
        {
            id:'slide-3',
            text:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure",
            img:'./images/client.png',
        }
    ]

  return (
    <section className='testimonial' id='testimonial'>
       <Slides slides={datas}/>
    </section>
  )
}

export default Testimonial