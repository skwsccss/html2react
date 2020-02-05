import React, { Component } from 'react';
import { Users } from '../../../api/users'

export default class ProfileFriend extends Component {
    render() {
        const friendList = Users.map((item, index) => (
            <tr key={index}>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
                <td>
                    <span className="friends-list">
                        <img alt="no-img" className="mar-left-2" src="/css/dist/theme01/images/friend-photo.jpg" />
                        <span className="friend-name">{item.name}</span>
                    </span>
                </td>
            </tr>
        ))
        return (
            <span className="tab-pane" id="profile-friend" role="tabpanel" aria-labelledby="profile-friend-tab">
                <table id="profile-listData" className="display" style={{ width: "100%" }}>
                    <thead>
                        <tr>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {friendList}
                    </tbody>
                </table>
            </span>
        )
    }
}
