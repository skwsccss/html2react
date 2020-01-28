import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFriend } from "../../../actions/fetchAction";

class MobileFriendList extends Component {
    UNSAFE_componentWillMount() {
        this.props.fetchFriend();
    }
    render() {
        const { friends } = this.props;
        const friendList = friends.map((friend, index) => (
            <li key={index} className={index % 2 === 0 ? 'blue-text' : 'pink-text'}>
                <span className="arrow-right-caret"></span>
                <span>
                    <img alt="avatar" src={`/images/${friend.userLevel}.png`} className="img-fluid imagePath" title={`User-${friend.userLevel}`} />
                </span>
                <span className="profile-avtar">
                    <img alt="avatar" src={"/images/chat-photo.jpg"} className="img-fluid" />
                    <span className={`${friend.status}-signal`}>&nbsp;</span>
                </span>
                <span>{friend.name}</span>
                <span className="float-right">
                    <a href="#video01-popup" className="calling-icon">
                        <img alt="avatar" src={`/images/${friend.actionTitle}.png`} title={friend.actionTitle} className="img-fluid m-t-xs m-r-sm call-popup imagePath" />
                    </a>
                    <img alt="avatar" src={`/images/${friend.gender === 'Men' ? 'men' : 'women'}.png`} title={friend.gender} className="img-fluid m-t-xs imagePath" />
                </span>
            </li>
        ))
        return (
            <div className="modal01 fadeIn friends-list footer-links header-popup" id="friends-popup" tabIndex="-1" role="dialog" aria-labelledby="friends-popup" aria-hidden="true">
                <div className="modal-dialog friends-model sm-modal" role="document">
                    <div className="modal-content">
                        <div className="row  mob-top-header align-items-center header-shadow">
                            <div className="col-12 d-flex align-items-center mob-space-between">
                                <div className="profile-mob">
                                    <div className="float-left back-btn ">
                                        <span><i className="back-icon back-arrow"></i></span>
                                    </div>
                                    <div className="avtar-info">
                                        <div className="float-left profile-avtar">
                                            <img src="/images/chat-photo.jpg" className="img-fluid" alt="avatarinfo" />
                                            <span className="status-signal">&nbsp;</span>
                                        </div>
                                        <div className="status-dropdown">
                                            <ul>
                                                <li className="avtar-info-box">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span className="d-flex align-items-center">
                                                            <span className="user-detail">
                                                                <span className="d-flex align-items-center">
                                                                    <span>
                                                                        <img src="/images/crown.png" className="img-fluid m-r-sm m-w-14" title="User-Level1" alt="cartImg" />
                                                                    </span>
                                                                    <span>
                                                                        <span className="user-name-sm">Heng liang</span><br />
                                                                        <span>User Level </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="credit-txt">
                                                                <img src="/images/credit.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartImg" />1000<img src="/images/cart.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartimg" />
                                                            </span>
                                                        </span>
                                                        <span>
                                                            <span className="close-info" title="Close"> X</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="seprator">
                                                    <a className="dropdown-item" href="#href"><span className="status-ico online"></span>Online</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico busy"></span>Busy</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico away"></span>Away</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico in-visible"></span>Invisible</a>
                                                </li>
                                                <li className="seprator account-link">
                                                    <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/images/right-icon.png" className="img-fluid" alt="account" />My Account</a>
                                                    <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/images/right-icon.png" className="img-fluid" alt="changeavatar" />Change Avatar</a>
                                                </li>
                                                <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" title="Logout"><img src="/images/logout.png" className="img-fluid" alt="logout" />Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title theme-txt-color">
                                    Friends
                                </div>
                                <div className="moremenu">
                                    <a href="#headermore">
                                        <i className="sprite header-more-ico"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body openchat-scroll">
                            <div className="friend-list-box">
                                <div className="title-block">
                                    <div className="row align-items-center mt-3 mb-3">
                                        <div className="m-l-sm col-auto pl-2 "> ONLINE FRIENDS</div>
                                        <div className="col-auto ml-auto  pr-2">
                                            <input className="search-group" type="text" placeholder="search" />
                                            <a href="#search" className="group-search-icon">  <img className="img-fluid" src="/images/search-black-ico.png" alt="searchblckico" /></a>
                                        </div>
                                    </div>
                                </div>
                                <ul className="user-list02 ">
                                    {friendList}
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

MobileFriendList.propTypes = {
    friends: PropTypes.array.isRequired,
    fetchFriend: PropTypes.func.isRequired,
}

const mapStateToProps = (state) => ({
    friends: state.friends.friends,
})

const mapDispatchToProps = ({
    fetchFriend,
});

const MobileFriendListMapped = connect(mapStateToProps, mapDispatchToProps)(MobileFriendList)

export default MobileFriendListMapped;