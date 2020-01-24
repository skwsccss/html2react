import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { fetchUsers, fetchFriend, fetchRoom } from "../../../../actions/fetchAction";
import PrivateChat from './privateChat'
import Tabs from './tabs'

class FriendList extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchUsers();
        this.props.fetchFriend();
        this.props.fetchRoom();
    }
    render() {
        const { users, friends, rooms } = this.props;
        return (
            <div className="friend-list-tab ">
                <ul className="nav nav-tabs" id="myTab" role="tablist">
                    <li className="nav-item">
                        <a className="nav-link active" id="user-tab" data-toggle="tab" href="#user" role="tab" aria-controls="user" aria-selected="true"><i className="sprite user-ico"></i>USER({users.length})</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="friend-tab" data-toggle="tab" href="#friends" role="tab" aria-controls="friends" aria-selected="false"><i className="sprite friends-ico"></i>FRIENDS({friends.length})</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" id="room-tab" data-toggle="tab" href="#room" role="tab" aria-controls="room" aria-selected="false"><i className="sprite room-ico"></i>ROOMS({rooms.length})</a>
                    </li>
                </ul>
                <PrivateChat />
                <Tabs
                    users={users}
                    friends={friends}
                    rooms={rooms}
                />
            </div>
        )
    }
}

FriendList.propTypes = {
    users: PropTypes.array.isRequired,
    friends: PropTypes.array.isRequired,
    rooms: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired,
    fetchRoom: PropTypes.func.isRequired,
    fetchFriend: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    users: state.users.users,
    friends: state.friends.friends,
    rooms: state.rooms.rooms
})

const mapDispatchToProps = ({
    fetchUsers,
    fetchFriend,
    fetchRoom
});

const FriendListMapped = connect(mapStateToProps, mapDispatchToProps)(FriendList)

export default FriendListMapped