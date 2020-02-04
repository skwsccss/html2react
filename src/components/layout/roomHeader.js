import React, { Component } from 'react';

class RoomHeader extends Component {
    render() {
        return (
            <div className="container-fluid mob-lr-5" style={{ paddingLeft: '0px', paddingRight: '0px' }}>
                <div className="navbar row  mob-show top-header pl-0 align-items-center room-header">
                    <div className="col-auto mr-auto">
                        <div className="profile-mob">
                            <img src="/images/logo.png" className="img-fluid room-logo ml-2" alt="noimg" />
                        </div>
                    </div>
                    <div className="col-auto header-icons room-page-header">
                        <div className="btn-group">
                            <button type="button" className="btn btn-secondary dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <div className="room-profile-pics"><img src="/images/chat-photo.jpg" className="img-fluid" alt="noimg" /></div>
                                <span className="header-profile-menu">Hang liang</span>
                            </button>
                            <div className="dropdown-menu dropdown-menu-right login-register">
                                <a href="#login" className="dropdown-item loginpopup">Login</a>
                                <a href="#register" className="dropdown-item register-popup">Register</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default RoomHeader;