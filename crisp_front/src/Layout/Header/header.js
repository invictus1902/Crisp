import React, {useContext, useEffect, useState} from 'react';
import './header.scss'
import Logo from '../../Image/Logo.png'
import {Link} from "react-router-dom";
import Search from '../../Image/Search.png'
import Favorites from '../../Image/Favorites.png'
import Basket from '../../Image/Basket.png'
import {useLocation} from "react-router-dom";
import {CustomContext} from "../../Context";


const Header = () => {
    const [patch,setPatch] = useState('')

    const location = useLocation()
    console.log(location)
    useEffect(()=>{
        if (location.pathname ==='/'){
            setPatch('home')
        }else if (location.pathname ==='/shop'){
            setPatch('shop')
        }else if (location.pathname === '/register'){
            setPatch('register')
        }else if (location.pathname === '/login'){
            setPatch('login')
        }
    },[location])



    return (
        <header className='header'>
            <div className="header__logo">
                <Link to='/'>
                    <img src={Logo} alt=""/>
                </Link>
            </div>
            <div className="header__nav">
                <ul>
                    <Link to='/'>home <div  className={`${patch ==='home'?'header__lani active':'header__lani'}`}></div></Link>
                    <Link to='/shop'>Shop <div  className={`${patch ==='shop'?'header__lani active':'header__lani'}`}></div></Link>
                    <li>blog </li>
                    <li>Sale </li>
                    <li>contact us</li>
                    <p><img src={Search} alt=""/>search</p>
                </ul>
            </div>
            <div className="header__panelProfile">
                <div className="header__loginAndRegistrPanel">
                    <div className="header__login">
                        <Link to='/login'>
                            <p>sing in</p>
                            <div  className={`${patch ==='login'?'header__lani active':'header__lani'}`}></div>
                        </Link>
                    </div>
                    <div className="header__register">
                        <Link to='/register'>
                            <p>create an account</p>
                            <div  className={`${patch ==='register'?'header__lani active':'header__lani'}`}></div>
                        </Link>
                    </div>
                </div>
                <div className="header__balancePanel">
                    <div className="header__balansLeft">
                        <img src={Favorites} alt=""/>
                        <Link to={'/dashboard'}>
                            <img  src={Basket} alt=""/>
                        </Link>
                    </div>
                    <div className="header__balansRight">
                        <p className='header__rightTop'>Shopping Cart</p>
                        <p className='header__rightBottom'>0,00 EUR</p>
                    </div>
                </div>
            </div>

        </header>
    );
};

export default Header;