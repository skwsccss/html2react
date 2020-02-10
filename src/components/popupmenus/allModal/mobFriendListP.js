import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchFriend } from "../../../actions/fetchAction";
import MobTopHeader from './mobTopheader';

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
                        <MobTopHeader title="Friends" />
                        <div className="modal-body openchat-scroll">
                            <div className="friend-list-box">
                                <div className="title-block">
                                    <div className="row align-items-center mt-3 mb-3">
                                        <div className="m-l-sm col-auto pl-2 "> ONLINE FRIENDS</div>
                                        <div className="col-auto ml-auto  pr-2">
                                            <input className="search-group" type="text" placeholder="search" />
                                            <a href="#search" className="group-search-icon">  <img className="img-fluid" src="/css/dist/theme01/images/search-black-ico.png" alt="searchblckico" /></a>
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