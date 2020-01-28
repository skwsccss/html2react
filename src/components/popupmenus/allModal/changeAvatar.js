import React, { Component } from 'react'

export default class ChangeAvatar extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links " id="change-avtar-popup" tabIndex="-1" role="dialog" aria-labelledby="change-avtar-popup" aria-hidden="true">
                <div className="modal-dialog change-avtar-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Change Avatar</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="row  mob-top-header align-items-center header-shadow">
                            <div className="col-12 d-flex align-items-center mob-space-between">
                                <div className="profile-mob">
                                    <div className="float-left back-btn ">
                                        <span><i className="back-icon back-arrow"></i></span>
                                    </div>
                                    <div className="avtar-info">
                                        <div className="float-left profile-avtar">
                                            <img src="/images/chat-photo.jpg" className="img-fluid" alt="avatarinfo" />
                                            <span className="status-signal">&nbsp;</span>
                                        </div>
                                        <div className="status-dropdown">
                                            <ul>
                                                <li className="avtar-info-box">
                                                    <div className="d-flex align-items-center justify-content-between">
                                                        <span className="d-flex align-items-center">
                                                            <span className="user-detail">
                                                                <span className="d-flex align-items-center">
                                                                    <span>
                                                                        <img src="/images/crown.png" className="img-fluid m-r-sm m-w-14" title="User-Level1" alt="cartImg" />
                                                                    </span>
                                                                    <span>
                                                                        <span className="user-name-sm">Heng liang</span><br />
                                                                        <span>User Level </span>
                                                                    </span>
                                                                </span>
                                                            </span>
                                                            <span className="credit-txt">
                                                                <img src="/images/credit.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartImg" />1000<img src="/images/cart.png" className="img-fluid m-l-sm m-r-sm m-w-14" alt="cartimg" />
                                                            </span>
                                                        </span>
                                                        <span>
                                                            <span className="close-info" title="Close"> X</span>
                                                        </span>
                                                    </div>
                                                </li>
                                                <li className="seprator">
                                                    <a className="dropdown-item" href="#href"><span className="status-ico online"></span>Online</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico busy"></span>Busy</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico away"></span>Away</a>
                                                    <a className="dropdown-item" href="#href"><span className="status-ico in-visible"></span>Invisible</a>
                                                </li>
                                                <li className="seprator account-link">
                                                    <a className="dropdown-item z-disable myaccount-popup" href="#myaccount-popup" title="My Account"><img src="/images/right-icon.png" className="img-fluid" alt="account" />My Account</a>
                                                    <a className="dropdown-item z-disable change-avtar-popup" href="#change-avtar-popup" title="Change Avatar"><img src="/images/right-icon.png" className="img-fluid" alt="changeavatar" />Change Avatar</a>
                                                </li>
                                                <li><a className="dropdown-item logout z-disable logout-popup" href="#logout-popup" title="Logout"><img src="/images/logout.png" className="img-fluid" alt="logout" />Logout</a></li>
                                            </ul>
                                        </div>
                                    </div>
                                </div>
                                <div className="section-title theme-txt-color">
                                    Change Avatar
                                </div>
                                <div className="moremenu">
                                    <a href="#headermore">
                                        <i className="sprite header-more-ico"></i>
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="modal-body">
                            <div className="avatar-change-popup">
                                <div className="row">
                                    <div className="avatar-collections order-1">
                                        <nav className="mob-tabs">
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item theme-txt-color nav-link z-disable active" id="default-tab" data-toggle="tab" href="#default-avatar" role="tab" aria-controls="default" aria-selected="true">Default</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable" id="jewelry-tab" data-toggle="tab" href="#animal-avatar" role="tab" aria-controls="jewelry" aria-selected="false">Animal</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable" id="luxurious-tab" data-toggle="tab" href="#other-avatar" role="tab" aria-controls="luxurious" aria-selected="false">Other</a>
                                            </div>
                                        </nav>
                                        <div className="tab-content border-box" id="nav-tabContent">
                                            {/* <!--default Avatar--> */}
                                            <div className="tab-pane show active" id="default-avatar" role="tabpanel" aria-labelledby="default-avatar">
                                                <div className="pagination-container five-row">
                                                    <div className="row">
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/01.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/02.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/03.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/04.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/05.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--Animal Avatar--> */}
                                            <div className="tab-pane" id="animal-avatar" role="tabpanel" aria-labelledby="animal-avatar">
                                                <div className="pagination-container show five-row">
                                                    <div className="row">
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/01.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/02.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/03.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/04.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/05.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/06.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/01.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            {/* <!--Other Avatar--> */}
                                            <div className="tab-pane" id="other-avatar" role="tabpanel" aria-labelledby="other-avatar">
                                                <div className="pagination-container five-row">
                                                    <div className="row">
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/01.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/02.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/03.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                        <div className="avatar-images text-center m-b-xs">
                                                            <a href="#href" title="Avatar01"><img src="/images/avatar/04.jpg" className="img-fluid" alt="no-img" /></a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="custom-avatar custom-avatar-box">
                                            <div className="custom-avatar-txt">Custome Avatar</div>
                                            <div className="row custom-avatar-img">
                                                <div className="avatar-images text-center m-b-xs">
                                                    <a href="#href" title="Avatar01"><img src="/images/avatar/01.jpg" className="img-fluid" alt="noimg" /></a>
                                                </div>
                                                <div className="avatar-images text-center m-b-xs">
                                                    <a href="#href" title="Avatar01"><img src="/images/avatar/02.jpg" className="img-fluid" alt="noimg" /></a>
                                                </div>
                                                <div className="avatar-images text-center m-b-xs">
                                                    <a href="#href" title="Avatar01"><img src="/images/avatar/03.jpg" className="img-fluid" alt="noimg" /></a>
                                                </div>
                                                <div className="avatar-images text-center m-b-xs">
                                                    <a href="#href" title="Avatar01"><img src="/images/avatar/04.jpg" className="img-fluid" alt="noimg" /></a>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="modal-btn-group">
                                            <button type="button" className="btn sm-btn theme-bg mob-radius-btn" title="Submit">Submit</button>
                                            <button type="button" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" title="Cancel">Cancel</button>
                                        </div>
                                    </div>
                                    <div className="avatar-view-box order-2">
                                        <div className="avtar-change-view">
                                            <img src="/images/avtar-view.png" className="img-fluid" alt="noimg" />
                                        </div>
                                        <div className="modal-btn-links">
                                            <button type="button" title="Upload Avatar" className="btn sm-btn center-btn theme-bg mob-radius-btn float-right">Upload avatar</button>
                                            <button type="button" className="btn sm-btn dark-gray-bg mob-radius-btn" title="Webcam Avatar">Webcam avatar</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
