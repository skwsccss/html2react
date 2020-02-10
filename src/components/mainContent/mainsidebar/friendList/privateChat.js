import React, { Component } from 'react'

export default class PrivateChat extends Component {
    render() {
        return (
            <div className="max-callOption privatechat-model">
                <div className="modal-body">
                    <div className="private-call-block show">
                        <div className="d-flex align-items-center justify-content-end mb-3">
                            <a href="#create-group-popup" className="icons-rounded z- create-group-popup" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                            <a href="#camera-request-popup" className="theme-bg icons-rounded private-video-call" title="Video Call"><i className="sprite video-ico z-disable"></i></a>
                            <a href="#i" className="icons-rounded private-voice-call" title="Voice Call"><i className="sprite call-ico z-disable"></i></a>
                        </div>
                        <div className="private-audio-call">
                            <div className="d-flex white-box mb-3">
                                <div className="friend-name">Hi</div>
                                <div className="avtar-friend">
                                    <img alt="ico" src="/css/dist/theme01/images/dc.png" className="img-fluid" />
                                </div>
                                <div className="call-option">
                                    <a href="#1" className="round-border " title="Video"><img alt="ico" src="/css/dist/theme01/images/blue-camera.png" className="img-fluid call-icon" /></a>
                                    <a href="#1" className="round-border" title="Video"><i className="sprite gift-box01-ico"></i></a>
                                    <a href="#1" className="round-border" title="Video"><i className="sprite ignore-ico"></i></a>
                                    <a href="#1" className="round-border" title="Video"><i className="sprite profile-ico"></i></a>
                                </div>
                            </div>
                            <div className="d-flex white-box mb-3">
                                <div className="friend-name">Hi</div>
                                <div className="avtar-friend">
                                    <img alt="ico" src="/css/dist/theme01/images/dc.png" className="img-fluid" />
                                </div>
                                <div className="call-option">
                                    <a href="#2" className="round-border " title="Video"><img alt="ico" src="/css/dist/theme01/images/blue-camera.png" className="img-fluid call-icon" /></a>
                                    <a href="#2" className="round-border" title="Video"><i className="sprite gift-box01-ico"></i></a>
                                    <a href="#2" className="round-border" title="Video"><i className="sprite ignore-ico"></i></a>
                                    <a href="#2" className="round-border" title="Video"><i className="sprite profile-ico"></i></a>
                                </div>
                            </div>
                        </div>
                        <div className="private-video hide video-model">
                            <div className="video-box">
                                <div className="friend-name">Hi</div>
                                <div className="windows-actions">
                                    <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                        <span aria-hidden="true"><img alt="ico" src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" /></span>
                                    </button>
                                    <button type="button" data-dismiss="modal" aria-label="Close" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </div>
                                <img alt="ico" src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" />
                                <div className="actions">
                                    <a className="icon-change" href="#i" title="Video">
                                        <img alt="ico" src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" />
                                        <img alt="ico" src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" />
                                    </a>
                                    <a className="icon-change" href="#i" title="Video">
                                        <img alt="ico" src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" />
                                        <img alt="ico" src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" />
                                    </a>
                                    <a href="#i" className="p-0" title="Gift"><img alt="ico" src="/css/dist/theme01/images/lg-gift.png" className="img-fluid" /></a>
                                    <a href="#i" className="p-0" title="User"><img alt="ico" src="/css/dist/theme01/images/lg-user.png" className="img-fluid" /></a>
                                </div>
                                <div className="resize-actions">
                                    <a href="#i" className="hidden-mob p-0" title="Zoom-In"><img alt="ico" src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" /></a>
                                    <a href="#i" className="hidden-mob p-0" title="Zoom-Out"><img alt="ico" src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" /></a>
                                    <a href="#i" className="hidden-mob p-0" title="Full-Screen"><img alt="ico" src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" /></a>
                                </div>
                                <div className="network-signal ">
                                    <a href="#i" title="Network" className="hidden-mob p-0"><img alt="ico" src="/css/dist/theme01/images/network-icon.png" className="img-fluid" /></a>
                                </div>
                            </div>
                            <div className="video-box">
                                <div className="friend-name">Hi</div>
                                <div className="windows-actions">
                                    <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                        <span aria-hidden="true"><img alt="ico" src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" /></span>
                                    </button>
                                    <button type="button" data-dismiss="modal" aria-label="Close" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </div>
                                <img alt="ico" src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" />
                                <div className="video-username desk-hidden mob-display">
                                    Kanyo cube
                                            </div>
                                <div className="video-close desk-hidden mob-display">
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </div>

                                <div className="actions two-row-action">
                                    <div className="video-options01">
                                        <span href="#i" className="sm-video-btn">
                                            <span className="voice-option mic-action p-0" title="Mic">
                                                <img alt="ico" src="/css/dist/theme01/images/lg-mic-icon.png" className="img-fluid lock-mic" />
                                                <img alt="ico" src="/css/dist/theme01/images/lg-mic-on.png" className="img-fluid unlock-mic" />
                                            </span>
                                            <span className="voice-lock lock-action p-0" title="Lock">
                                                <img alt="ico" src="/css/dist/theme01/images/lg-lock-icon.png" className="img-fluid lock-mic" />
                                                <img alt="ico" src="/css/dist/theme01/images/lg-unlock.png" className="img-fluid unlock-mic" />
                                            </span>
                                        </span>
                                    </div>
                                    <div className="video-options">
                                        <a className="icon-change p-0" href="#i" title="Video">
                                            <img alt="ico" src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" />
                                            <img alt="ico" src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" />
                                        </a>
                                        <a className="icon-change p-0" href="#i" title="Video">
                                            <img alt="ico" src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" />
                                            <img alt="ico" src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" />
                                        </a>
                                    </div>
                                </div>
                                <div className="resize-actions">
                                    <a href="#i" title="Zoom-In" className="hidden-mob p-0"><img alt="ico" src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" /></a>
                                    <a href="#i" title="Zoom-Out" className="hidden-mob p-0"><img alt="ico" src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" /></a>
                                    <a href="#i" className="mobile-resize-icon p-0" title="Full-Screen"><img alt="ico" src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" /></a>
                                </div>
                                <div className="network-signal ">
                                    <a href="#i" title="Network" className="hidden-mob p-0"><img alt="ico" src="/css/dist/theme01/images/network-icon.png" className="img-fluid" /></a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
