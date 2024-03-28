import React, {useEffect, useState} from 'react';
import './shop.scss'
import ShopBanner from './img_shop/ShopBanner.png'
import Vector from './img_shop/VectorBannerShop.png'
import axios from "axios";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";

const Shop = () => {
    const [product, setProduct] = useState([])
    useEffect(() => {
        axios('http://localhost:3030/product_crisp')
            .then(({data}) => {
                setProduct(data)
            })
    }, [])


    const [sizeFilter, setSizeFilter] = useState([])
    useEffect(() => {
        axios('http://localhost:3030/product_size')
            .then(({data}) => {
                setSizeFilter(data)
            })
    }, [])


    const [brandFilter, setBrandFilter] = useState([])
    useEffect(() => {
        axios('http://localhost:3030/product_brand')
            .then(({data}) => {
                setBrandFilter(data)
            })
    }, [])

    const [cheketBrand, setCheketBrand] = useState([])
    const cheket = (ber) => {
        const find = brandFilter.find(el => el.brand === ber)
        setCheketBrand([...cheketBrand, find.brand])
    }
    const cheketDekete = (ber) => {
        const find = cheketBrand.find(el => el === ber)
        setCheketBrand(cheketBrand.filter((el) => {
            if (el !== ber) {
                return [...cheketBrand, el !== find]
            }
        }))
    }


    const [sizeFilterActive, setSizeFilterActive] = useState([])
    const activeSize = (sez) => {
        const find = sizeFilter.find(el => el.size_filter === sez)
        setSizeFilterActive([...sizeFilterActive, find.size_filter])
    }

    const activeSizeDelete = (sez) => {
        const find = sizeFilter.find(el => el === sez)
        setSizeFilterActive(sizeFilterActive.filter((el) => {
            if (el !== sez) {
                return [...sizeFilterActive, el !== find]
            }
        }))
    }


    const [inputr, SetInputr] = useState(0)
    let inputRange = (num) => {
        return num
    }

    const [mainInd, setMainInd] = useState(0)
    const [ind, setInd] = useState(0)
    const handleClick = (mainIndex, index) => {
        setInd(index)
        setMainInd(mainIndex)
    };


    const [color, setColor] = useState([])
    useEffect(() => {
        axios('http://localhost:3030/product_color')
            .then(({data}) => {
                setColor(data)
            })
    }, [])

    const [colorActive, setColorActive] = useState([])
    const colorDap = (col) => {
        const find = color.find(el => el.color === col)
        setColorActive([...colorActive, find.color])
        console.log(colorActive)
    }

    const colorDelete = (col) => {
        const find = colorActive.find(el => el === col)
        setColorActive(colorActive.filter((el) => {
            if (el !== col) {
                return [...colorActive, el !== find]
            }
        }))
    }

    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth:true
        })
    };
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
            <section className="shop__product">
                <div className="content_shop">
                    <div className="shop__product__left">
                        <div className="shop__product__left__filter">
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
                            <div className="shop__product__left__filter__size">
                                <div className="shop__product__left__filter__brand__top">
                                    <h2>Size (Inches)</h2>
                                    <div className="shop__product__left__filter__brand__top__line"></div>
                                </div>
                                <div className="shop__product__left__filter__size__bottom">
                                    {sizeFilter.map((el) => (
                                        <div
                                            onClick={sizeFilterActive.find(item => item === el.size_filter) ? () => activeSizeDelete(el.size_filter) : () => activeSize(el.size_filter)}
                                            className={`${sizeFilterActive.find(item => item === el.size_filter) ? "active_size" : "shop__product__left__filter__size__bottom__options"}`}>
                                            <h4>{el.size_filter}</h4>
                                        </div>
                                    ))}
                                </div>
                            </div>
                            <div className="shop__product__left__filter__color">
                                <div className="shop__product__left__filter__brand__top">
                                    <h2>Color</h2>
                                    <div className="shop__product__left__filter__brand__top__line"></div>
                                </div>
                                <div className="shop__product__left__filter__color__bottom__options">
                                    {
                                        color.map((el, indexColor) => (
                                            <div
                                                className={`${colorActive.find(item => item === el.color) ? 'shop__product__left__filter__color__bottom__options__buttonActive'
                                                    :
                                                    'shop__product__left__filter__color__bottom__options__button'}`}>
                                                <div
                                                    className='shop__product__left__filter__color__bottom__options__button'
                                                    onClick={colorActive.find(item => item === el.color) ? () => colorDelete(el.color) : () => colorDap(el.color)}
                                                    style={{background: el.color, width: 20, height: 20}}>
                                                </div>
                                            </div>
                                        ))
                                    }
                                </div>
                            </div>
                            <div className="shop__product__left__filter__price_range">
                                <div className="shop__product__left__filter__brand__top">
                                    <h2>Price Range</h2>
                                    <div className="shop__product__left__filter__brand__top__line"></div>
                                </div>
                                <div className="shop__product__left__filter__price_range__bottom">
                                    <div className="shop__product__left__filter__price_range__bottom__options__top">
                                        <p>{inputr}.00 EUR</p>
                                        <p>500.00 EUR</p>
                                    </div>
                                    <input onChange={(e) => SetInputr(e.target.value)} type="range" min="0" max="500"/>
                                    <div className="shop__product__left__filter__price_range__bottom__options__bottom">
                                        <button onClick={() => inputRange(inputr)}>Apply</button>
                                    </div>
                                </div>
                            </div>
                            <div className="shop__product__left__filter__about_dresses">
                                <h2>About Dresses</h2>
                                <p>Every day we’re gonna be dropping the latest trends to help you nail every Summer
                                    sitch.
                                    Whether it’s a graduation, your mate's wedding, or just a cute day at the races with
                                    the
                                    gals, our occasion dresses have got you covered. Not looking for something fancy? No
                                    stress. We’ve got day dresses for days (aka bodycon dresses, t-shirt dresses,
                                    oversized
                                    shirt dresses).</p>
                            </div>
                        </div>
                        <div className="shop__product__left__line">

                        </div>
                    </div>
                    <div className="shop__product__right">
                        <div className="shop__product__right__price_filter">

                        </div>
                        <div className="shop__product__right__all_product">
                            <div className="all_product">
                                {product
                                    .filter(el => {
                                        if (sizeFilterActive.length === 0) {
                                            return true
                                        } else {
                                            return sizeFilterActive.some(item => el.size === item)
                                        }
                                    })
                                    .filter(el => {
                                        if (cheketBrand.length === 0) {
                                            return true
                                        } else {
                                            return cheketBrand.some(item => el.brand === item)
                                        }
                                    })
                                    .filter(el => {
                                        if (colorActive.length === 0) {
                                            return true
                                        } else {
                                            return colorActive.some(item => el.color.some(err => err === item))
                                        }
                                    })
                                    .filter((el) => {
                                        if (inputr > 0) {
                                            return el.price <= inputr
                                        }
                                        return true
                                    })
                                    .map((el, mainIndex) => (
                                        <div className="all_product__one_product">
                                            <Link onClick={()=>toTop()} to={`/single/${el.id}`}>
                                                <img src={el.img[mainInd === mainIndex ? ind : 0]} alt=""/>
                                            </Link>
                                            <div className="all_product__one_product__text">
                                                <p className='all_product__one_product__text__category'>{el.category}</p>
                                                <p className='all_product__one_product__text__title'>{el.title}</p>
                                                <p className='all_product__one_product__text__price'>{el.price},00
                                                    EUR</p>
                                                <div className="all_product__one_product__color">
                                                    {el.color.map((item, index) => (
                                                        <div
                                                            className={`${mainIndex === mainInd ? ind === index ? 'all_product__one_product__color__one_color_active' : '' : ''}`}>
                                                            <div
                                                                className='all_product__one_product__color__one_color'
                                                                onClick={() => handleClick(mainIndex, index)}
                                                                style={{background: item}}
                                                            >
                                                            </div>
                                                        </div>
                                                    ))
                                                    }
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>
    );
};

export default Shop;