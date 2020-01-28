import React, { Component } from 'react'

export default class VideoBox extends Component {
    render() {
        return (
            <div className="modal02 fadeIn footer-links center-msg-box video-area-box" id="video01-popup" tabIndex="-1" role="dialog" aria-labelledby="video01-popup" aria-hidden="true">
                <div className="modal-dialog video01-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Kanyo cube</strong>
                            <span className="mark-read-btn">
                                <span className="d-flex">
                                    <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                        <span aria-hidden="true"><img src="/images/maximize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="minimize min-video-call" data-dismiss="modal" aria-label="minimize" title="Minimize">
                                        <span aria-hidden="true"><img src="/images/minimize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </span>
                            </span>
                        </span>
                        <div className="modal-body" id="video-call">
                            <div className="row">
                                <div className="col-12 m-text-center">
                                    <div className="video-box">
                                        <img src="/images/video-bg.png" className="img-fluid hidden-mob" alt="no img" />
                                        <img src="/images/live-video.png" className="img-fluid mobile-drag desk-hidden mob-display" alt="no img" />
                                        <div className="video-username desk-hidden mob-display">
                                            Kanyo cube
                                    </div>
                                        <div className="video-close desk-hidden mob-display">
                                            <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                                <span aria-hidden="true">X</span>
                                            </button>
                                        </div>
                                        <div className="actions">
                                            <a className="icon-change" href="#href" title="Video">
                                                <img src="/images/lg-video.png" className="img-fluid enable-icon" alt="no img" />
                                                <img src="/images/video-off.png" className="img-fluid disable-icon" alt="no img" />
                                            </a>
                                            <a className="icon-change" href="#href" title="Video">
                                                <img src="/images/lg-voice.png" className="img-fluid enable-icon" alt="no img" />
                                                <img src="/images/sound-off.png" className="img-fluid disable-icon" alt="no img" />
                                            </a>
                                            <a href="#href" title="Gift"><img src="/images/lg-gift.png" className="img-fluid" alt="no img" /></a>
                                            <a href="#href" title="User"><img src="/images/lg-user.png" className="img-fluid" alt="no img" /></a>
                                        </div>

                                        <div className="resize-actions">
                                            <a href="#href" title="Zoom-In" className="hidden-mob"><img src="/images/plus-icon.png" className="img-fluid" alt="no img" /></a>
                                            <a href="#href" title="Zoom-Out" className="hidden-mob"><img src="/images/minus-icon.png" className="img-fluid" alt="no img" /></a>
                                            <a href="#href" className="mobile-resize-icon" title="Full-Screen"><img src="/images/full-screen-icon.png" className="img-fluid" alt="no img" /></a>
                                        </div>
                                        <div className="network-signal">
                                            <a href="#href" title="Network" className="hidden-mob"><img src="/images/network-icon.png" className="img-fluid" alt="no img" /></a>
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
