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
                    <a className="dropdown-item" href="#private-message-request" id="private-message-request" title="Private Chat"><i className="sprite plus-ico"></i>Private Chat</a>
                    <a className="dropdown-item" href="#gift-popup" id="gift-popup" title="Gift-Popup"><i className="sprite gift-box01-ico"></i>Send Gift</a>
                    <a className="dropdown-item" href="#upgrade-popup" id="upgrade-popup" title="Upgrade-Popup"><i className="sprite upgrade-ico"></i>Upgrade from him/her</a>
                    <a className="dropdown-item" href="#ignore-list-popup" id="ignore-list-popup" title="Ignore"><i className="sprite ignore-ico"></i>Ignore</a>
                    <a className="dropdown-item" href="#friend-request-popup" id="friend-request-popup" title="Add Friend"><i className="sprite add-friend-ico"></i>Add Friend</a>
                    <a className="dropdown-item" href="#mute-window-popup" id="mute-window-popup" title="Mute"><i className="sprite mute-ico"></i>Mute</a>
                    <a className="dropdown-item" href="#mute-window-popup" id="silent-mute-window-popup" title="Silent-Mute"><i className="sprite mute-ico"></i>Silent Mute</a>
                    <a className="dropdown-item" href="#kick-window-popup" id="kick-window-popup" title="Kick"><i className="sprite kick-ico"></i>Kick</a>
                    <a className="dropdown-item" href="#ban-popup" id="ban-popup" title="Ban Popup"><i className="sprite ban-ico"></i>Ban</a>
                    <a className="dropdown-item popup sub-popup" href="#user-report-system" id="OpenRealPopup" title="Report This User"><i className="sprite report-ico"></i>Report this user</a>
                    <a className="dropdown-item popup" href="#real-info" id="OpenReal" title="Show Real Info"><i className="sprite info-ico"></i>Show real info</a>
                    <a className="dropdown-item popup mob-full-window" href="#view-profile" id="view-profile" title="View Profile"><i className="sprite profile-ico"></i>View Profile</a>
                </span>
                <ViewUserProfile />
                <ReportSystem />
                <ShowRealInfo />
            </span>
        )
    }
}
