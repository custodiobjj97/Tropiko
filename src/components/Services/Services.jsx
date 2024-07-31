import React from 'react';
import './service.css';
import Button from '../Button/Button';

const Services = () => {
    const datas=[{
        img:'./images/card-item-1.png',
        title:'Orange',
        describe:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable.",
    },{
        img:'./images/card-item-2.png',
        title:'Grapes',
        describe:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    },{
        img:'./images/card-item-3.png',
        title:'Gauva',
        describe:"There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable."
    }]
  return (
    <section className='service' id='services'>
        <h2>Our Services</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
        <div className="grid-boxs">
            {datas.map((box)=>{
                return <div className='box' key={box.title}>
                    
                    <img src={box.img} alt="" />
                    <h3>{box.title}</h3>
                    <p>{box.describe}</p>
                </div>
            })}
        </div>
        <Button text='Read More' className='btn-border'/>

        <div className="shop-services">
        <h2>Fresh Fruits</h2>
        <p>There are many variations of passages of Lorem Ipsum available, but the majority have</p>
         <div className="shop-flex">
            <div className="col">
                <div className='col-text'>
                    <h3>Best Fresh Orange</h3>
                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't <br/>
                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be</p>
                    <Button text='Buy Now' className='btn'/>
                </div>
                <div className='col-image'><img src="./images/orange.png" alt="" /></div>
            </div>
            <div className="col">
                <div className='col-text'>
                    <h3>Best Fresh Grapes</h3>
                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't <br/>
                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be</p>
                    <Button text='Buy Now' className='btn'/>
                </div>
                <div className='col-image'><img src="./images/grapes.png" alt="" /></div>
            </div>
            <div className="col">
                <div className='col-text'>
                    <h3>Best Fresh Gauva</h3>
                    <p>but the majority have suffered alteration in some form, by injected humour, or randomised words which don't <br/>
                    look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be</p>
                    <Button text='Buy Now' className='btn'/>
                </div>
                <div className='col-image'><img src="./images/gauva.png" alt="" /></div>
            </div>
         </div>
        </div>
    </section>
  )
}

export default Services