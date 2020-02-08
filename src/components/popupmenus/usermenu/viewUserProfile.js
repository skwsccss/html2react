import React, { Component } from 'react'
import MainboardProfileHeader from './MbProfileHeader'
import ProfileMainMenu from './profileMainMenu'

export default class ViewUserProfile extends Component {
    render() {
        return (
            <span id="view-profile" className="view-profile-dropdown submenu width-count">
                <span className="mob-none"><span className="user-name theme-bg">Kanyo cube<span className="detail-close-btn" data-toggle="tooltip" title="Close">X</span></span></span>
                <MainboardProfileHeader />
                <ProfileMainMenu />
            </span>
        )
    }
}
