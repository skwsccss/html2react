import React, { Component } from 'react'

export default class MyProfile extends Component {
    render() {
        return (
            <div className="tab-pane show active" id="my-profile" role="tabpanel" aria-labelledby="general-tab">
                <div className="border-box lg-space">
                    <div className="row no-gutters align-items-start m-tb-15">
                        <div className="col-12 col-md-2 text-right chg-account-avatar">
                            <div className="photo-frame d-flex">
                                <img src="/css/dist/theme01/images/chat-photo.jpg" className="img-fluid" alt="noimg" />
                                <span className="status-signal">&nbsp;</span>
                            </div>
                        </div>
                        <div className="col-12 col-md-10 pl-3 m-pl-0">
                            <div className="profile-user-name">
                                <span className="mr-1 hidden-mob"><img src="/css/dist/theme01/images/xlg-taj.png" alt="noimg" /></span>
                                <span className="mr-1 desk-hidden mob-display"><img src="/css/dist/theme01/images/crown.png" title="User-Level1" alt="noimg" /></span>
                                <span className="xlg-txt theme-txt-color">Username</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Age:</span>
                                <span className="xlg-txt">24</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Gender:</span>
                                <span className="xlg-txt">Male</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Location:</span>
                                <span className="xlg-txt">United kingdom</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Last seen:</span>
                                <span className="xlg-txt">24/12 17:56</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Member since:</span>
                                <span className="xlg-txt">2018 - 11 - 12</span>
                            </div>
                            <div className="profile-user-details">
                                <span className="theme-txt-color">Email:</span>
                                <span className="xlg-txt">info@name.com</span>
                            </div>
                            <div className="profile-user-details last-detail">
                                <span className="last-record">
                                    <span className="theme-txt-color">Credits:</span>
                                    <span className="xlg-txt">50,254,55</span>
                                </span>
                                <button type="submit" title="Buy-Credits" className="btn sm-btn center-btn theme-bg mob-radius-btn float-right z-disable virtual-currency-popup" style={{fontSize: "small"}} href="#virtual-currency-popup"><i className="sprite white-cart-ico"></i>Buy Credits</button>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                    <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-3" href="#save" title="Save & Apply">Save & Apply</a>
                    <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-2" href="#apply" title="Apply">Apply</a>
                    <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1"  href="#cancel"title="Cancel">Cancel</a>
                </div>
            </div>
        )
    }
}
