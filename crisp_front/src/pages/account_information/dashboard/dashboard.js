import React, {useContext} from 'react';
import './dashboard.scss'
import '../../shop/shop.scss'
import Edit from '../image/Edit.png'
import ArrowToDown from '../image/ArrowToDown.png'
import {CustomContext} from "../../../Context";
import {Link} from "react-router-dom";
import {animateScroll} from "react-scroll";
import Delete from '../image/delete.png'

const Dashboard = () => {
    const {
        activeSection, emailEdit, passwordEdit, country, countryP, state,
        stateP, activP, countryP_text, countryActive, stateP_text, stateActive, editpassword, editEmail,
        basket, deleteObject
    } = useContext(CustomContext)

    console.log(basket)
    const toTop = () => {
        animateScroll.scrollToTop({
            delay: 0,
            duration: 0,
            smooth: true
        })
    };
    return (
        <section className='accInfo container'>
            <div className="accInfo__title">
                <h1>My Dashboard</h1>
            </div>
            <div className="accInfo__information">
                <div className="accInfo__information__aside">
                    <p onClick={(e) => activP(e)}
                       className={`${activeSection === '' ? 'p_active' : '' || activeSection === 'Account Dashboard' ? 'p_active' : ''}`}>Account
                        Dashboard</p>
                    <p onClick={(e) => activP(e)}
                       className={`${activeSection === 'Account Information' ? 'p_active' : ''}`}>Account
                        Information</p>
                    <p onClick={(e) => activP(e)}
                       className={`${activeSection === 'Address Book' ? 'p_active' : ''}`}>Address Book</p>
                    <p onClick={(e) => activP(e)} className={`${activeSection === 'My Orders' ? 'p_active' : ''}`}>My
                        Orders</p>
                    <p onClick={(e) => activP(e)} className={`${activeSection === 'My Wishlist' ? 'p_active' : ''}`}>My Wishlist</p>
                    <p onClick={(e) => activP(e)}
                       className={`${activeSection === 'Newsletter Subscriptions' ? 'p_active' : ''}`}>Newsletter
                        Subscriptions</p>
                </div>
                <div className="accInfo__information__accEdit">
                    <div
                        className={`${activeSection === '' ? 'accInfo__information__accEdit__accDashboard' : '' || activeSection === 'Account Dashboard' ? 'accInfo__information__accEdit__accDashboard' : 'active_none'}`}>
                        <div>
                            <div className="accInfo__information__accEdit__accDashboard__title">
                                <h2>Account Information</h2>
                            </div>
                            <div className='accInfo__information__accEdit__accDashboard__flex'>
                                <div className="accInfo__information__accEdit__accDashboard__contactInfo">
                                    <h3>Contact Information</h3>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__p">
                                        <p>Alex Driver <br/> ExampeAdress@gmail.com</p>
                                    </div>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__button">
                                        <button>Edit</button>
                                        <button>Change Password</button>
                                    </div>
                                </div>
                                <div className="accInfo__information__accEdit__accDashboard__newslet">
                                    <h3>Newsletters</h3>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__p">
                                        <p>You don't subscribe to our newsletter.</p>
                                    </div>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__button">
                                        <button>Edit</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            <div className="accInfo__information__accEdit__accDashboard__title">
                                <h2>Address Book <img src={Edit} alt=""/></h2>
                            </div>
                            <div className='accInfo__information__accEdit__accDashboard__flex'>
                                <div className="accInfo__information__accEdit__accDashboard__contactInfo">
                                    <h3>Default Billing Address</h3>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__p">
                                        <p>You have not set a default billing address.</p>
                                    </div>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__button">
                                        <button>Edit Address</button>
                                    </div>
                                </div>
                                <div className="accInfo__information__accEdit__accDashboard__newslet">
                                    <h3>Default Shipping Address</h3>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__p">
                                        <p>You have not set a default shipping address.</p>
                                    </div>
                                    <div className="accInfo__information__accEdit__accDashboard__contactInfo__button">
                                        <button>Edit Address</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div
                        className={`${activeSection === 'Account Information' ? 'accInfo__information__accEdit__accInformation' : 'active_none'}`}>
                        <div className='accInfo__information__accEdit__accInformation__title'>
                            <h2>Account Information</h2>
                            <div className="register__creatAcc__personalInfo__input">
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>First name *</h3>
                                    <input type="text" placeholder='Alex'/>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Last Name *</h3>
                                    <input type="text" placeholder='Driver'/>
                                </div>

                                <div
                                    className={`${emailEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Email *</h3>
                                    <input type="text" placeholder='email'/>
                                </div>
                                <div
                                    className={`${passwordEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Password *</h3>
                                    <input type="password" placeholder='password'/>
                                </div>
                                <div
                                    className={`${passwordEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Repeat password *</h3>
                                    <input type="password" placeholder='Repeat password'/>
                                </div>
                            </div>
                            <p onClick={editEmail}>
                                <div
                                    className={`${emailEdit === true ? "active_brand_img_true" : "active_brand_img_false"}`}>

                                </div>
                                Change Email
                            </p>
                            <p onClick={editpassword}>
                                <div
                                    className={`${passwordEdit === true ? "active_brand_img_true" : "active_brand_img_false"}`}>

                                </div>
                                Change Password
                            </p>
                            <button>save</button>
                        </div>
                    </div>
                    <div
                        className={`${activeSection === 'Address Book' ? 'accInfo__information__accEdit__addressBook' : 'active_none'}`}>
                        <div className="register__creatAcc__personalInfo">
                            <h2>Contact Information</h2>
                            <div className="register__creatAcc__personalInfo__input">
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>First name *</h3>
                                    <input type="text" placeholder='Alex'/>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Last Name *</h3>
                                    <input type="text" placeholder='Driver'/>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Company</h3>
                                    <input type="text" placeholder=''/>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Phone Number *</h3>
                                    <input type="text" placeholder=''/>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Fax</h3>
                                    <input type="text" placeholder=''/>
                                </div>
                            </div>
                        </div>
                        <div className="register__creatAcc__personalInfo">
                            <h2>Address</h2>
                            <div className="register__creatAcc__personalInfo__input">
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Street Address *</h3>
                                    <div className="register__creatAcc__personalInfo__input__text_int">
                                        <input type="text" placeholder=''/>
                                        <input type="text" placeholder=''/>
                                    </div>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Country *</h3>
                                    <div className="input_text">
                                        <p className={`${countryP === '' ? "" : "active_none"}`}> {countryP === '' ? 'State/Province' : countryP}</p>
                                    </div>
                                    <div className="register__creatAcc__personalInfo__input__text__acardion">
                                        <img onMouseEnter={countryActive} src={ArrowToDown} alt=""/>
                                        <div
                                            className={`${country === true ? "register__creatAcc__personalInfo__input__text__acardion__content" : "active_none"}`}>
                                            <p onClick={(e) => countryP_text(e) + countryActive()}>Please select a
                                                region, state or province.</p>
                                            <p onClick={(e) => countryP_text(e) + countryActive()}>Please select your
                                                country</p>
                                            <p onClick={(e) => countryP_text(e) + countryActive()}>Please select a
                                                region, state or province.</p>
                                            <p onClick={(e) => countryP_text(e) + countryActive()}>Please select your
                                                country</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>State/Province *</h3>
                                    <div className="input_text_2">
                                        <p className={`${stateP === '' ? "" : "active_none"}`}> {stateP === '' ? 'State/Province' : stateP}</p>
                                    </div>
                                    <div className="register__creatAcc__personalInfo__input__text__acardion">
                                        <img onMouseEnter={stateActive} src={ArrowToDown} alt=""/>
                                        <div
                                            className={`${state === true ? "register__creatAcc__personalInfo__input__text__acardion__content" : "active_none"}`}>
                                            <p onClick={(e) => stateP_text(e) + stateActive()}>Please select a region,
                                                state or province.</p>
                                            <p onClick={(e) => stateP_text(e) + stateActive()}>Please select your
                                                country</p>
                                            <p onClick={(e) => stateP_text(e) + stateActive()}>Please select a region,
                                                state or province.</p>
                                            <p onClick={(e) => stateP_text(e) + stateActive()}>Please select your
                                                country</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>Zip/Postal Code *</h3>
                                    <input type="text" placeholder=''/>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="accInfo__information__accEdit__myOrders">

                    </div>

                    <div className={`${activeSection === 'My Wishlist'  ? 'accInfo__information__accEdit__myWishlist' : 'active_none'}`}>
                        { basket && basket.map((el) => (
                            <div className="accInfo__information__accEdit__myWishlist__cart">
                                <div className="accInfo__information__accEdit__myWishlist__cart__info">
                                    <Link onClick={() => toTop()} to={`/single/${el.id}`}>
                                        <img src={el.img[0]} alt=""/>
                                    </Link>
                                    <div className="accInfo__information__accEdit__myWishlist__cart__info__text">
                                        <p className='accInfo__information__accEdit__myWishlist__cart__info__text__name'>{el.title}</p>
                                        <p className='accInfo__information__accEdit__myWishlist__cart__info__text__price'>{el.price},00 EUR </p>
                                    </div>
                                    <div className="accInfo__information__accEdit__myWishlist__cart__info__bottom">
                                        <p>{el.quantity}</p>
                                        <button>Add to cart</button>
                                    </div>
                                </div>
                                <div className="accInfo__information__accEdit__myWishlist__cart__img">
                                    <img onClick={() => deleteObject(el.id)} src={Delete} alt=""/>
                                    <Link onClick={()=>toTop()} to={`/single/${el.id}`}>
                                        <img src={Edit} alt=""/>
                                    </Link>
                                </div>
                            </div>

                        ))}

                        <div className="accInfo__information__accEdit__myWishlist__bottom_button">
                            <button>share wish list</button>
                            <button>update wish list</button>
                            <button>Add all to cart</button>
                        </div>
                    </div>

                    <div className="accInfo__information__accEdit__newsletterSubscription">

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;