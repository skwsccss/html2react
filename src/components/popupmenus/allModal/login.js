import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div className="modal01 footer-links login-register login-modal" id="login">
                <span className="login-back back-close-btn desk-hidden mob-display">
                    <span><img src="/css/dist/theme01/images/white-back-arrow.png" className="img-fluid back-arrow m-l-n" alt="noimg" /></span>
                </span>
                <div className="modal-dialog modal-dialog-centered login-popup">
                    <div className="modal-content">

                        <div className="modal-header">
                            <div className="popup-logo"><img src="/css/dist/theme01/images/login-logo.png" alt="noimg"/></div>
                            <h4 className="modal-title">LOGIN</h4>
                        </div>
                        <div className="alert-msg">
                            <div className="alert-box">
                                <img src="/css/dist/theme01/images/alert-icon.png" className="mr-2" alt="noimg" />
                                Message if the username or password is wrong
                        </div>
                        </div>
                        <div className="modal-body">
                            <div className="user-login">
                                <button type="button" className="btn btn-xs btn-toggle guest-login-btn on-off-toggle ml-0 deactive" data-toggle="button" aria-pressed="false" autoComplete="off">
                                    <div className="handle"></div>
                                </button>
                                <span className="login-title"> Login as a guest</span>
                                <div className="row login-form show">
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Nickname</label>
                                        <span className="desk-hidden mob-display m-login-icon">
                                            <i className="login-user"></i>
                                        </span>
                                        <input className="login-register-filed" placeholder="Nickname" type="text" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Password</label>
                                        <span className="desk-hidden mob-display m-login-icon sm-icon">
                                            <i className="m-lock-icon"></i>
                                        </span>
                                        <input className="login-register-filed" placeholder="Password" type="text" />
                                    </div>
                                    <div className="col-12 mt-3 d-flex align-items-center justify-content-between">
                                        <div className="float-left">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input z-disable" id="login02" name="login02" />
                                                <label className="custom-control-label" htmlFor="login02">Remember me</label>
                                            </div>
                                        </div>
                                        <div className="float-right">
                                            <a className="forgot-link" href="#e">Forgot Password?</a>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center justify-content-center register-link hide-mobile">
                                        You don't have an account ? &nbsp;<a className="forgot-link theme-txt-color" href="#e"> Create free account</a>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="col-12 mt-2">
                                            <button className="login-btn theme-bg">SUBMIT</button>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 mob-mb-20  d-flex align-items-center justify-content-center desk-hide show-mobile font-12-bold">
                                        You don't have an account ? &nbsp;<a className="forgot-link theme-txt-color" href="#e">&nbsp;Create free account</a>
                                    </div>
                                </div>
                                <div className="row guest-form">
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">Nickname</label>
                                        <span className="desk-hidden mob-display m-login-icon">
                                            <i className="login-user"></i>
                                        </span>
                                        <input className="login-register-filed" placeholder="Nickname" type="text" />
                                    </div>
                                    <div className="col-12 mt-2 m-flex-align">
                                        <label className="hide-mobile">gender</label>
                                        <span className="desk-hidden mob-display m-login-icon">
                                            <i className="m-gender-icon"></i>
                                        </span>
                                        <span className="duration-select gender m-l-xs d-flex">
                                            <select className="z-disable">
                                                <option>Male</option>
                                                <option>Female</option>
                                            </select>
                                        </span>
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center ">
                                        <div className="float-left">
                                            <div className="custom-control custom-checkbox">
                                                <input type="checkbox" className="custom-control-input z-disable" id="login01" name="login01" />
                                                <label className="custom-control-label" htmlFor="login01">Remember me</label>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center justify-content-center register-link hide-mobile">
                                        You don't have an account ? &nbsp;<a className="forgot-link theme-txt-color" href="#e"> Create free account</a>
                                    </div>
                                    <div className="modal-footer">
                                        <div className="col-12 mt-2">
                                            <button className="login-btn theme-bg">SUBMIT</button>
                                        </div>
                                    </div>
                                    <div className="col-12 mt-2 d-flex align-items-center justify-content-center desk-hide show-mobile font-12-bold">
                                        You don't have an account ? &nbsp;<a className="forgot-link theme-txt-color" href="#e">&nbsp;Create free account</a>
                                    </div>
                                    <div className="col-12 mt-1 mob-mb-20 d-flex align-items-center justify-content-center desk-hide show-mobile font-12-bold">
                                        Please read our &nbsp;<a className="forgot-link theme-txt-color" href="#e">&nbsp;Terms of use</a>&nbsp;and see our<a className="forgot-link theme-txt-color" href="#e">&nbsp;Privacy Policy</a>
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

export default Login;