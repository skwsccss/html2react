import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class VideoBox1 extends Component {
    render() {
        return (
            <div className="modal01 fadeIn full-screen-call footer-links center-msg-box video-area-box show transform" id="video-popup" tabIndex="-1" role="dialog" aria-labelledby="video-popup" aria-hidden="true">
                <div className="modal-dialog video-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Kanyo cube</strong><span className="mark-read-btn">
                                <span className="d-flex">
                                    <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" data-toggle="tooltip" title="Maximize">
                                        <span aria-hidden="true"><img src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="minimize video-broadcast" data-dismiss="modal" aria-label="minimize" data-toggle="tooltip" title="Minimize">
                                        <span aria-hidden="true"><img src="/css/dist/theme01/images/minimize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </span>
                            </span>
                        </span>
                        <MobTopHeader data-toggle="tooltip" title="Start your broadcast" />
                        <div className="modal-body video-bg" id="video-broadcast">
                            <div className="m-text-center full-screen">
                                <div className="video-box full-screen">
                                    <div className="live-status-txt"><span>LIVE</span>Online</div>
                                    <img src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" alt="noimg" />
                                    <div className="actions two-row-action">
                                        <div className="video-options01">
                                            <span className="sm-video-btn">
                                                <span className="voice-option mic-action" data-toggle="tooltip" title="Mic">
                                                    <img src="/css/dist/theme01/images/lg-mic-icon.png" className="img-fluid lock-mic" alt="noimg" />
                                                    <img src="/css/dist/theme01/images/lg-mic-on.png" className="img-fluid unlock-mic" alt="noimg" />
                                                </span>
                                                <span className="voice-lock lock-action" data-toggle="tooltip" title="Lock">
                                                    <img src="/css/dist/theme01/images/lg-lock-icon.png" className="img-fluid lock-mic" alt="noimg" />
                                                    <img src="/css/dist/theme01/images/lg-unlock.png" className="img-fluid unlock-mic" alt="noimg" />
                                                </span>
                                            </span>
                                            <span data-toggle="tooltip" title="Viewers" className="sm-video-btn">
                                                <span className="btn-group dropup">
                                                    <button type="button" className="btn btn-default">Viewers</button>
                                                    <button type="button" className="btn btn-default dropdown-toggle dropdown-toggle-split" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                                    <span className="dropdown-menu dropdown-menu-right">
                                                        <span className="box-title theme-bg justify-content-between mob-display">
                                                            <strong>Kanyo cube</strong>
                                                            <span className="mark-read-btn">
                                                                <button type="button" className="drop-close-btn" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                                                    <span aria-hidden="true">X</span>
                                                                </button>
                                                            </span>
                                                        </span>
                                                        <a className="dropdown-item" href="#viewer">Viewers</a>
                                                    </span>
                                                </span>
                                            </span>
                                        </div>
                                        <div className="video-options">
                                            <a href="#rotate" className="for-mobile" data-toggle="tooltip" title="Camera"><img src="/css/dist/theme01/images/camera-rotate.png" className="img-fluid" alt="no img" /></a>
                                            <a className="icon-change" href="#video" data-toggle="tooltip" title="Video">
                                                <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="noimg" />
                                                <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="noimg" />
                                            </a>
                                            <a className="icon-change" href="#video" data-toggle="tooltip" title="Video">
                                                <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="noimg" />
                                                <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="noimg" />
                                            </a>
                                        </div>
                                    </div>
                                    <div className="resize-actions">
                                        <a href="#plus" className="hidden-mob" data-toggle="tooltip" title="Zoom-In"><img src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" alt="no img" /></a>
                                        <a href="#minus" className="hidden-mob" data-toggle="tooltip" title="Zoom-Out"><img src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" alt="no img" /></a>
                                        <a href="#full" className="hidden-mob" data-toggle="tooltip" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no img" /></a>
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
