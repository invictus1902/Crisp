import React from 'react';
import './slode_1.scss'
import Image1 from './img/image 1.png'
import Image2 from './img/image 2.png'
import Vector from './img/Vector.png'

const Slide1 = () => {
    return (
        <section className='slide_1 container'>
            <div className="slide_1__content">
                <div className="slide_1__text">
                    <img src={Vector} alt=""/>
                    <h1>SUMMER SALE <br/>
                        GET <span>30% OFF </span> <br/>
                        ON ALL DRESS.</h1>
                    <button>shop now</button>
                </div>
                <div className="slide_1__img">
                    <img className='slide_1__img1' src={Image1} alt=""/>
                    <img className='slide_1__img2' src={Image2} alt=""/>
                </div>
            </div>
            <div className="slide_1__bottom">

            </div>
        </section>
    );
};

export default Slide1;