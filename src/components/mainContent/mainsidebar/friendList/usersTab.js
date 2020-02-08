import React, { Component } from 'react';
import PropTypes from 'prop-types'


class UsersTab extends Component {
   

    render() {
        const { users } = this.props;
        const userList = users.map((user, index) => (
            <li key={index} className={index % 2 === 0 ? 'blue-text' : 'pink-text'}>
                <span className="arrow-right-caret"></span>
                <span>
                    <img alt="avatar" src={`/css/dist/theme01/images/${user.userLevel}.png`} className="img-fluid imagePath" data-toggle="tooltip" title={`User-${user.userLevel}`} />
                </span>
                <span className="profile-avtar">
                    <img alt="avatar" src={"/css/dist/theme01/images/chat-photo.jpg"} className="img-fluid" />
                    <span className={`${user.status}-signal`}>&nbsp;</span>
                </span>
                <span>{user.name}</span>
                <span className="float-right">
                    <a href="#video01-popup" className="calling-icon">
                        <img alt="avatar" src={`/css/dist/theme01/images/${user.actionTitle}.png`} data-toggle="tooltip" title={user.actionTitle} className="img-fluid m-t-xs m-r-sm call-popup imagePath" />
                    </a>
                    <img alt="avatar" src={`/css/dist/theme01/images/${user.gender === 'Men' ? 'men' : 'women'}.png`} data-toggle="tooltip" title={user.gender} className="img-fluid m-t-xs imagePath" />
                </span>
            </li>
        ))
        return (
            <div className="tab-pane show active" id="user" role="tabpanel" aria-labelledby="user-tab">
                <div className="list-tabpane-ttl"> AVAILABLE NOW</div>
                <ul className="user-list scroll-listing">
                    {userList}
                </ul>
            </div>
        )
    }
}

UsersTab.propTypes = {
    users: PropTypes.array.isRequired
}

export default UsersTab