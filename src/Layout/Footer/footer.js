import React from 'react';
import './footer.scss'
import Group15 from '../../Image/Group 15.png'
import Logo from '../../Image/Logo.png'
import facebook from '../../Image/facebook.png'
import twitter from '../../Image/twitter.png'
import instagram from '../../Image/instagram.png'

const Footer = () => {
    return (
        <section>
            <div className="section_top">
                <ul>
                    <li><img src={Group15} alt=""/>Duties and Taxes Guaranteed</li>
                    <li><img src={Group15} alt=""/>Free Express Shipping</li>
                    <li><img src={Group15} alt=""/>Customer Love</li>
                    <li><img src={Group15} alt=""/>Easy Returns</li>
                    <li><img src={Group15} alt=""/>Secure Payment</li>
                </ul>
            </div>

            <footer className='footer'>
                <div className="container">
                    <div className="footer__center">
                        <div className="footer__logo"><img src={Logo} alt=""/></div>
                        <div className="footer__features">
                            <h2>features</h2>
                            <p>men</p>
                            <p>Women</p>
                            <p>boys</p>
                            <p>girls</p>
                            <p>new arrivals</p>
                            <p>shoes</p>
                            <p>cothes</p>
                            <p>accessories</p>
                        </div>
                        <div className="footer__menu">
                            <h2>Menu</h2>
                            <p>About us</p>
                            <p>contact us</p>
                            <p>my account</p>
                            <p>orders history</p>
                            <p>MY WISHLIST</p>
                            <p>BLOG</p>
                            <p>LOGIN</p>
                        </div>
                        <div className="footer__contact">
                            <h2>contact us</h2>
                            <h3>Address:</h3>
                            <p>123 STREET NAME, CITY, ENGLAND</p>

                            <h3>Phone:</h3>
                            <p>(123) 456-7890</p>

                            <h3>email:</h3>
                            <p>MAIL@EXAMPLE.COM</p>

                            <h3>working days/hours</h3>
                            <p>MON - SUN / 9:00AM - 8:00PM</p>
                        </div>
                        <div className="footer__follow_us">
                            <h2>follow us</h2>
                            <div className="footer__facebook">
                                <img src={facebook} alt=""/>
                                <h3>FACEBOOK</h3>
                            </div>
                            <div className="footer__twitter">
                                <img src={twitter} alt=""/>
                                <h3>TWITTER</h3>
                            </div>
                            <div className="footer__instagram">
                                <img src={instagram} alt=""/>
                                <h3>INSTAGRAM</h3>
                            </div>
                        </div>
                        <div className="footer__login_us">
                            <h2>LOGIN US</h2>
                            <p>Subscribe to our newsletters</p>
                            <input type="text" placeholder='Email Address'/>
                            <button>Subscribe!</button>
                        </div>
                    </div>
                    <div className="footer__line container"></div>
                    <div className="footer__bottom">
                        <h4>© 2019. Crisp theme Developed by Belvg</h4>
                    </div>
                </div>
            </footer>
        </section>
    );
};

export default Footer;