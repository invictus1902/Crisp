import React, {useContext} from 'react';
import './home.scss'
import Swiper from './swiper/swiper'
import Chanel from './image_home/chanel.png'
import Burberry from './image_home/burberry.png'
import Dior from './image_home/dior.png'
import Fendi from './image_home/fendi.png'
import Versace from './image_home/versace.png'
import Gucci from './image_home/gucci.png'
import Armani from './image_home/armani.png'
import Choose from './image_home/choose.png'
import BrendNew from './image_home/brendNew.png'
import UpTo from './image_home/upTo.png'
import ShopingFon from './image_home/ShopingFon.png'
import VectorShop from './image_home/VectorShop.png'
import Explore from './image_home/explore.png'
import Cheked_folse from './image_home/Cheked_folse.png'
import Cheked_true from './image_home/Cheked_true.png'
import Cart_home from "../../camponens/cart_home";
import {CustomContext} from "../../Context";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const Home = () => {
    const {brandFilter, cheketBrand, cheketDekete, cheket, product} = useContext(CustomContext)

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };
    return (
        <main className='main container'>
            <Swiper/>
            <section className='main__brend'>
                <h2>chose your brand</h2>
                <div className="main__brend_img">
                    <img src={Chanel} alt=""/>
                    <img src={Burberry} alt=""/>
                    <img src={Dior} alt=""/>
                    <img src={Fendi} alt=""/>
                    <img src={Versace} alt=""/>
                    <img src={Gucci} alt=""/>
                    <img src={Armani} alt=""/>
                </div>
            </section>
            <section className='main__action container'>
                <div className="main__action_left">
                    <div className="main__action_top">
                        <img src={Choose} alt=""/>
                        <div className="main__action_text_left">
                            <h2>choosе <br/>
                                your look</h2>
                            <p>See our clothing collections</p>
                            <button>see offers</button>
                        </div>
                    </div>
                    <div className="main__action_bottom">
                        <div className="main__action_text_left_bottom">
                            <h2>brand new style</h2>
                            <p>Popular clothing brands</p>
                            <button>see offers</button>
                        </div>
                        <img src={BrendNew} alt=""/>
                    </div>
                </div>
                <div className="main__action_right">
                    <div className="main__action_text_right">
                        <h2>Up to <br/>
                            40% off</h2>
                        <p>Special offers and great deals</p>
                        <button>shop now</button>
                    </div>
                    <img src={UpTo} alt=""/>
                </div>
            </section>

            <section className='main__shop_some_wear'>
                <div className="main__shop_some_wear__filter_left">
                    <div className="shop__product__left__filter__brand">
                        <div className="shop__product__left__filter__brand__top">
                            <h2>Brand</h2>
                            <div className="shop__product__left__filter__brand__top__line"></div>
                        </div>
                        <div className="shop__product__left__filter__brand__bottom">
                            {brandFilter.map((el) => (
                                <div
                                    onClick={cheketBrand.find(item => item === el.brand) ? () => cheketDekete(el.brand) : () => cheket(el.brand)}
                                    className="shop__product__left__filter__brand__bottom__options">
                                    <div
                                        className={`${cheketBrand.find(item => item === el.brand) ? "active_brand_img_true" : "active_brand_img_false"}`}>
                                    </div>
                                    <h3>{el.brand}</h3>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                <div className="main__shop_some_wear__product">
                    {product.filter((el,idx)=>{
                        return idx < 8
                    })
                        .filter(el => {
                            if (cheketBrand.length === 0) {
                                return true
                            } else {
                                return cheketBrand.some(item => el.brand === item)
                            }
                        })
                        .map((el) => (
                            <div className="all_product__one_product">
                                <Link onClick={() => toTop()} to={`/single/${el.id}`}>
                                    <img src={el.img[0]} alt=""/>
                                </Link>
                                <div className="all_product__one_product__text">
                                    <p className='all_product__one_product__text__category'>{el.category}</p>
                                    <p className='all_product__one_product__text__title'>{el.title}</p>
                                    <p className='all_product__one_product__text__price'>{el.price},00
                                        EUR
                                    </p>
                                </div>
                            </div>
                        ))
                    }
                    <button>Load more</button>
                </div>
            </section>

            <section className='main__shoping_limits'>
                <div className="main__shoping_limits_text">
                    <img src={VectorShop} alt=""/>
                    <h2>shoping without limits.</h2>
                    <p>You can choose the best option for you, and it does not matter whether you are in Prague or San
                        Francisco. We will deliver your purchase anywhere!</p>
                    <button>shop now</button>
                </div>
                <img src={ShopingFon} alt=""/>
            </section>

            <section className='main__offers'>
                <div className="main__offers_top">
                    <h2>Featured Items</h2>
                    <div className="main__offers_product">
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                    </div>
                </div>
                <div className="main__offers_bottom">
                    <h2>Most Popular</h2>
                    <div className="main__offers_product">
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                        <Cart_home/>
                    </div>
                </div>
            </section>

            <section className='main__explore container'>
                <img src={Explore} alt=""/>
                <div className="main__explore_text">
                    <img src={VectorShop} alt=""/>
                    <h2>EXPLORE THE BEST OF YOU.</h2>
                    <p>You can choose the best option for you, and it does not matter whether you are in Prague or San
                        Francisco.</p>
                    <button>shop now</button>
                </div>
            </section>
            <section className='main__blog'>
                <h3>Blog</h3>
                <div className="main__blog_comments">
                    <div className="main__blog_user_comment">
                        <div className="main__blog_user_comment__top"><h3>Article</h3>
                            <h2>Exactly What To Wear To Every Type Of Wedding This Summer</h2>
                            <p className='main__blog_user_comment__messeng'>A large part of the business here is
                                building up the "experience". Double-page spreads in magazines. Ads on TV. Product
                                placement and sponsorship in golf tournaments, tennis matches and sailing competitions.
                                All of this builds up your perception of the brand - and additionally, it costs
                                money.</p>
                        </div>
                        <div className="main__blog_user_comment__bottom">
                            <div className="main__comment_line"></div>
                            <p className='main__blog_user_comment__data'>21 January 2018 by guido</p>
                        </div>

                    </div>
                    <div className="main__blog_user_comment">
                        <div className="main__blog_user_comment__top">
                            <h3>TIPS</h3>
                            <h2>Exactly What To Wear To Every Type Of Wedding This Summer</h2>
                            <p className='main__blog_user_comment__messeng'>When selling 70% fewer shirts, however,
                                there are fewer shirts on the market, making it more exclusive, and therefore worth the
                                money, for those to whom it matters. </p>
                        </div>
                        <div className="main__blog_user_comment__bottom">
                            <div className="main__comment_line"></div>
                            <p className='main__blog_user_comment__data'>21 January 2018 by guido</p>
                        </div>
                    </div>
                    <div className="main__blog_user_comment">
                        <div className="main__blog_user_comment__top">
                            <h3>TIPS</h3>
                            <h2>Exactly What To Wear To Every Type Of Wedding This Summer</h2>
                            <p className='main__blog_user_comment__messeng'>A large part of the business here is
                                building up the "experience". Double-page spreads in magazines. Ads on TV. Product
                                placement and sponsorship in golf tournaments, tennis matches and sailing competitions.
                                All of this builds up your perception of the brand - and additionally, it costs
                                money.</p>
                        </div>
                        <div className="main__blog_user_comment__bottom">
                            <div className="main__comment_line"></div>
                            <p className='main__blog_user_comment__data'>21 January 2018 by guido</p>
                        </div>
                    </div>
                    <div className="main__blog_user_comment">
                        <div className="main__blog_user_comment__top">
                            <h3>Article</h3>
                            <h2>Exactly What To Wear To Every Type Of Wedding This Summer</h2>
                            <p className='main__blog_user_comment__messeng'>When selling 70% fewer shirts, however,
                                there are fewer shirts on the market, making it more exclusive, and therefore worth the
                                money, for those to whom it matters. </p>
                        </div>
                        <div className="main__blog_user_comment__bottom">
                            <div className="main__comment_line"></div>
                            <p className='main__blog_user_comment__data'>21 January 2018 by guido</p>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    );
};

export default Home;