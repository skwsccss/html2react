import React, { Component } from 'react';
import ChangeStatus from './mob/changeStatus';
import ChangeRoom from './mob/changeRoom';
import FloatLeft from './mob/floatleftmob';

class MobileHeader extends Component {

    constructor(props) {
        super();
        this.state = {
            init: '0'
        }
    }

    render() {
        return (
            <div className="row mob-top-header align-items-center">
                <div className="col-12 d-flex align-items-center mob-space-between">
                    <div className="profile-mob">
                        <div className="float-left back-btn">
                            <span><i className="back-icon back-arrow"></i></span>
                        </div>
                        <div className="avtar-info">
                            <div className="float-left profile-avtar">
                                <img src={"/images/chat-photo.jpg"} className="img-fluid" alt="chat" />
                                <span className="status-signal">&nbsp;</span>
                            </div>
                            {/* <!--change status--> */}
                            <ChangeStatus />
                        </div>
                        <ChangeRoom />
                    </div>
                    <FloatLeft />
                </div>
            </div>
        )
    }
}

export default MobileHeader;