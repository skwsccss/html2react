import React, { Component } from 'react'

export default class ChangeStatus extends Component {
    render() {
        return (
            <span className="dropdown-menu change-status sidebar-status-menu width-count">
                <span className="user-name theme-bg">Change Status<span className="detail-close-btn" title="Close">X</span></span>
                <span className="seprator">
                    <a className="dropdown-item" href="#1"><span className="status-ico online"></span>Online</a>
                    <a className="dropdown-item" href="#1"><span className="status-ico busy"></span>Busy</a>
                    <a className="dropdown-item" href="#1"><span className="status-ico away"></span>Away</a>
                    <a className="dropdown-item" href="#1"><span className="status-ico in-visible"></span>Invisible</a>
                </span>
                <span className="seprator account-link">
                    <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/css/dist/theme01/images/right-icon.png" className="img-fluid" alt="no-img" />My Account</a>
                    <a className="dropdown-item change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/css/dist/theme01/images/right-icon.png" className="img-fluid" alt="no-img" />Change Avatar</a>
                </span>
                <a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" title="Logout"><img src="/css/dist/theme01/images/logout.png" className="img-fluid" alt="no-img" />Logout</a>
            </span>
        )
    }
}
