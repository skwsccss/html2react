import React, { Component } from 'react'

export default class ProfileSection extends Component {
    render() {
        return (
            <span className="profile-section no-animation">
                <span className="btn-group dropleft">
                    <span className="profile-avtar lg-image click-picture">
                        <img alt="noimg" src="/css/dist/theme01/images/view-profile-avatar.png" className="img-fluid" />
                        <span className="status-signal">&nbsp;</span>
                    </span>
                </span>
                <span className="big-profile-pics">
                    <span className="back-btn-pics">
                        <span><img alt="noimg" src="/css/dist/theme01/images/white-back-arrow.png" className="img-fluid back-arrow" /></span>
                    </span>
                    <span className="large-pics-block">
                        <span className="name-ttl">
                            <img alt="noimg" src="/css/dist/theme01/images/lg-crown.png" className="lg-crown mr-2" data-toggle="tooltip" title="User-Level1" />
                            Kanyo cube
                                    </span>
                        <span className="img-sec"><img alt="noimg" src="/css/dist/theme01/images/view-profile-avatar.png" className="img-fluid" /> <span className="status-signal">&nbsp;</span></span>
                    </span>
                </span>
                <span className="profile-detail">
                    <span className="name-ttl">
                        <img alt="noimg" src="/css/dist/theme01/images/lg-crown.png" className="lg-crown mr-2" data-toggle="tooltip" title="User-Level1" />
                        <img alt="noimg" src="/css/dist/theme01/images/white-crown.png" className="sm-crown mr-2" data-toggle="tooltip" title="User-Level1" />
                        Kanyo cube
                                </span>
                    <span className="about-txt">
                        <strong>About me :</strong> I love food very much i love sports and
                        also have a lot to do.
                                </span>
                </span>
            </span>
        )
    }
}
