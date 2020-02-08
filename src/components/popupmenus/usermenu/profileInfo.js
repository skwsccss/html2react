import React, { Component } from 'react';

export default class ProfileInfo extends Component {
    
    render() {
        
        return (
            <span className="tab-pane show active" id="profile-info" role="tabpanel" aria-labelledby="profile-info-tab">
                <span className="row">
                    <span className="col-12 col-md-7">
                        <span className="profile-info-txt">
                            <span className="info-detail">
                                <span className="float-left">Age : </span><span className="mob-right">24</span>
                            </span>
                            <span className="info-detail">
                                <span className="float-left">Gender : </span><span className="mob-right">Male</span>
                            </span>
                            <span className="info-detail">
                                <span className="float-left">Location : </span><span className="mob-right">United Kingdom</span>
                            </span>
                            <span className="info-detail">
                                <span className="float-left">Last Seen : </span><span className="mob-right">24/12 17:56</span>
                            </span>
                            <span className="info-detail">
                                <span className="float-left">Member since : </span><span className="mob-right">2018-11-12</span>
                            </span>
                        </span>
                    </span>
                    <span className="col-12 col-md-5 hidden-sm">
                        <span className="profile-info-txt gray-light-bg">
                            <span>
                                <a className="dropdown-item open-popup" href="#private"><i className="sprite plus-ico"></i>Private Chat</a>
                                <a className="dropdown-item open-popup gift-popup" href="#gift-popup" data-toggle="tooltip" title="Gift-Popup"><i className="sprite gift-box01-ico"></i>Send Gift</a>
                                <a className="dropdown-item open-popup upgrade-popup" href="#upgrade-popup" data-toggle="tooltip" title="Upgrade-Popup"><i className="sprite upgrade-ico"></i>Upgrade from him/her</a>
                                <a className="dropdown-item open-popup ignore-list-popup" href="#ignore-list-popup" data-toggle="tooltip" title="Ignore List"><i className="sprite ignore-ico"></i>Ignore</a>
                            </span>
                            <a className="dropdown-item show-more-menu view-full-user" href="#view-full">View full user menu <i className="more-profile-menu"></i></a>
                            {/* <!--<a className="dropdown-item less-more-menu" href="#">View full user menu <img src="css/dist/theme01/images/less-profile-menu.png" /></a>--> */}
                        </span>

                    </span>
                </span>
            </span>
        )
    }
}
