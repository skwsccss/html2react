import React, { Component } from 'react';
import PropTypes from 'prop-types'


// import 



class MobRoomList extends Component {
    
    render() {
        const { rooms } = this.props;
        const mobList = rooms.rooms.map((item, index) => (
            <li key={index}>
                <span className="arrow-right-caret"></span>
                <span className="room-avtar">
                    <span className="room-thumb"><img src={"/css/dist/theme01/images/room-pics.png"} className="img-fluid mCS_img_loaded" alt="group" /></span>
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
            <div className="mobile-room-list popup-box remove-overflow" id="room-mob">
                <div className="row align-items-center justify-content-between theme-light-bg no-gutter">
                    <div className="col-12 search-bar">
                        <div className="search-input show">
                            <input placeholder="Room search" type="text" />
                            <button title="Search Menu"><i className="sprite search-ico"></i></button>
                        </div>
                        <span className="roomlist-close">X</span>
                    </div>
                </div>

                <div className="user-list-scroll">
                    <div className="m-l-sm m-t-sm"> ROOM LIST</div>
                    <ul className="room-listing">
                        {mobList}
                    </ul>
                </div>
            </div>
        )
    }
}

MobRoomList.propTypes = {
    rooms: PropTypes.object.isRequired
}

export default MobRoomList;