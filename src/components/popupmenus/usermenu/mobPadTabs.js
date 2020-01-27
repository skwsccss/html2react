import React, { Component } from 'react'
import ProfileInfo from './profileInfo'
import ProfileFriend from './profileFriend'
import ProfileGift from './profileGift'

export default class MobPadTabs extends Component {
    render() {
        return (
            <span className="mob-pad-tabs">
                <span className="submenu-box-tabs pop-menu mob-tabs">
                    <span className="nav nav-tabs" id="nav-tab" role="tablist">
                        <a className="nav-item nav-link active popup" id="profile-info-tab" data-toggle="tab" href="#profile-info" role="tab" aria-controls="profile-info" aria-selected="true">Info</a>
                        <a className="nav-item nav-link popup" id="profile-friend-tab" data-toggle="tab" href="#profile-friend" role="tab" aria-controls="profile-friend" aria-selected="false">Friends</a>
                        <a className="nav-item nav-link popup" id="profile-gift-tab" data-toggle="tab" href="#profile-gift" role="tab" aria-controls="profile-gift" aria-selected="false">Gift Received</a>
                    </span>
                </span>
                <span className="tab-content py-3 px-3 px-sm-0" id="nav-tabContent">
                    <ProfileInfo />
                    <ProfileFriend />
                    <ProfileGift />
                </span>
            </span>
        )
    }
}
