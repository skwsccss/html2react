import React, { Component } from 'react';

class Register extends Component {
    render() {
        return (
            <div className="modal01 footer-links login-register register-modal" id="register">
                <span className="login-back back-close-btn desk-hidden mob-display">
                    <span><img src="css/dist/theme01/images/white-back-arrow.png" className="img-fluid back-arrow m-l-n"  alt="noimg"/></span>
                </span>
                <div className="modal-dialog modal-dialog-centered login-popup">
                    <div className="modal-content">
                        <div className="modal-header">
                            <div className="popup-logo"><img src="css/dist/theme01/images/login-logo.png"  alt="noimg"/></div>
                            <h4 className="modal-title">REGISTRATION</h4>
                        </div>
                        <div className="alert-msg">
                            <div className="alert-box">
                                <img src="css/dist/theme01/images/alert-icon.png" className="mr-2" alt="noimg" />
                                Message if the password is unacceptable
                        </div>
                        </div>
                        <div className="modal-body register-scroll">
                            <div className="user-login">
                                <div className="row registration-form">
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Nickname</label>
                                        <span className="desk-hidden mob-display m-login-icon"><i className="login-user"></i></span>
                                        <input className="login-register-filed" placeholder="Nickname" type="text" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Email</label>
                                        <span className="desk-hidden mob-display m-login-icon">
                                            <i className="m-email-icon"></i>
                                        </span>
                                        <input className="login-register-filed" placeholder="Email" type="email" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Password</label>
                                        <span className="desk-hidden mob-display m-login-icon sm-icon">
                                            <i className="m-lock-icon"></i>
                                        </span>
                                        <input className="login-register-filed" placeholder="Password" type="text" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Re-type password</label>
                                        <span className="desk-hidden mob-display m-login-icon sm-icon"><i className="m-lock-icon"></i></span>
                                        <input className="login-register-filed" placeholder="Re-type password" type="text" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">gender</label>
                                        <span className="desk-hidden mob-display m-login-icon"><i className="m-gender-icon"></i></span>
                                        <span className="duration-select gender m-l-xs d-flex">
                                            <select className="z-disable">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Country</label>
                                        <span className="desk-hidden mob-display m-login-icon xs-icon">
                                            <i className="m-location-icon"></i>
                                        </span>
                                        <span className="duration-select location m-l-xs d-flex">
                                            <select className="z-disable">
                                                <option>United State</option>
                                                <option>United Kingdom</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center justify-content-center ">
                                        <img src="css/dist/theme01/images/g-captcha.png" alt="noimg" />
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center ">
                                        <div className="float-left">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input z-disable" id="rememberme" name="rememberme" />
                                                <label className="custom-control-label" htmlFor="rememberme">Approval of the terms</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2">
                                        <button className="login-btn theme-bg">SUBMIT</button>
                                    </div>
                                    <div className="col-12 mt-2 mb-2  d-flex align-items-center justify-content-center desk-hide show-mobile font-12-bold">
                                        Please read our &nbsp;<a className="forgot-link theme-txt-color" href="#r">&nbsp;Terms of use</a>&nbsp;and see our<a className="forgot-link theme-txt-color" href="#r">&nbsp;Privacy Policy</a>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default Register;