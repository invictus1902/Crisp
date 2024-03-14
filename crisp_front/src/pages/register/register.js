import React from 'react';
import './register.scss'
import {Link} from "react-router-dom";

const Register = () => {
    return (
        <section className='register container'>
            <div className="register__title">
                <h1>Create New Customer Account</h1>
            </div>
            <div className="register__creatAcc">
                <div>
                    <div className="register__creatAcc__personalInfo">
                        <h2>Personal Information</h2>
                        <div className="register__creatAcc__personalInfo__input">
                            <div className="register__creatAcc__personalInfo__input__text">
                                <h3>First name *</h3>
                                <input type="text" placeholder='First Name'/>
                            </div>
                            <div className="register__creatAcc__personalInfo__input__text">
                                <h3>Last Name *</h3>
                                <input type="text" placeholder='Last Name'/>
                            </div>
                        </div>
                    </div>
                    <div className="register__creatAcc__newsletter">
                        <h2>Sign Up for Newsletter</h2>
                        <div className="register__creatAcc__newsletter__input">
                            <div className="register__creatAcc__newsletter__input__text">
                                <h3>Email *</h3>
                                <input type="text" placeholder='daisy.watson@gmail.com'/>
                            </div>
                            <div className="register__creatAcc__newsletter__input__text__password">
                                <h3>Password *</h3>
                                <div>
                                    <input type="text" placeholder='password'/>
                                    <div
                                        className="register__creatAcc__newsletter__input__text__password__passwordStrength">
                                        <h3>Password Strength: No Password</h3>
                                    </div>
                                </div>
                            </div>
                            <div className="register__creatAcc__newsletter__input__text__password">
                                <h3>Confirm Password *</h3>
                                <div>
                                    <input type="text" placeholder='password'/>
                                    <div
                                        className="register__creatAcc__newsletter__input__text__password__passwordStrength">
                                        <h3>Password Strength: No Password</h3>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="register__creatAcc__buttonCreatAndBack">
                        <button>create an account</button>
                        <Link to='/'>
                            <button>back</button>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Register;