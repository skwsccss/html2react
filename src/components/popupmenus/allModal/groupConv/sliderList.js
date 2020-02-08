import React, { Component } from 'react'

export default class OwlSliderList extends Component {
    render() {
        return (
            <div className="item">
                <div className="video-model">
                    <div className="friend-name">Hi</div>
                    <div className="windows-actions">
                        <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize"  data-toggle="tooltip" title="Maximize">
                            <span aria-hidden="true"><img src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" alt="no" /></span>
                        </button>
                        <button type="button" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                            <span aria-hidden="true">X</span>
                        </button>
                    </div>
                    <div className="m-text-center full-screen">
                        <div className="video-box full-screen">
                            <img src="/css/dist/theme01/images/video-bg.png" className="img-fluid" alt="no" />
                            <div className="video-username desk-hidden mob-display">
                                Kanyo cube
                                                </div>
                            <div className="resize-actions slider-resize">
                                <a href="#full-groupconversation-popup" className="mobile-resize-icon z-disable full-groupconversation-popup"  data-toggle="tooltip" title="Full-screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid z-disable" alt="no" /></a>
                            </div>
                            <div className="actions two-row-action options-for-web">
                                <div className="video-options01">
                                    <span href="#href" className="sm-video-btn">
                                        <span className="voice-option mic-action"  data-toggle="tooltip" title="Mic">
                                            <img src="/css/dist/theme01/images/lg-mic-icon.png" className="img-fluid lock-mic" alt="no" />
                                            <img src="/css/dist/theme01/images/lg-mic-on.png" className="img-fluid unlock-mic wid-16" alt="no" />
                                        </span>
                                        <span className="voice-lock lock-action"  data-toggle="tooltip" title="Lock">
                                            <img src="/css/dist/theme01/images/lg-lock-icon.png" className="img-fluid lock-mic" alt="no" />
                                            <img src="/css/dist/theme01/images/lg-unlock.png" className="img-fluid unlock-mic" alt="no" />
                                        </span>
                                    </span>
                                </div>
                                <div className="video-options">
                                    <a className="icon-change" href="#href"  data-toggle="tooltip" title="Video">
                                        <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                        <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                                    </a>
                                    <a className="icon-change" href="#href"  data-toggle="tooltip" title="Video">
                                        <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                        <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                                    </a>
                                </div>
                            </div>
                            <div className="actions options-for-mob">
                                <a className="icon-change" href="#href"  data-toggle="tooltip" title="Video">
                                    <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a className="icon-change" href="#href"  data-toggle="tooltip" title="Video">
                                    <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a href="#href"  data-toggle="tooltip" title="Gift"><img src="/css/dist/theme01/images/lg-gift.png" className="img-fluid" alt="no" /></a>
                                <a href="#href"  data-toggle="tooltip" title="User"><img src="/css/dist/theme01/images/lg-user.png" className="img-fluid" alt="no" /></a>
                            </div>
                            <div className="resize-actions">
                                <a href="#href" className="hidden-mob"  data-toggle="tooltip" title="Zoom-In"><img src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob"  data-toggle="tooltip" title="Zoom-Out"><img src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob"  data-toggle="tooltip" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                        </div>
                    </div>
                    <div className="network-signal">
                        <a href="#network"  data-toggle="tooltip" title="Network" className="hidden-mob"><img src="/css/dist/theme01/images/network-icon.png" className="img-fluid" alt="no" /></a>
                    </div>
                </div>
            </div>
        )
    }
}
