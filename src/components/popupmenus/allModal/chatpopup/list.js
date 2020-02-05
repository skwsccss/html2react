import React, { Component } from 'react'

export default class ChatPopupList extends Component {
    render() {
        const { username, msg } = this.props;
        return (
            <div className="swipeable">
                <div className="chat-list inner">
                    <span className="openchat-avtar-pics">
                        <img src="/css/dist/theme01/images/opechat-pic.png" className="img-fluid" alt="no img" />
                        <span className="status-signal">&nbsp;</span>
                    </span>
                    <a className="latest-openchat" href="#openchat">
                        <span className="left-block">
                            <span className="openchat-text">
                                <span className="friend-name"><strong>{username}</strong></span>
                                <span className="friend-message">invited you to join Group Chat</span>
                            </span>
                        </span>
                        <span className="right-block">
                            <span className="alert-text">
                                <span className="msg-time">Now</span>
                                <span className="badge">{msg}</span>
                            </span>
                            <span className="chat-menu-block">
                                <i className="chat-menu-icon chat-more-menu target-menu"></i>
                                <span className="arrow-right-caret"></span>
                            </span>
                        </span>
                    </a>
                </div>
                <div className="action-button desk-hidden mob-display">
                    <div className="delete"> <span className="text">Delete</span></div>
                    <div className="rename"> <span className="text">Rename Group</span></div>
                    <div className="exit"> <span className="text">Exit Group</span></div>
                </div>
            </div>
        )
    }
}
