import React, { Component } from 'react'

export default class UserMoreMenu extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this)
    }
    clicked() {
        console.log('clicked');
    }
    render() {
        const { toggle } = this.props;
        return (
            <span className={`dropdown-menu ${toggle ? 'show' : ''}`}>
                <a className="dropdown-item logout z-disable" title="Logout" href="#logout-popup" onClick={this.clicked()}><i className="sprite logout-ico m-r-10"></i>Logout</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#myaccount-popup" onClick={this.clicked()} title="My Account"><i className="sprite myaccount-ico m-r-10"></i>My account</a>
                <span className="seprator"></span>
                <a className="dropdown-item" onClick={this.clicked()} href="#change-avtar-popup" title="Change Avatar"><i className="sprite change-avtar-ico m-r-10"></i>Change avatar</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#virtual-currency-popup" onClick={this.clicked()} title="Buy Credit"><i className="sprite buy-credit01-ico m-r-10"></i>Buy credit</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#gift-popup" onClick={this.clicked()} title="Send Gift"><i className="sprite send-gift-ico m-r-10"></i>Send gift</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#upgrade-popup" onClick={this.clicked()} title="Upgrade Account"><i className="sprite upgrade-ico m-r-10"></i>Upgrade your account</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#settingbox-popup" onClick={this.clicked()} title="Options"><i className="sprite settings-ico m-r-10"></i>Options</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#ignore-list-popup" onClick={this.clicked()} title="Ignore"><i className="sprite ignore-list-ico m-r-10"></i>Ignore list</a>
                <a className="dropdown-item" href="#banmanagment-popup" onClick={this.clicked()} title="Ban Management">
                    <i className="sprite ban-managment-ico m-r-10"></i>Ban management
                                </a>
                <a className="dropdown-item" href="#1" title="Clear Screen"><i className="sprite clear-ico m-r-10"></i>Clear screen for all</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#1" title="Turn Off Sound"><i className="sprite sound-ico m-r-10"></i>Turn off sound</a>
                <a className="dropdown-item" href="#1" title="Stop Scrolling"><i className="sprite scroll-ico m-r-10"></i>Stop scrolling</a>
                <a className="dropdown-item" href="#1" title="Clear Screen"><i className="sprite clear-ico m-r-10"></i>Clear screen</a>
                <a className="dropdown-item" href="#1" title="Exit Room"><i className="sprite exit-ico m-r-10"></i>Exit room</a>
                <span className="seprator"></span>
                <a className="dropdown-item" href="#2" title="Moderated Chat"><i className="sprite mchat-ico m-r-10"></i>Turn on moderatated chat</a>
                <a className="dropdown-item" href="#security-setting-popup" onClick={this.clicked()} title="Security Setting"><i className="sprite security-ico m-r-10"></i>Secutiry option</a>
                <a className="dropdown-item" href="#send-announcement-popup" onClick={this.clicked()} title="Send Announcment"><i className="sprite announcement-ico m-r-10"></i>Send announcment</a>
            </span>
        )
    }
}
