import React, { Component } from 'react'

export default class UserMoreMenu extends Component {
   
    render() {
        return (
            <span className={`dropdown-menu`}>
                <a className="dropdown-item logout z-disable logout-popup" title="Logout" href="#logout-popup"><i className="sprite logout-ico m-r-10"></i>Logout</a>
                <span className="seprator"></span>
                <a className="dropdown-item myaccount-popup" href="#myaccount-popup" title="My Account"><i className="sprite myaccount-ico m-r-10"></i>My account</a>
                <span className="seprator"></span>
                <a className="dropdown-item change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><i className="sprite change-avtar-ico m-r-10"></i>Change avatar</a>
                <span className="seprator"></span>
                <a className="dropdown-item virtual-currency-popup" href="#virtual-currency-popup" title="Buy Credit"><i className="sprite buy-credit01-ico m-r-10"></i>Buy credit</a>
                <span className="seprator"></span>
                <a className="dropdown-item gift-popup" href="#gift-popup" title="Send Gift"><i className="sprite send-gift-ico m-r-10"></i>Send gift</a>
                <span className="seprator"></span>
                <a className="dropdown-item upgrade-popup" href="#upgrade-popup" title="Upgrade Account"><i className="sprite upgrade-ico m-r-10"></i>Upgrade your account</a>
                <span className="seprator"></span>
                <a className="dropdown-item settingbox-popup" href="#settingbox-popup" title="Options"><i className="sprite settings-ico m-r-10"></i>Options</a>
                <span className="seprator"></span>
                <a className="dropdown-item ignore-list-popup" href="#ignore-list-popup" title="Ignore"><i className="sprite ignore-list-ico m-r-10"></i>Ignore list</a>
                <a className="dropdown-item banmanagment-popup" href="#banmanagment-popup" title="Ban Management">
                    <i className="sprite ban-managment-ico m-r-10"></i>Ban management
                                </a>
                <a className="dropdown-item " href="#1" title="Clear Screen"><i className="sprite clear-ico m-r-10"></i>Clear screen for all</a>
                <span className="seprator"></span>
                <a className="dropdown-item " href="#1" title="Turn Off Sound"><i className="sprite sound-ico m-r-10"></i>Turn off sound</a>
                <a className="dropdown-item " href="#1" title="Stop Scrolling"><i className="sprite scroll-ico m-r-10"></i>Stop scrolling</a>
                <a className="dropdown-item " href="#1" title="Clear Screen"><i className="sprite clear-ico m-r-10"></i>Clear screen</a>
                <a className="dropdown-item " href="#1" title="Exit Room"><i className="sprite exit-ico m-r-10"></i>Exit room</a>
                <span className="seprator"></span>
                <a className="dropdown-item " href="#2" title="Moderated Chat"><i className="sprite mchat-ico m-r-10"></i>Turn on moderatated chat</a>
                <a className="dropdown-item security-setting-popup" href="#security-setting-popup" title="Security Setting"><i className="sprite security-ico m-r-10"></i>Secutiry option</a>
                <a className="dropdown-item send-announcement-popup" href="#send-announcement-popup" title="Send Announcment"><i className="sprite announcement-ico m-r-10"></i>Send announcment</a>
            </span>
        )
    }
}
