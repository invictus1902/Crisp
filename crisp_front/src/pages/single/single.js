import React, {useContext, useEffect, useState} from 'react';

import './single.scss'
import Facebook from './Facebook.png'
import Twiter from './Twiter.png'
import Instagram from './Instagram.png'
import Confirmed from './Confirmed.png'
import Save from './save.png'
import Minus from './minus.png'
import Plus from './plus.png'
import {CustomContext} from "../../Context";
import {useLocation} from "react-router-dom";
import axios from "axios";


const Single = () => {
    const {
        activeAccordion1,accordion1,activeAccordion2,accordion2,
        accordion3,activeAccordion3,addBasket,basket,deleteObject,oneProduct,setOneProduct
    } = useContext(CustomContext)

    const id = useLocation().pathname.split('/').at(-1);
    useEffect(() => {
        axios(`http://localhost:3030/product_crisp/${id}`)
            .then(({data}) => setOneProduct(data))
    }, []);

    const onePlus = () => {
        setOneProduct(prevProduct => ({
            ...prevProduct,
            quantity: prevProduct.quantity < prevProduct.quantity_max ? prevProduct.quantity + 1 : prevProduct.quantity_max
        }))
    };

    const oneMinus = () => {
        setOneProduct(prevProduct => ({
            ...prevProduct,
            quantity: prevProduct.quantity > 1 ? prevProduct.quantity - 1 : 1
        }))
    };
    const [colorSingle, setColorSingle] = useState(0)
    const colorActiveSingle = (err) => {
        setColorSingle(err)
    };


    return (
        <section className='single container'>
            <div className="single__product">
                <div className="single__product__img">
                    <div className="single__product__img__all">
                        {oneProduct.img && oneProduct.img.map((image, index) => (
                            <img src={'../' + image} alt="" onClick={() => colorActiveSingle(index)}/>
                        ))}
                    </div>
                    <div className="single__product__img__one">
                        {oneProduct.img && oneProduct.img.length > 0 &&
                        <img src={'../' + oneProduct.img[colorSingle]} alt=""/>}
                        <div className="single__product__img__one__share">
                            <p>Share:</p>
                            <img src={Facebook} alt=""/>
                            <img src={Twiter} alt=""/>
                            <img src={Instagram} alt=""/>
                        </div>
                    </div>
                </div>
                <div className="single__product__details">
                    <h3>{oneProduct.brand}</h3>
                    <h2>{oneProduct.title}</h2>
                    <p className="single__product__details__text_color">Select Color</p>
                    <div className="single__product__details__color__all">
                        {oneProduct.color && oneProduct.color.length > 0 && oneProduct.color.map((item, index) => (
                            <div>
                                <div
                                    className='all_product__one_product__color__one_color'
                                    style={{background: item}}
                                    onClick={() => colorActiveSingle(index)}
                                >
                                </div>
                            </div>
                        ))}
                    </div>
                    <div className="single__product__details__size">
                        <div className="single__product__details__size__top">
                            <p>Select size (Inches)</p>
                            <p>Size guide</p>
                        </div>
                        <div className="single__product__details__size__bottom">
                            {oneProduct.size_all && oneProduct.size_all.length > 0 && oneProduct.size_all.map((item, index) => (
                                <p>{item}</p>
                            ))}
                        </div>
                    </div>
                    <div className="single__product__details__quantity_price">
                        <div className="single__product__details__quantity_price__quantity">
                            <p>Quantity</p>
                            <div className="single__product__details__quantity_price__quantity__options">
                                <p onClick={oneMinus}
                                   className="single__product__details__quantity_price__quantity__options__minus"
                                >-</p>
                                <p className="single__product__details__quantity_price__quantity__options__total">{oneProduct.quantity}</p>
                                <p onClick={onePlus}
                                   className="single__product__details__quantity_price__quantity__options__plus"
                                >+</p>
                            </div>
                        </div>
                        <div className="single__product__details__quantity_price__price">
                            <p>price total</p>
                            <p>{oneProduct.quantity * oneProduct.price},00 EUR</p>
                        </div>
                    </div>
                    <div className="single__product__details__button">
                        <button className='single__product__details__button__to_bag'>Add to bag</button>
                        {basket.find(item=>item.id === oneProduct.id)
                            ?
                            <div>
                                <button className='single__product__details__button__save' onClick={()=>deleteObject(oneProduct.id)}>удалить из корзины</button>
                            </div>

                            :
                            <button
                                onClick={()=>addBasket(oneProduct)}
                                className='single__product__details__button__save'><img src={Save} alt=""/> Save
                            </button>
                        }

                    </div>
                    <div className="single__product__details__info_product">
                        <p><img src={Confirmed} alt=""/> Free shipping</p>
                        <p>Product code: RFKK1024</p>
                        <p>TAGS: NEW arrivals, Top women</p>
                    </div>
                </div>
            </div>
            <div className="single__product_information">
                <div className="single__product_information__accordion">
                    <div className="single__product_information__accordion__top">
                        <h2>Details</h2>
                        <img onClick={() => activeAccordion1()} src={`${accordion1 === true ? Minus : Plus}`} alt=""/>
                    </div>
                    <div
                        className={`${accordion1 === true ? "single__product_information__accordion__bottom" : "active_none"}`}>
                        <div className="single__product_information__accordion__bottom__line">

                        </div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div>
                                <h4>ABOUT PRODUCT</h4>
                                <p>Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts.
                                    This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems,
                                    and
                                    a cropped fit.</p>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Ruffled hems
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Cropped length
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Model is wearing a small
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        100% rayon
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Machine washable
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginLeft: 52}}>
                            <h4>SHIPPING</h4>
                            <p>We offer Free Standard Shipping for all orders over $75 to the 50 states and the District
                                of Columbia.
                                The minimum order value must be $75 before taxes, shipping and handling. Shipping fees
                                are non-refundable.
                                <br/><br/>
                                Please allow up to 2 business days (excluding weekends, holidays, and sale days) to
                                process your order.
                                <br/><br/>
                                Processing Time + Shipping Time = Delivery Time</p>
                        </div>
                    </div>
                </div>
                <div className="single__product_information__accordion">
                    <div className="single__product_information__accordion__top">
                        <h2>Other information</h2>
                        <img onClick={() => activeAccordion2()} src={`${accordion2 === true ? Minus : Plus}`} alt=""/>
                    </div>
                    <div
                        className={`${accordion2 === true ? "single__product_information__accordion__bottom" : "active_none"}`}>
                        <div className="single__product_information__accordion__bottom__line">

                        </div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div>
                                <h4>ABOUT PRODUCT</h4>
                                <p>Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts.
                                    This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems,
                                    and
                                    a cropped fit.</p>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Ruffled hems
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Cropped length
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Model is wearing a small
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        100% rayon
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Machine washable
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginLeft: 52}}>
                            <h4>SHIPPING</h4>
                            <p>We offer Free Standard Shipping for all orders over $75 to the 50 states and the District
                                of Columbia.
                                The minimum order value must be $75 before taxes, shipping and handling. Shipping fees
                                are non-refundable.
                                <br/><br/>
                                Please allow up to 2 business days (excluding weekends, holidays, and sale days) to
                                process your order.
                                <br/><br/>
                                Processing Time + Shipping Time = Delivery Time</p>
                        </div>
                    </div>
                </div>
                <div className="single__product_information__accordion">
                    <div className="single__product_information__accordion__top">
                        <h2>Another tab</h2>
                        <img onClick={() => activeAccordion3()} src={`${accordion3 === true ? Minus : Plus}`} alt=""/>
                    </div>
                    <div
                        className={`${accordion3 === true ? "single__product_information__accordion__bottom" : "active_none"}`}>
                        <div className="single__product_information__accordion__bottom__line">

                        </div>
                        <div style={{display: "flex", flexDirection: "column", justifyContent: "space-between"}}>
                            <div>
                                <h4>ABOUT PRODUCT</h4>
                                <p>Cool off this summer in the Mini Ruffle Smocked Tank Top from our very own LA Hearts.
                                    This tank features a smocked body, adjustable straps, scoop neckline, ruffled hems,
                                    and
                                    a cropped fit.</p>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Ruffled hems
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Cropped length
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Model is wearing a small
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        100% rayon
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Machine washable
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <h4>ADVANTAGES</h4>
                                <ul>
                                    <li>
                                        <div className="kub"></div>
                                        Smocked body
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Adjustable straps
                                    </li>
                                    <li>
                                        <div className="kub"></div>
                                        Scoop neckline
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div style={{marginLeft: 52}}>
                            <h4>SHIPPING</h4>
                            <p>We offer Free Standard Shipping for all orders over $75 to the 50 states and the District
                                of Columbia.
                                The minimum order value must be $75 before taxes, shipping and handling. Shipping fees
                                are non-refundable.
                                <br/><br/>
                                Please allow up to 2 business days (excluding weekends, holidays, and sale days) to
                                process your order.
                                <br/><br/>
                                Processing Time + Shipping Time = Delivery Time</p>
                        </div>
                    </div>
                </div>
            </div>
            <div className="single__swiper">

            </div>
        </section>
    );
};

export default Single;