import React, { Component } from 'react';

class GroupChatComponent extends Component {
    render() {
        return (
            <div className="col-md-3 col-sm-6 col-12 mb-4">
                <div className="box-shadow white-bg">
                    <div className="d-flex justify-content-end align-items-center">
                        <i className="theme-user-group-ico mr-2"></i><span className="sm-theme-txt">60/1000</span>
                    </div>
                    <div className="d-flex align-items-center">
                        <span className="room-thumb"><img src="/images/room-pics.png" className="img-fluid mCS_img_loaded" alt="noimg"/></span>
                        <span className="room-detail">
                            <span className="room-head">
                                UI/UX Team
                                            </span>
                            <span className="room-description">
                                Design group chat room
                                            </span>
                        </span>
                    </div>
                    <div className="d-flex justify-content-end align-items-center">
                        <a href="#video-call" className="room-opt-btn chat-btn" title="video-call"><i className="room-ico-sprite theme-videocall-ico"></i></a>
                        <a href="#voidCall" className="room-opt-btn chat-btn" title="voice-call"><i className="room-ico-sprite theme-voicecall-ico"></i></a>
                        <a href="#chatroom" className="room-opt-btn chat-btn" title="chat-room"><i className="room-ico-sprite theme-chat-ico"></i></a>
                    </div>
                </div>
            </div>
        );
    }
}

export default GroupChatComponent;