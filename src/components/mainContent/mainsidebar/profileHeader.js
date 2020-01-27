import React, { Component } from 'react'
import UserMoreMenu from './userMoreMenu';

export default class ProfileHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleUserMore: false
        }
        this.toggleUserMore = this.toggleUserMore.bind(this);
    }
    toggleUserMore() {
        this.setState({ toggleUserMore: !this.state.toggleUserMore })
    }
    render() {
        return (
            <div className="row align-items-center justify-content-between theme-bg no-gutter user-tabline">
                <div className="col-9">
                    <div className="profile-section">
                        <span className="btn-group dropleft">
                            <span className="sidebar-status-dropdown">
                                <span className="profile-avtar lg-image">
                                    <img src={"/images/chat-photo.jpg"} className="img-fluid" alt="avatar" />
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
                    <span className={`btn-group dropdown user-more-menu ${this.state.toggleUserMore ? 'show' : ''}`}>
                        <button className="profile-menu dropdown-toggle" onClick={this.toggleUserMore} title="User Menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded={this.state.toggleUserMore}><i className="sprite menu-ico"></i></button>
                        <UserMoreMenu
                            toggle={this.state.toggleUserMore}
                        />
                    </span>
                </div>
            </div>
        )
    }
}
