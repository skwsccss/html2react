import React, { Component } from 'react'

export default class OwnVideo extends Component {
    render() {
        return (
            <div className="own-video desk-hidden mob-display">
                <div className="video-model">
                    <div className="m-text-center full-screen">
                        <div className="video-box full-screen">
                            <img src="/images/video-bg.png" className="img-fluid mob-full" alt="no" />
                            <div className="actions two-row-action">
                                <div className="video-options01">
                                    <span href="#href" className="sm-video-btn">
                                        <span className="voice-option mic-action" title="Mic">
                                            <img src="/images/lg-mic-icon.png" className="img-fluid lock-mic" alt="no" />
                                            <img src="/images/lg-mic-on.png" className="img-fluid unlock-mic" alt="no" />
                                        </span>
                                        <span className="voice-lock lock-action" title="Lock">
                                            <img src="/images/lg-lock-icon.png" className="img-fluid lock-mic" alt="no" />
                                            <img src="/images/lg-unlock.png" className="img-fluid unlock-mic" alt="no" />
                                        </span>
                                    </span>
                                </div>
                                <div className="video-options">
                                    <a href="#href" title="Video">
                                        <img src="/images/camera-rotate.png" className="img-fluid" alt="no img" />
                                    </a>
                                    <a className="icon-change" href="#href" title="Video">
                                        <img src="/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                        <img src="/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                                    </a>
                                    <a className="icon-change" href="#href" title="Video">
                                        <img src="/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                        <img src="/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                                    </a>
                                </div>
                            </div>
                            <div className="resize-actions">
                                <a href="#href" className="hidden-mob" title="Zoom-In"><img src="/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" title="Zoom-Out"><img src="/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" title="Full-Screen"><img src="/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
