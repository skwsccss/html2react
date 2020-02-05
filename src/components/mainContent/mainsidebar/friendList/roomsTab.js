import React, { Component } from 'react'

export default class RoomsTab extends Component {
    render() {
        const { rooms } = this.props;
        const roomList = rooms.map((item, index) => (
            <li key={index}>
                <span className="arrow-right-caret"></span>
                <span className="room-avtar">
                    <span className="room-thumb"><img src={'/css/dist/theme01/images/room-pics.png'} className="img-fluid mCS_img_loaded" alt="group" /></span>
                    <span className="room-detail">
                        <span className="room-head">
                            {item.name}
                        </span>
                        <span className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center justify-content-center mt-2">
                            <a className="btn sm-btn theme-bg mob-radius-btn m-r-sm" title="Login" href="#3">LOGIN</a>
                        </span>
                    </span>
                </span>

                <span className="float-right text-right">
                    <span className="room-detail">
                        <span className="room-head">
                            {item.activated}/{item.total}
                        </span>
                        <span className="chat-option-icons">
                            <a className="btn chat-btn" href="#3" title="Video Room"><i className="room-sprite room-video-ico"></i></a>
                            <a className="btn chat-btn" href="#3" title="Voice Room"><i className="room-sprite room-voice-ico"></i></a>
                            <a className="btn chat-btn" href="#3" title="Chat Room"><i className="room-sprite room-chat-ico"></i></a>
                        </span>
                    </span>
                </span>
            </li>
        ));
        return (
            <div className="tab-pane" id="room" role="tabpanel" aria-labelledby="room-tab">
                <div className="list-tabpane-ttl"> ROOM LIST</div>
                <ul className="room-listing scroll-listing">
                    {roomList}
                </ul>
            </div>
        )
    }
}
