import React, { Component } from 'react'

export default class Notification extends Component {
    render() {
        return (
            <div className="modal01 fadeIn notification-list footer-links01" id="notification-popup" tabIndex="-1" role="dialog" aria-labelledby="notification-popup" aria-hidden="true">
                <div className="modal-dialog notification-model sm-modal" role="document">
                    <div className="modal-content">
                        <div className="row  mob-top-header align-items-center header-shadow">
                            <div className="col-12 d-flex align-items-center mob-space-between">
                                <div className="profile-mob">
                                    <div className="float-left back-btn ">
                                        <span><i className="back-icon back-arrow"></i></span>
                                    </div>
                                    <div className="avtar-info">
                                        <div className="float-left profile-avtar">
                                            <img src="/images/chat-photo.jpg" className="img-fluid" alt="avatarinfo" />
                                            <span className="status-signal">&nbsp;</span>
                                        </div>
                                        <div className="status-dropdown">
                                            <ul>
                                                <li className="avtar-info-box">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span className="d-flex align-items-center">
                                                            <span className="user-detail">
                                                                <span className="d-flex align-items-center">
                                                                    <span>
                                                                        <img src="/images/crown.png" className="img-fluid m-r-sm m-w-14" title="User-Level1" alt="cartImg" />
                                                                    </span>
                                                                    <span>
                                                                        <span className="user-name-sm">Heng liang</span><br />
                                                                        <span>User Level </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="credit-txt">
                                                                <img src="/images/credit.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartImg" />1000<img src="/images/cart.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartimg" />
                                                            </span>
                                                        </span>
                                                        <span>
                                                            <span className="close-info" title="Close"> X</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="seprator">
                                                    <a className="dropdown-item" href="#href"><span className="status-ico online"></span>Online</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico busy"></span>Busy</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico away"></span>Away</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico in-visible"></span>Invisible</a>
                                                </li>
                                                <li className="seprator account-link">
                                                    <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/images/right-icon.png" className="img-fluid" alt="account" />My Account</a>
                                                    <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/images/right-icon.png" className="img-fluid" alt="changeavatar" />Change Avatar</a>
                                                </li>
                                                <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" title="Logout"><img src="/images/logout.png" className="img-fluid" alt="logout" />Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title theme-txt-color">
                                    NOTIFICATION
                                </div>
                                <div className="moremenu">
                                    <a href="#more">
                                        <i className="sprite header-more-ico"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body notification-sec">
                            <span className="notification-box">
                                <span className="box-title01 justify-content-between"><strong>Notification (1)</strong><span className="mark-read-btn"><a href="#mark">Mark all as unread</a></span></span>
                                {/* <!--mobile Notification Content--> */}
                                <span className="notification-block">
                                    <span className="inner-title">Today</span>
                                    <a className="dropdown-item latest-notification" href="#latest-notification">
                                        <span className="notificaiton-avtar-pics"><img src="/images/avtar-pics.png" className="img-fluid" alt="no-img" /></span>
                                        <span className="notification-text">
                                            <span className="notification-msg"><strong>Lín  Zhèng</strong> invited you to join Group Chat.</span>
                                            <span className="notification-time">05:00 PM</span>
                                            <span className="modal-btn-group justify-content-start pt-1 pb-1 d-flex">
                                                <span className="d-flex mr-2 btn sm-btn theme-bg mob-radius-btn z-disable m-order-2 z-disable" title="Send">Accept</span>
                                                <span className="d-flex btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" title="Cancel">Decline</span>
                                            </span>
                                        </span>
                                    </a>
                                    <span className="inner-title">Yesterday</span>
                                    <a className="dropdown-item" href="#href">
                                        <span className="notificaiton-avtar-pics"><img src="/images/avtar-pics.png" className="img-fluid" alt="no-img" /></span>
                                        <span className="notification-text">
                                            <span className="notification-msg"><strong>Lín  Zhèng</strong> invited you to join Group Chat.</span>
                                            <span className="notification-time">05:00 PM</span>
                                        </span>
                                    </a>
                                    <a className="dropdown-item" href="#href">
                                        <span className="notificaiton-avtar-pics"><img src="/images/avtar-pics.png" className="img-fluid" alt="no-img" /></span>
                                        <span className="notification-text">
                                            <span className="notification-msg"><strong>Lín  Zhèng</strong> invited you to join Group Chat.</span>
                                            <span className="notification-time">05:00 PM</span>
                                        </span>
                                    </a>
                                    <a className="dropdown-item" href="#href">
                                        <span className="notificaiton-avtar-pics"><img src="/images/avtar-pics.png" className="img-fluid" alt="no-img" /></span>
                                        <span className="notification-text">
                                            <span className="notification-msg"><strong>Lín  Zhèng</strong> invited you to join Group Chat.</span>
                                            <span className="notification-time">05:00 PM</span>
                                        </span>
                                    </a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
