import React, { Component } from 'react';


class MobUserList extends Component {
    render() {
        const { users } = this.props;
        const userList = users.map((user, index) => (
            <li key={index} className={index % 2 === 0 ? "blue-text" : "pink-text"}>
                <span className="arrow-right-caret"></span>
                {
                    user.userLevel && user.userLevelImg ?
                        <span>
                            <img
                                src={"/blue-taj.png"}
                                className="img-fluid imagePath" data-toggle="tooltip" title={user.userLevel} alt="userlist"/>
                        </span> :
                        <span>&nbsp;</span>
                }
                <span className="profile-avtar">
                    <img src={"/css/dist/theme01/images/chat-photo.jpg"} className="img-fluid" alt="userlist" />
                    {/* <img src={require(user.userAvatar)} className="img-fluid" /> */}
                    <span className="away-signal">&nbsp;</span>
                </span>
                <span>{user.name}</span>
                <span className="float-right">
                    {user.actionImg ?
                        <a href="#1" className="calling-icon">
                            <img src={"/css/dist/theme01/images/hand.png"}
                                data-toggle="tooltip" title="Raise Hand"
                                className="imagePath img-fluid m-t-xs m-r-xs call-popup w-13" alt="userlist" />
                        </a> :
                        ''}
                    {/* {user.actionImg ? <a href="#1" className="calling-icon"> <img src={require(user.actionImg)} data-toggle="tooltip" title="Raise Hand" className="imagePath img-fluid m-t-xs m-r-xs call-popup w-13" /></a> : ''} */}
                    <img src={
                        `/css/dist/theme01/images${user.gender === 'Men' ?
                            "/men.png" :
                            "/women.png"}`}
                        data-toggle="tooltip" title={user.gender}
                        className="img-fluid m-t-xs imagePath" alt="userlist" />
                </span>
            </li >
        ))
        return (
            <div className="mobile-user-list popup-box remove-overflow" id="user-mob">
                <div className="row align-items-center justify-content-between theme-light-bg no-gutter">
                    <div className="col-12 search-bar">
                        <div className="search-input show">
                            <input placeholder="User search" type="text" />
                            <button data-toggle="tooltip" title="Search Menu"><i className="sprite search-ico"></i></button>
                        </div>

                        <span className="btn-group dropdown">
                            <span className="search-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" data-toggle="tooltip" title="User Menu"><i className="sprite search-menu-ico"></i></span>
                            <span className="dropdown-menu">
                                <a className="dropdown-item" href="#a"><i className="sprite male-search-ico"></i>Show only male</a>
                                <a className="dropdown-item" href="#a"><i className="sprite female-search-ico"></i>Show only female</a>
                                <a className="dropdown-item" href="#a"><i className="sprite mic-search-ico"></i>Show only mic</a>
                            </span>
                        </span>
                        <span className="userlist-close">X</span>
                    </div>
                </div>
                <div className="user-list-scroll">
                    <div className="m-l-sm m-t-sm"> AVAILABLE NOW</div>
                    <ul className="user-list">
                        {userList}
                    </ul>
                </div>
            </div>
        )
    }
}
export default MobUserList;