import React from 'react';
import './shop.scss'
import ShopBanner from './img_shop/ShopBanner.png'
import Vector from './img_shop/VectorBannerShop.png'
import Cheked_folse from '../home/image_home/Cheked_folse.png'
import Cheked_true from '../home/image_home/Cheked_true.png'
import Filter_color from './img_shop/filter_color.png'

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
                <div className="shop__product__left">
                    <div className="shop__product__left__filter">
                        <div className="shop__product__left__filter__brand">
                            <div className="shop__product__left__filter__brand__top">
                                <h2>Brand</h2>
                                <div className="shop__product__left__filter__brand__top__line"></div>
                            </div>
                            <div className="shop__product__left__filter__brand__bottom">
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>State</h3>
                                </div>
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>Cooper</h3>
                                </div>
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_true} alt=""/>
                                    <h3>bardot</h3>
                                </div>
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>alfani</h3>
                                </div>
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>cece</h3>
                                </div>
                                <div className="shop__product__left__filter__brand__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>donna ricco</h3>
                                </div>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__size">
                            <div className="shop__product__left__filter__brand__top">
                                <h2>Size (Inches)</h2>
                                <div className="shop__product__left__filter__brand__top__line"></div>
                            </div>
                            <div className="shop__product__left__filter__size__bottom">
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>osfa</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w26</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w27</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w28</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w29</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w30</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w31</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w32</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w33</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w34</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w35</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w36</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w38</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w40</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w42</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w44</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w46</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w48</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w50</h4>
                                </div>
                                <div className="shop__product__left__filter__size__bottom__options">
                                    <h4>w52</h4>
                                </div>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__dress">
                            <div className="shop__product__left__filter__brand__top">
                                <h2>Dress length</h2>
                                <div className="shop__product__left__filter__brand__top__line"></div>
                            </div>
                            <div className="shop__product__left__filter__dress__bottom">
                                <div className="shop__product__left__filter__dress__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>short</h3>
                                </div>
                                <div className="shop__product__left__filter__dress__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>knee length</h3>
                                </div>
                                <div className="shop__product__left__filter__dress__bottom__options">
                                    <img src={Cheked_true} alt=""/>
                                    <h3>hight low</h3>
                                </div>
                                <div className="shop__product__left__filter__dress__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>long</h3>
                                </div>
                                <div className="shop__product__left__filter__dress__bottom__options">
                                    <img src={Cheked_folse} alt=""/>
                                    <h3>midi</h3>
                                </div>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__color">
                            <div className="shop__product__left__filter__brand__top">
                                <h2>Dress length</h2>
                                <div className="shop__product__left__filter__brand__top__line"></div>
                            </div>
                            <div className="shop__product__left__filter__color__bottom__options">
                                <img src={Filter_color} alt=""/>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__price_range">
                            <div className="shop__product__left__filter__brand__top">
                                <h2>Price Range</h2>
                                <div className="shop__product__left__filter__brand__top__line"></div>
                            </div>
                            <div className="shop__product__left__filter__price_range__bottom">
                                <div className="shop__product__left__filter__price_range__bottom__options__top">
                                    <p>0.00 EUR</p>
                                    <p>250.00 EUR</p>
                                </div>
                                <input type="range"/>
                                <div className="shop__product__left__filter__price_range__bottom__options__bottom">
                                    <button>Apply</button>
                                </div>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__brand__top">
                            <h2>Dress Length</h2>
                            <div className="">
                                <div className="shop__product__left__filter__about_dresses__top__line__vertical">

                                </div>
                                <div className="shop__product__left__filter__about_dresses__top__line__gorizontal">

                                </div>
                            </div>
                        </div>
                        <div className="shop__product__left__filter__about_dresses">
                            <h2>About Dresses</h2>
                            <p>Every day we’re gonna be dropping the latest trends to help you nail every Summer sitch.
                                Whether it’s a graduation, your mate's wedding, or just a cute day at the races with the
                                gals, our occasion dresses have got you covered. Not looking for something fancy? No
                                stress. We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses, oversized
                                shirt dresses).</p>
                        </div>
                    </div>
                    <div className="shop__product__left__line">

                    </div>
                </div>
                <div className="shop__product__right">
                    <div className="shop__product__right__price_filter">

                    </div>
                    <div className="shop__product__right__product">

                    </div>
                </div>
            </section>
        </section>
    );
};

export default Shop;