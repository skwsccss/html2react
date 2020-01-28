import React, { Component } from 'react'

export default class MoreMenuPopup extends Component {
    render() {
        return (
            <div className="modal fadeIn more-menu footer-links" id="moremenu-popup" tabIndex="-1" role="dialog" aria-labelledby="chat-popup" aria-hidden="true">
                <div className="modal-dialog modal-dialog-centered chat-model sm-modal" role="document">
                    <div className="modal-content">
                        <div className="row  mob-top-header align-items-center">
                            <div className="col-12 d-flex align-items-center mob-space-between">
                                <div className="profile-mob">
                                    <div className="float-left back-btn ">
                                        <span><i className="back-icon back-arrow"></i></span>
                                    </div>
                                    <div className="avtar-info pt-2">
                                        <div className="float-left profile-avtar">
                                            <img src="/images/chat-photo.jpg" className="img-fluid" alt="no-img" />
                                            <span className="status-signal">&nbsp;</span>
                                        </div>
                                        <span className="d-flex align-items-center">
                                            <span className="user-detail">
                                                <span className="d-flex align-items-center">

                                                    <span>
                                                        <span className="user-name-sm d-flex align-items-center">
                                                            <span className="d-flex align-items-center">
                                                                <img src="/images/crown.png" className="img-fluid mr-2 m-w-14" title="User-Level1" alt="no-img" />
                                                            </span>Heng liang
                                                    </span>
                                                        <span className="d-flex align-items-center"><span className="d-flex align-items-center"><img src="/images/my-account.png" className="img-fluid mr-2 m-w-14" title="my-account" alt="no-img" /></span>My Account </span>
                                                    </span>
                                                </span>
                                            </span>
                                        </span>
                                        <div className="status-dropdown">
                                            <ul>
                                                <li className="seprator">
                                                    <a className="dropdown-item" href="#dropdown"><span className="status-ico online"></span>Online</a>
                                                    <a className="dropdown-item" href="#dropdown"><span className="status-ico busy"></span>Busy</a>
                                                    <a className="dropdown-item" href="#dropdown"><span className="status-ico away"></span>Away</a>
                                                    <a className="dropdown-item" href="#dropdown"><span className="status-ico in-visible"></span>Invisible</a>
                                                </li>
                                                <li className="seprator account-link">
                                                    <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/images/right-icon.png" className="img-fluid" alt="no-img" />My Account</a>
                                                    <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/images/right-icon.png" className="img-fluid" alt="no-img" />Change Avatar</a>
                                                </li>
                                                <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup"><img src="/images/logout.png" className="img-fluid" alt="no-img" />Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title theme-txt-color">
                                </div>
                                <div className="moremenu">
                                    <a href="#1">
                                        <i className="sprite header-more-ico"></i>
                                    </a>
                                </div>
                            </div>
                            <div className="col-12 more-credit-block">
                                <div className="theme-border user-credit-info">
                                    <div className="credit-wallet">
                                        <div className="credit-balance">
                                            <span>Your Credits :</span><span className="theme-txt-color bold-600"> 1000</span>
                                        </div>
                                        <div className="btn-group menu-list">
                                            <a className="btn sm-btn theme-bg z-disable upgrade-popup" title="Upgrade Account" href="#upgrade-popup"><i className="sprite upgrade-white-ico"></i>Upgrade Account</a>
                                            <a className="btn sm-btn theme-bg" title="Buy Credit" href="#buycredit"><i className="sprite buy-credit-ico"></i>Buy Credit</a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <ul className="menu-list">
                                <li>
                                    <a className="z-disable m-notification-link .notification-popup" href="#notification-popup">
                                        <span className="float-left"><i className="sprite bell-ico"></i>Notification</span>
                                        <span className="float-right">
                                            <span className="badge badge-secondary theme-bg">10</span>
                                            <i className="right-arrow-ico"></i>
                                            {/* <!--<img src="css/dist/theme01/images/right-arrow.png" className="img-fluid m-w-10" />--> */}
                                        </span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable" href="#send-announcement-popup send-announcement-popup" title="Send Announcment">
                                        <span className="float-left"><i className="sprite announcement-ico"></i>Send Announcement</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable change-avtar-popup" href="#change-avtar-popup">
                                        <span className="float-left"><i className="sprite change-avtar-ico"></i>Change Avatar</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable gift-popup" href="#gift-popup">
                                        <span className="float-left"><i className="sprite send-gift-ico"></i>Send Gift</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable ignore-list-popup" href="#ignore-list-popup">
                                        <span className="float-left"><i className="sprite ignore-list-ico"></i>Ignore List</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#user-reported-popup" className="user-reported-popup">
                                        <span className="float-left"><i className="sprite user-reported-ico"></i>User Reported</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable settingbox-popup" href="#settingbox-popup">
                                        <span className="float-left"><i className="sprite option-ico"></i>Options</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable banmanagment-popup" href="#banmanagment-popup">
                                        <span className="float-left"><i className="sprite ban-managment-ico"></i>Ban Management</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable hide-list input-change create-group-popup" href="#create-group-popup">
                                        <span className="float-left"><i className="sprite user-add-ico mr-3"></i>Create Group</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable about-app-popup" href="#about-app-popup">
                                        <span className="float-left"><i className="sprite about-ico"></i>About the App</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable contactus-popup" href="#contactus-popup">
                                        <span className="float-left"><i className="sprite contact-ico"></i>Contact Us</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a className="z-disable help-popup" href="#help-popup">
                                        <span className="float-left"><i className="sprite help-ico"></i>Help</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                    {/* <!--<a href="">
                                    <span className="float-left"><i className="sprite help-ico"></i>Help</span>
                                    <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                </a>--> */}
                                </li>
                                <li>
                                    <a className="z-disable terms-popup" href="#terms-popup">
                                        <span className="float-left"><i className="sprite conditions-ico"></i>Terms & Conditions</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                                <li>
                                    <a href="#logout-popup" className="z-disable logout-popup" title="logout">
                                        <span className="float-left"><i className="sprite logout-ico"></i>Logout</span>
                                        <span className="float-right"> <i className="right-arrow-ico"></i></span>
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
