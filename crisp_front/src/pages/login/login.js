import React from 'react';
import './login.scss'
import {Link} from "react-router-dom";

const Login = () => {
    return (
        <section className='login container'>
            <div className="login__title">
                <h1>login to account</h1>
            </div>
            <div className="login__loginAcc">
                <div>
                    <h2>Enter your account login information</h2>
                    <div className="login__loginAcc__input">
                        <div className="login__loginAcc__input__text">
                            <h3>Email *</h3>
                            <input type="email" placeholder='daisy.watson@gmail.com'/>
                        </div>
                        <div className="login__loginAcc__input__text">
                            <h3>Password *</h3>
                            <input type="password" placeholder='Password'/>
                        </div>
                    </div>
                </div>
                <div className="login__loginAcc__loginAndBack">
                    <button>Sing in</button>
                    <Link to='/'>
                        <button>back</button>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default Login;