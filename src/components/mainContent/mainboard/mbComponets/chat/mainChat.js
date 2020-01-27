import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import RoomTabs from '../roomTabs';
import { fetchRoomTabs } from '../../../../../actions/fetchAction';
import ChatArea from './chatArea';
class MainChat extends Component {

    UNSAFE_componentWillMount() {
        this.props.fetchRoomTabs();
    }

    render() {
        const { roomTabs } = this.props;
        return (
            <div className="chat-room-tabs" id="chatTab">
                <RoomTabs
                    roomTabs={roomTabs}
                />
                <ChatArea roomTabs={roomTabs} />
            </div>
        )
    }
}

MainChat.propTypes = {
    roomTabs: PropTypes.array.isRequired,
    fetchRoomTabs: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    roomTabs: state.roomTabs.roomTabs,
})

const mapDispatchToProps = { fetchRoomTabs };

const MainChatMapped = connect(mapStateToProps, mapDispatchToProps)(MainChat);


export default MainChatMapped;