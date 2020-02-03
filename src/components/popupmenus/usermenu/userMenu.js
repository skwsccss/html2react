import React, { Component } from 'react'
import ViewUserProfile from './viewUserProfile'
import ReportSystem from './reportSys'
import ShowRealInfo from './realInfo'

export default class UserMenu extends Component {
    render() {
        return (
            <span id="user-dropdown" className="dropdown-menu user-list-dropdown">
                <span className="main-menu-box width-count">
                    <span className="user-name theme-bg">Kanyo cube<span className="detail-close-btn" title="Close">X</span></span>
                    <a className="dropdown-item private-message-request" href="#private-message-request" title="Private Chat"><i className="sprite plus-ico"></i>Private Chat</a>
                    <a className="dropdown-item gift-popup" href="#gift-popup" title="Gift-Popup"><i className="sprite gift-box01-ico"></i>Send Gift</a>
                    <a className="dropdown-item upgrade-popup" href="#upgrade-popup" title="Upgrade-Popup"><i className="sprite upgrade-ico"></i>Upgrade from him/her</a>
                    <a className="dropdown-item ignore-list-popup" href="#ignore-list-popup" title="Ignore"><i className="sprite ignore-ico"></i>Ignore</a>
                    <a className="dropdown-item friend-request-popup" href="#friend-request-popup" title="Add Friend"><i className="sprite add-friend-ico"></i>Add Friend</a>
                    <a className="dropdown-item mute-window-popup" href="#mute-window-popup" title="Mute"><i className="sprite mute-ico"></i>Mute</a>
                    <a className="dropdown-item silent-mute-window-popup" href="#mute-window-popup" title="Silent-Mute"><i className="sprite mute-ico"></i>Silent Mute</a>
                    <a className="dropdown-item kick-window-popup" href="#kick-window-popup" title="Kick"><i className="sprite kick-ico"></i>Kick</a>
                    <a className="dropdown-item ban-popup" href="#ban-popup" title="Ban Popup"><i className="sprite ban-ico"></i>Ban</a>
                    <a className="dropdown-item popup sub-popup OpenRealPopup" href="#user-report-system" title="Report This User"><i className="sprite report-ico"></i>Report this user</a>
                    <a className="dropdown-item popup OpenReal" href="#real-info" title="Show Real Info"><i className="sprite info-ico"></i>Show real info</a>
                    <a className="dropdown-item popup mob-full-window view-profile" href="#view-profile" title="View Profile"><i className="sprite profile-ico"></i>View Profile</a>
                </span>
                <ViewUserProfile />
                <ReportSystem />
                <ShowRealInfo />
            </span>
        )
    }
}
