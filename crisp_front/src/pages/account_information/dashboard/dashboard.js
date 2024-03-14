import React, {useEffect, useState} from 'react';
import './dashboard.scss'
import Edit from '../image/Edit.png'
import ArrowToDown from '../image/ArrowToDown.png'

const Dashboard = () => {
    const [activeSection, setActiveSection] = useState('')
    const [emailEdit, setEmailEdit] = useState(false)
    const [passwordEdit, setPasswordEdit] = useState(false)
    const [country,setCountry] = useState(false)
    const [countryP,setCountryP] = useState('')
    const [state,setState] = useState(false)
    const [stateP,setStateP] = useState('')

    const activP = (item) => {
        setActiveSection(item.target.textContent)
        console.log(activeSection)
    }



    const countryP_text = (acrd) =>{
        setCountryP(acrd.target.textContent)
    }
    const countryActive = () => {
        setCountry(country !== true)
    }

    const stateP_text = (acrd) =>{
        setStateP(acrd.target.textContent)
    }
    const stateActive = () => {
        setState(state !== true)
    }




    const editpassword = () => {
       setPasswordEdit(passwordEdit !== true)
    }

    const editEmail = () => {
        setEmailEdit(emailEdit !== true)
    }



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
                    <p onClick={(e) => activP(e)} className={`${activeSection === 'My Wishlist' ? 'p_active' : ''}`}>My
                        Wishlist</p>
                    <p onClick={(e) => activP(e)}
                       className={`${activeSection === 'Newsletter Subscriptions' ? 'p_active' : ''}`}>Newsletter
                        Subscriptions</p>
                </div>
                <div className="accInfo__information__accEdit">
                    <div className={`${activeSection === '' ? 'accInfo__information__accEdit__accDashboard' : '' || activeSection === 'Account Dashboard' ? 'accInfo__information__accEdit__accDashboard' : 'active_none'}`}>
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

                    <div className={`${activeSection === 'Account Information' ? 'accInfo__information__accEdit__accInformation' : 'active_none'}`}>
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

                                <div className={`${emailEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Email *</h3>
                                    <input type="text" placeholder='email'/>
                                </div>
                                <div className={`${passwordEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Password *</h3>
                                    <input type="password" placeholder='password'/>
                                </div>
                                <div className={`${passwordEdit === true ? "register__creatAcc__personalInfo__input__text" : "active_none"}`}>
                                    <h3>Repeat password *</h3>
                                    <input type="password" placeholder='Repeat password'/>
                                </div>
                            </div>
                            <p onClick={editEmail}>
                                <div className={`${emailEdit === true ? "active_brand_img_true" : "active_brand_img_false"}`}>

                                </div>
                                Change Email
                            </p>
                            <p onClick={editpassword}>
                                <div className={`${passwordEdit === true ? "active_brand_img_true" : "active_brand_img_false"}`}>

                                </div>
                                Change Password
                            </p>
                            <button>save</button>
                        </div>
                    </div>
                    <div className={`${activeSection === 'Address Book' ? 'accInfo__information__accEdit__addressBook' : 'active_none'}`}>
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
                                        <p className={`${ countryP === '' ? "" : "active_none"}`}> {countryP === '' ? 'State/Province' : countryP}</p>
                                    </div>
                                    <div className="register__creatAcc__personalInfo__input__text__acardion">
                                        <img onMouseEnter={countryActive} src={ArrowToDown} alt=""/>
                                        <div className={`${country === true ? "register__creatAcc__personalInfo__input__text__acardion__content" : "active_none"}`}>
                                            <p onClick={(e)=> countryP_text(e) + countryActive()}>Please select a region, state or province.</p>
                                            <p onClick={(e)=> countryP_text(e) + countryActive()}>Please select your country</p>
                                            <p onClick={(e)=> countryP_text(e) + countryActive()}>Please select a region, state or province.</p>
                                            <p onClick={(e)=> countryP_text(e) + countryActive()}>Please select your country</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="register__creatAcc__personalInfo__input__text">
                                    <h3>State/Province *</h3>
                                    <div className="input_text_2">
                                        <p className={`${ stateP === '' ? "" : "active_none"}`}> {stateP === '' ? 'State/Province' : stateP}</p>
                                    </div>
                                    <div className="register__creatAcc__personalInfo__input__text__acardion">
                                        <img onMouseEnter={stateActive} src={ArrowToDown} alt=""/>
                                        <div className={`${state === true ? "register__creatAcc__personalInfo__input__text__acardion__content" : "active_none"}`}>
                                            <p onClick={(e)=> stateP_text(e) + stateActive()}>Please select a region, state or province.</p>
                                            <p onClick={(e)=> stateP_text(e) + stateActive()}>Please select your country</p>
                                            <p onClick={(e)=> stateP_text(e) + stateActive()}>Please select a region, state or province.</p>
                                            <p onClick={(e)=> stateP_text(e) + stateActive()}>Please select your country</p>
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

                    <div className="accInfo__information__accEdit__myWishlist">

                    </div>

                    <div className="accInfo__information__accEdit__newsletterSubscription">

                    </div>

                </div>
            </div>
        </section>
    );
};

export default Dashboard;