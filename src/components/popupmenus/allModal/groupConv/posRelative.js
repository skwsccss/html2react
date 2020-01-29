import React, { Component } from 'react'
import Emojis from '../../../mainContent/mainboard/mbComponets/footer/emojis';

export default class PositionRelative extends Component {
    render() {
        const data = [1, 2, 3, 4, 5];
        const data1 = [1, 1, 11, 1, 11, 1, 1, 1, 11, 1, 1, 11, 1, 1, 11, 1];
        const result = data.map((item, index) => (
            <div className="col-12 m-b-sm d-flex align-items-start" key={index}>
                <div className="profile-pics btn-group dropright">
                    <span className="dropdown-open">
                        <img src="/images/profile-pics/02.png" className="img-fluid rounded-circle b-user-pics mCS_img_loaded" alt="no" />
                        <span className="arrow-left-caret"></span>
                    </span>
                </div>
                <div className="chat-line darkgray-bg-line d-flex justify-content-between align-items-center m-full-block">
                    <span className="d-flex m-left-block">
                        <span className="btn-group">
                            <span className="dropdown-open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>Lín  Zhèng :</b>
                                <span className="arrow-left-caret"></span>
                            </span>
                        </span>
                        <span>&nbsp;Hello Everyone!!</span>
                    </span>
                    <span className="float-right font-12 m-right-block">05:00 PM</span>
                </div>
            </div>
        ))
        const result1 = data1.map((item, index) => (
            <li className="blue-text" key={index}>
                <span className="arrow-right-caret"></span>
                <span>
                    <img src="/images/gold-taj.png" className="img-fluid imagePath" title="User-Level1" alt="no" />
                </span>
                <span className="profile-avtar">
                    <img src="/images/chat-photo.jpg" className="img-fluid" alt="no" />
                    <span className="away-signal">&nbsp;</span>
                </span>
                <span>kanyo cube</span>
                <span className="float-right">
                    <a href="#video01-popup" className="calling-icon">
                        <img src="/images/video.png" title="Video-Call" className="img-fluid m-t-xs m-r-sm call-popup imagePath" alt="no" />
                    </a>
                    <img src="/images/men.png" title="Men" className="img-fluid m-t-xs imagePath" alt="no" />
                </span>
            </li>
        ))
        return (
            <div className="position-relative">
                <div className="group-convesat-area active">
                    <div className="group-chatscroll">
                        {result}
                    </div>
                    <div className="modal-footer hidden-mob">
                        <div className="fixed-footer">
                            <div className="row no-gutters mb-01 align-items-center justify-content-between white-bg">
                                <div className="col-auto ">
                                    <Emojis />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="group-conversation-block show">
                    <div className="d-flex align-items-center justify-content-end mb-3 pr-3">
                        <a href="#create-group-popup" className="icons-rounded create-group-popup" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                        <a href="#camera-request-popup" className="theme-bg icons-rounded camera-request-popup" title="Video Call"><i className="sprite video-ico z-disable"></i></a>
                        <a href="#voicecall" className="icons-rounded" title="Voice Call"><i className="sprite call-ico z-disable"></i></a>
                    </div>
                    <div className="m-l-sm font-8"> ONLINE FRIENDS</div>
                    <div className="scroll-sec">
                        <ul className="user-list01">
                            {result1}
                        </ul>
                    </div>
                </div>
            </div>
        )
    }
}
