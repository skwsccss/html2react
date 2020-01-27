import React, { Component } from 'react'

export default class MainboardProfileHeader extends Component {
    render() {
        return (
            <span className="row  mob-top-header align-items-center header-shadow">
                <span className="col-12 d-flex align-items-center mob-space-between">
                    <span className="profile-mob">
                        <span className="float-left back-close-btn">
                            <span><i className="back-icon back-arrow"></i></span>
                        </span>
                        <span className="avtar-info">
                            <span className="float-left profile-avtar">
                                <img alt="chatphoto" src={"/images/chat-photo.jpg"} className="img-fluid" />
                                <span className="status-signal">&nbsp;</span>
                            </span>
                            <span className="status-dropdown">
                                <ul>
                                    <li className="avtar-info-box">
                                        <div className="d-flex align-items-center justify-content-between">
                                            <span className="d-flex align-items-center">
                                                <span className="user-detail">
                                                    <span className="d-flex align-items-center">
                                                        <span>
                                                            <img alt="crown" src={"/images/crown.png"} className="img-fluid m-r-sm m-w-14" title="User-Level1" />
                                                        </span>
                                                        <span>
                                                            <span className="user-name-sm">Heng liang</span><br />
                                                            <span>User Level </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="credit-txt">
                                                    <img alt="credit" src={"/images/credit.png"} className="img-fluid m-l-sm m-r-sm m-w-14" />1000<img alt="cart" src={"/images/cart.png"} className="img-fluid m-l-sm m-r-sm m-w-14" />
                                                </span>
                                            </span>
                                            <span>
                                                <span className="close-info" title="Close"> X</span>
                                            </span>
                                        </div>
                                    </li>
                                    <li className="seprator">
                                        <a className="dropdown-item" href="#1" title="Online"><span className="status-ico online"></span>Online</a>
                                        <a className="dropdown-item" href="#1" title="Busy"><span className="status-ico busy"></span>Busy</a>
                                        <a className="dropdown-item" href="#1" title="Away"><span className="status-ico away"></span>Away</a>
                                        <a className="dropdown-item" href="#1" title="Invisible"><span className="status-ico in-visible"></span>Invisible</a>
                                    </li>
                                    <li className="seprator account-link">
                                        <a className="dropdown-item z-disable" href="#myaccount-popup" id="myaccount-popup" title="My Account"><img alt="right" src={"/images/right-icon.png"} className="img-fluid" />My Account</a>
                                        <a className="dropdown-item z-disable" href="#change-avtar-popup" id="change-avtar-popup" title="Change Avatar"><img alt="right" src={"/images/right-icon.png"} className="img-fluid" />Change Avatar</a>
                                    </li>
                                    <li><a className="dropdown-item logout" href="#1" title="Logout"><img alt="logout" src={"/images/logout.png"} className="img-fluid" />Logout</a></li>
                                </ul>
                            </span>
                        </span>
                    </span>
                    <span className="section-title theme-txt-color">
                        KANYO CUBE
                    </span>
                    <span className="moremenu">
                        <a href="#2">
                            <i className="sprite header-more-ico"></i>
                        </a>
                    </span>
                </span>
            </span>
        )
    }
}
