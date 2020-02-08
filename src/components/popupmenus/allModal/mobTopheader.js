import React, { Component } from 'react'

export default class MobTopHeader extends Component {
    render() {
        const { title } = this.props;
        return (
            <div className="row  mob-top-header align-items-center header-shadow">
                <div className="col-12 d-flex align-items-center mob-space-between">
                    <div className="profile-mob">
                        <div className="float-left back-btn ">
                            <span><i className="back-icon back-arrow"></i></span>
                        </div>
                        <div className="avtar-info">
                            <div className="float-left profile-avtar">
                                <img src="/css/dist/theme01/images/chat-photo.jpg" className="img-fluid" alt="avatarinfo" />
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
                                                            <img src="/css/dist/theme01/images/crown.png" className="img-fluid m-r-sm m-w-14" data-toggle="tooltip" title="User-Level1" alt="cartImg" />
                                                        </span>
                                                        <span>
                                                            <span className="user-name-sm">Heng liang</span><br />
                                                            <span>User Level </span>
                                                        </span>
                                                    </span>
                                                </span>
                                                <span className="credit-txt">
                                                    <img src="/css/dist/theme01/images/credit.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartImg" />1000<img src="/css/dist/theme01/images/cart.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartimg" />
                                                </span>
                                            </span>
                                            <span>
                                                <span className="close-info" data-toggle="tooltip" title="Close"> X</span>
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
                                        <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" data-toggle="tooltip" title="My Account"><img src="/css/dist/theme01/images/right-icon.png" className="img-fluid" alt="account" />My Account</a>
                                        <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" data-toggle="tooltip" title="Change Avatar"><img src="/css/dist/theme01/images/right-icon.png" className="img-fluid" alt="changeavatar" />Change Avatar</a>
                                    </li>
                                    <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" data-toggle="tooltip" title="Logout"><img src="/css/dist/theme01/images/logout.png" className="img-fluid" alt="logout" />Logout</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className="section-title theme-txt-color">
                        {title}
                    </div>
                    {title ?
                        <div className="moremenu">
                            <a href="#headermore">
                                <i className="sprite header-more-ico"></i>
                            </a>
                        </div> :
                        <div className="moremenu d-flex align-items-center">
                            <a href="#create-group-popup" className="icons-rounded create-group-popup" data-toggle="tooltip" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                            <span className="theme-bg  video-call icons-rounded" data-toggle="tooltip" title="Video Call"><i className="sprite video-ico z-disable"></i></span>
                            <span className="icons-rounded voice-call" data-toggle="tooltip" title="Voice Call"><i className="sprite call-ico z-disable"></i></span>
                            <button className="mob-user-menu">
                                <i className="sprite header-more-ico z-disable"></i>
                                <span className="arrow-right-caret"></span>
                            </button>
                        </div>
                    }


                </div>
            </div>
        )
    }
}
