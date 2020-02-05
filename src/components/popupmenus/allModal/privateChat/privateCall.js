import React, { Component } from 'react'

export default class PrivateCall extends Component {
    render() {
        return (
            <div className="private-call-block">
                <div className="d-flex align-items-center justify-content-end mb-3">
                    <a href="#create-group-popup" className="icons-rounded z- create-group-popup" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                    <a href="#camera-request-popup" className="theme-bg icons-rounded private-video-call" title="Video Call"><i className="sprite video-ico z-disable"></i></a>
                    <a href="#h" className="icons-rounded private-voice-call" title="Voice Call"><i className="sprite call-ico z-disable"></i></a>
                </div>
                <div className="private-audio-call">
                    <div className="d-flex white-box mb-3">
                        <div className="friend-name">Hi</div>
                        <div className="avtar-friend">
                            <img src="/css/dist/theme01/images/dc.png" className="img-fluid" alt="no img" />
                        </div>
                        <div className="call-option">
                            <a href="#h" className="round-border " title="Video"><img src="/css/dist/theme01/images/blue-camera.png" className="img-fluid call-icon" alt="mo" /></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite gift-box01-ico"></i></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite ignore-ico"></i></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite profile-ico"></i></a>
                        </div>
                    </div>
                    <div className="d-flex white-box mb-3">
                        <div className="friend-name">Hi</div>
                        <div className="avtar-friend">
                            <img src="/css/dist/theme01/images/dc.png" className="img-fluid" alt="no img" />
                        </div>
                        <div className="call-option">
                            <a href="#h" className="round-border " title="Video"><img src="/css/dist/theme01/images/blue-camera.png" className="img-fluid call-icon" alt="no" /></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite gift-box01-ico"></i></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite ignore-ico"></i></a>
                            <a href="#h" className="round-border" title="Video"><i className="sprite profile-ico"></i></a>
                        </div>
                    </div>
                </div>
                <div className="private-video hide video-model">
                    <div className="video-box">
                        <div className="friend-name">Hi</div>
                        <div className="windows-actions">
                            <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                <span aria-hidden="true"><img src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" alt="no" /></span>
                            </button>
                            <button type="button" data-dismiss="modal" aria-label="Close" title="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <img src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" alt="no" />
                        <div className="actions">
                            <a className="icon-change" href="#h" title="Video">
                                <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                            </a>
                            <a className="icon-change" href="#h" title="Video">
                                <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                            </a>
                            <a href="#h" title="Gift"><img src="/css/dist/theme01/images/lg-gift.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" title="User"><img src="/css/dist/theme01/images/lg-user.png" className="img-fluid" alt="no" /></a>
                        </div>
                        <div className="resize-actions">
                            <a href="#h" className="hidden-mob" title="Zoom-In"><img src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" className="hidden-mob" title="Zoom-Out"><img src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" className="hidden-mob" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                        </div>
                        <div className="network-signal">
                            <a href="#h" title="Network" className="hidden-mob"><img src="/css/dist/theme01/images/network-icon.png" className="img-fluid" alt="no" /></a>
                        </div>
                    </div>
                    <div className="video-box">
                        <div className="friend-name">Hi</div>
                        <div className="windows-actions">
                            <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                <span aria-hidden="true"><img src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" alt="no" /></span>
                            </button>
                            <button type="button" data-dismiss="modal" aria-label="Close" title="Close">
                                <span aria-hidden="true">X</span>
                            </button>
                        </div>
                        <img src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" alt="no" />
                        <div className="actions">
                            <a className="icon-change" href="#h" title="Video">
                                <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                            </a>
                            <a className="icon-change" href="#h" title="Video">
                                <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                            </a>
                            <a href="#h" title="Gift"><img src="/css/dist/theme01/images/lg-gift.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" title="User"><img src="/css/dist/theme01/images/lg-user.png" className="img-fluid" alt="no" /></a>
                        </div>
                        <div className="resize-actions">
                            <a href="#h" className="hidden-mob" title="Zoom-In"><img src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" className="hidden-mob" title="Zoom-Out"><img src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                            <a href="#h" className="hidden-mob" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                        </div>
                        <div className="network-signal">
                            <a href="#h" title="Network" className="hidden-mob"><img src="/css/dist/theme01/images/network-icon.png" className="img-fluid" alt="no" /></a>
                        </div>
                    </div>
                </div>

            </div>
        )
    }
}
