import React from 'react';
import './shop.scss'
import ShopBanner from './img_shop/ShopBanner.png'
import Vector from './img_shop/VectorBannerShop.png'

const Shop = () => {
    return (
        <section className='shop container'>
            <section className='shop__banner'>
                <div className="shop__banner__text">
                    <div className="">
                        <img src={Vector} alt=""/>
                        <h1>shoping without limits.</h1>
                        <p>You can choose the best option for you, and it does not matter whether you are in Prague or
                            San Francisco. We will deliver your purchase anywhere!</p>
                        <button>shop now</button>
                    </div>
                </div>
                <img src={ShopBanner} alt=""/>
            </section>
            <div className="shop__userLocation">
                <p>Home / Womens Dress / Best Chose</p>
            </div>
            <section classNabe="shop__product">
                
            </section>
        </section>
    );
};

export default Shop;