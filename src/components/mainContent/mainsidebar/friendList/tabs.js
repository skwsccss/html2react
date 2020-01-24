import React, { Component } from 'react'
import UsersTab from './usersTab'
import FriendsTab from './friendsTab'
import RoomsTab from './roomsTab'

export default class Tabs extends Component {

    render() {
        const { users, friends, rooms } = this.props;
        return (
            <div className="tab-content remove-overflow" id="online-users">
                <UsersTab users={users} />
                <FriendsTab friends={friends} />
                <RoomsTab rooms={rooms} />
            </div>
        )
    }
}
