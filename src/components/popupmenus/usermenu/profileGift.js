import React, { Component } from 'react'

export default class ProfileGift extends Component {
    render() {
        return (
            <span className="tab-pane" id="profile-gift" role="tabpanel" aria-labelledby="profile-gift-tab">
                <ul id="received-gift" className="pagination justify-content-end">
                    <li className="page-item z-disable">
                        <a href="#greceivedpage01" className="page-link bg-none"><i className="first-page"></i></a>
                    </li>
                    <li className="page-item z-disable">
                        <a href="#greceivedpage01" className="page-link bg-none"><i className="prev-page"></i></a>
                    </li>
                    <li className="page-item active z-disable">
                        <a href="#greceivedpage01" className="page-link theme-bg">1</a>
                    </li>
                    <li className="page-item z-disable">
                        <a href="#greceivedpage02" className="page-link">
                            2
                        </a>
                    </li>
                    <li className="page-item z-disable">
                        <a href="#greceivedpage02" className="page-link bg-none"><i className="next-page"></i></a>
                    </li>
                    <li className="page-item z-disable">
                        <a href="#greceivedpage02" className="page-link bg-none"> <i className="last-page"></i></a>
                    </li>
                </ul>
                <span className="pagination-container show hide five-row fadeIn" id="greceivedpage01">
                    <span className="row">
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                    </span>
                </span>
                <span className="pagination-container hide five-row fadeIn" id="greceivedpage02">
                    <span className="row">
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                        <span className="col-6 col-sm-3 col-md-6 d-flex align-items-center gift-box-section">
                            <span className="gift-img">
                                <img alt="no-img" src="/css/dist/theme01/images/cycle-gift.jpg" />
                                <span className="gift-txt">Cycle</span>
                            </span>
                            <span className="sender-info">
                                <span className="sender-name">From Lin Zheng</span>
                                <span className="time-info"> 4 Days ago</span>
                            </span>
                        </span>
                    </span>
                </span>
            </span>
        )
    }
}
