import React, { Component } from 'react'
import ProfileHeader from './profileHeader'
import SidebarSearch from './search'
import FriendList from './friendList/friendList'
import RadioPlayer from './radioPlayer'
import PressTalk from './pressTalk'

export default class MainSidebar extends Component {
    render() {
        return (
            <div id="mySidebar" className="sidebar active">
                <ProfileHeader />
                <SidebarSearch />
                <FriendList />
                <RadioPlayer />
                <PressTalk />
            </div>
        )
    }
}
