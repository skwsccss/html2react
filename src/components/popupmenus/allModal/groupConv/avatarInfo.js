import React, { Component } from 'react'

export default class AvatarInfo extends Component {
    render() {
        return (
            <div className="avtar-info">
                <div className="float-left profile-avtar">
                    <img src="/images/chat-photo.jpg" className="img-fluid" alt="noimg" />
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
                                                <img src="/images/crown.png" className="img-fluid m-r-sm m-w-14" title="User-Level1" alt="noimg" />
                                            </span>
                                            <span>
                                                <span className="user-name-sm">Heng liang</span><br />
                                                <span>User Level </span>
                                            </span>
                                        </span>
                                    </span>
                                    <span className="credit-txt">
                                        <img src="/images/credit.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="noimg" />1000<img src="/images/cart.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="noimg" />
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
                            <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/images/right-icon.png" className="img-fluid" alt="noimg" />My Account</a>
                            <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/images/right-icon.png" className="img-fluid" alt="noimg" />Change Avatar</a>
                        </li>
                        <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" title="Logout"><img src="/images/logout.png" className="img-fluid" alt="noimg" />Logout</a></li>
                    </ul>
                </div>
            </div>
        )
    }
}
