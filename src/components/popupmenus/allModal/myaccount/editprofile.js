import React, { Component } from 'react'

export default class EditProfile extends Component {
    render() {
        return (
            <div className="tab-pane" id="edit-profile" role="tabpanel" aria-labelledby="sound-tab">
                <div className="border-box lg-space">
                    <div className="row no-gutters align-items-start m-tb-15">
                        <div className="col-12 col-md-2 text-right chg-account-avatar">
                            <div className="account-avtar-change hidden-mob">
                                <a className="z-disable change-avtar-popup" href="#change-avtar-popup">Change Avatar <i className="arrow down"></i></a>
                            </div>
                            <div className="photo-frame d-flex">
                                <img src="/css/dist/theme01/images/chat-photo.jpg" className="img-fluid" alt="no img" />
                                <span className="status-signal">&nbsp;</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 pl-3">
                            <div className="profile-user-name mb-3">
                                <span className="d-flex">
                                    <span className="mr-1 hidden-mob"><img src="/css/dist/theme01/images/xlg-taj.png" title="User-Level1" alt="no img" /></span>
                                    <span className="mr-1 desk-hidden mob-display"><img src="/css/dist/theme01/images/crown.png" title="User-Level1" alt="no img" /></span>
                                    <span className="xlg-txt">
                                        Username <span className="theme-txt-color member-txt">Member</span>
                                    </span>
                                    <a className="account-upgrade z-disable hidden-mob upgrade-popup" href="#upgrade-popup" title="Upgrade-Popup"><i className="sprite upgrade-ico"></i>Upgrade your account</a>
                                </span>
                            </div>
                            <div className="m-center">
                                <a className="account-upgrade z-disable desk-hidden mob-display upgrade-popup" href="#upgrade-popup" title="Upgrade-Popup"><i className="sprite upgrade-ico"></i>Upgrade your account</a>
                            </div>

                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title">Gender:</span>
                                <span className="duration-select m-l-xs d-flex">
                                    <select className="z-disable">
                                        <option>Male</option>
                                        <option>Female</option>
                                    </select>
                                </span>
                            </div>
                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title">Age :</span>
                                <input type="text" />
                            </div>
                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title">Country :</span>
                                <span className="duration-select m-l-xs d-flex">
                                    <select className="z-disable">
                                        <option>United State</option>
                                        <option>United Kingdom</option>
                                        <option>India</option>
                                        <option>Australia</option>
                                    </select>
                                </span>
                            </div>
                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title">About Me :</span>
                                <textarea></textarea>
                            </div>
                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title hidden-mob">&nbsp;</span>
                                <span className="permission-btn">
                                    <span className="permission-ttl">Show my friend tap</span>
                                    <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                        <div className="handle"></div>
                                    </button>
                                </span>
                            </div>
                            <div className="profile-user-details mb-2">
                                <span className="theme-txt-color edit-title hidden-mob">&nbsp;</span>
                                <span className="permission-btn">
                                    <span className="permission-ttl">Show gift receive tap</span>
                                    <button type="button" className="btn btn-xs btn-toggle on-off-toggle black-btn active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                        <div className="handle"></div>
                                    </button>
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                    <a className="btn sm-btn theme-bg mob-radius-btn z-disable" href="#save" title="Save & Apply">Save & Apply</a>
                    <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" href="#apply" title="Apply">Apply</a>
                    <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" href="#cancel" title="Cancel">Cancel</a>
                </div>
            </div>
        )
    }
}
