import React from 'react';
import './cart_home.scss'
import Cart_img from './Cart_home.png'

const Cart_home = () => {
    return (
        <div className='cart_home'>
            <img src={Cart_img} alt=""/>
            <p>TOP women</p>
            <h3>Angels malu zip jeans slim black used</h3>
            <h2>139,00 EUR</h2>
        </div>
    );
};

export default Cart_home;