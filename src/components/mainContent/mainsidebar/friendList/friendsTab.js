import React, { Component } from 'react'

export default class FriendsTab extends Component {
    render() {
        const { friends } = this.props;
        const friendList = friends.map((friend, index) => (
            <li key={index} className={index % 2 === 0 ? 'blue-text' : 'pink-text'}>
                <span className="arrow-right-caret"></span>
                <span>
                    <img alt="avatar" src={`/css/dist/theme01/images/${friend.userLevel}.png`} className="img-fluid imagePath" data-toggle="tooltip" title={`User-${friend.userLevel}`} />
                </span>
                <span className="profile-avtar">
                    <img alt="avatar" src={"/css/dist/theme01/images/chat-photo.jpg"} className="img-fluid" />
                    <span className={`${friend.status}-signal`}>&nbsp;</span>
                </span>
                <span>{friend.name}</span>
                <span className="float-right">
                    <a href="#video01-popup" className="calling-icon">
                        <img alt="avatar" src={`/css/dist/theme01/images/${friend.actionTitle}.png`} data-toggle="tooltip" title={friend.actionTitle} className="img-fluid m-t-xs m-r-sm call-popup imagePath" />
                    </a>
                    <img alt="avatar" src={`/css/dist/theme01/images/${friend.gender === 'Men' ? 'men' : 'women'}.png`} data-toggle="tooltip" title={friend.gender} className="img-fluid m-t-xs imagePath" />
                </span>
            </li>
        ))
        return (
            <div className="tab-pane friend-listing" id="friends" role="tabpanel" aria-labelledby="friends-tab">
                <div className="online-ttl-fixed list-tabpane-ttl fixed-online"> ONLINE FRIENDS</div>
                <ul className="user-list online-listing calc-total-height">
                    {friendList}
                </ul>
            </div>
        )
    }
}
