import React, { Component } from 'react';


class ChangeStatus extends Component {
    render() {
        return (
            <div className="status-dropdown">
                <ul>
                    <li className="avtar-info-box">
                        <div className="d-flex align-items-center justify-content-between">
                            <span className="d-flex align-items-center">
                                <span className="user-detail">
                                    <span className="d-flex align-items-center">
                                        <span>
                                            <img src={"/css/dist/theme01/images/crown.png"} className="img-fluid m-r-sm m-w-14" title="User-Level1" alt="error" />
                                        </span>
                                        <span>
                                            <span className="user-name-sm">Heng liang</span><br />
                                            <span>User Level </span>
                                        </span>
                                    </span>
                                </span>
                                <span className="credit-txt">
                                    <img src={"/css/dist/theme01/images/credit.png"} className="img-fluid m-l-sm m-r-sm m-w-14" alt="error" />1000<img src={"/css/dist/theme01/images/cart.png"} className="img-fluid m-l-sm m-r-sm m-w-14" alt="error" />
                                </span>
                            </span>
                            <span>
                                <span className="close-info"> X</span>
                            </span>
                        </div>
                    </li>
                    <li className="seprator">
                        <a className="dropdown-item" href="#a"><span className="status-ico online"></span>Online</a>
                        <a className="dropdown-item" href="#a"><span className="status-ico busy"></span>Busy</a>
                        <a className="dropdown-item" href="#a"><span className="status-ico away"></span>Away</a>
                        <a className="dropdown-item" href="#a"><span className="status-ico in-visible"></span>Invisible</a>
                    </li>
                    <li className="seprator account-link">
                        <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My account"><img src={"/css/dist/theme01/images/right-icon.png"} className="img-fluid" alt="error" />My Account</a>
                        <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src={"/css/dist/theme01/images/right-icon.png"} className="img-fluid" alt="error" />Change Avatar</a>
                    </li>
                    <li><a className="dropdown-item logout z-disable ogout-popup" href="#logout-popup"><img src={"/css/dist/theme01/images/logout.png"} className="img-fluid" alt="error" />Logout</a></li>
                </ul>
            </div>
        )
    }
}
export default ChangeStatus;