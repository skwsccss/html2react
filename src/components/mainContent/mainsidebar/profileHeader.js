import React, { Component } from 'react'
import UserMoreMenu from './userMoreMenu';

export default class ProfileHeader extends Component {

    render() {
        return (
            <div className="row align-items-center justify-content-between theme-bg no-gutter user-tabline">
                <div className="col-9">
                    <div className="profile-section">
                        <span className="btn-group dropleft">
                            <span className="sidebar-status-dropdown">
                                <span className="profile-avtar lg-image">
                                    <img src={"/css/dist/theme01/images/chat-photo.jpg"} className="img-fluid" alt="avatar" />
                                    <span className="status-signal">&nbsp;</span>
                                </span>
                                <span className="arrow-right-caret"></span>
                            </span>

                        </span>
                        <span className="profile-detail">
                            <span className="name-ttl">Heng liang</span>
                            <span className="post-ttl">UI/UX Designer</span>
                            <span className="rate-ttl"><i className="sprite coin-ico"></i>1000</span>
                        </span>
                    </div>
                </div>
                <div className="col-3">
                    <span className={`btn-group dropdown user-more-menu`}>
                        <button className="profile-menu dropdown-toggle" title="User Menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"><i className="sprite menu-ico"></i></button>
                        <UserMoreMenu />
                    </span>
                </div>
            </div>
        )
    }
}
