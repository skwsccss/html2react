import React, { Component } from 'react'

export default class VideoCall extends Component {
    render() {
        return (
            <div className="video-calling hide">
                <div className="resize-actions slider-resize">
                    <a className="mobile-resize-icon calling-full-screen" title="Full-Screen" href="#d"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid z-disable" alt="no" /></a>
                    <div className="back-btn calling-back hide-back-btn">
                        <span><img src="/css/dist/theme01/images/white-back-arrow.png" className="img-fluid back-arrow" alt="no" /></span>
                        <span className="name">Lin Zhengh</span>
                    </div>
                </div>
                <div className="voice-pics video-bg">
                </div>
                <div className="own-video own-video-screen">
                    <div className="video-box">
                        <img src="/css/dist/theme01/images/video-bg.png" className="img-fluid hidden-mob" alt="no" />
                        <img src="/css/dist/theme01/images/live-video.png" className="img-fluid desk-hidden mob-display" alt="no img" />
                        <div className="actions two-row-action">
                            <div className="video-options">
                                <a className="icon-change" href="#h" title="Camera">
                                    <img src="/css/dist/theme01/images/mic-off.png" className="w-18 img-fluid enable-icon" alt="no img" />
                                    <img src="/css/dist/theme01/images/mic-on.png" className="w-18 img-fluid disable-icon" alt="no img" />
                                </a>
                                <a className="icon-change" href="#h" title="Video">
                                    <img src="/css/dist/theme01/images/black-video.png" className="img-fluid enable-icon" alt="no img" />
                                    <img src="/css/dist/theme01/images/black-video-off.png" className="img-fluid disable-icon" alt="no img" />
                                </a>
                                <a className="icon-change" href="#h" title="Camera">
                                    <img src="/css/dist/theme01/images/rotate.png" className="w-18 img-fluid enable-icon" alt="no img" />
                                    <img src="/css/dist/theme01/images/rotate-off.png" className="w-18 img-fluid disable-icon" alt="no img" />
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="calling-action">
                    <span className="full-box-option hide">
                        <a className="icon-change" href="#h" title="Mic">
                            <img src="/css/dist/theme01/images/mic-off.png" className="w-18 img-fluid enable-icon" alt="no img" />
                            <img src="/css/dist/theme01/images/mic-on.png" className="w-18 img-fluid disable-icon" alt="no img" />
                        </a>
                        <a className="icon-change" href="#h" title="Video">
                            <img src="/css/dist/theme01/images/black-video.png" className="img-fluid enable-icon" alt="no img" />
                            <img src="/css/dist/theme01/images/black-video-off.png" className="img-fluid disable-icon" alt="no img" />
                        </a>
                        <a className="icon-change" href="#h" title="Camera">
                            <img src="/css/dist/theme01/images/rotate.png" className="w-18 img-fluid enable-icon" alt="no img" />
                            <img src="/css/dist/theme01/images/rotate-off.png" className="w-18 img-fluid disable-icon" alt="no img" />
                        </a>
                    </span>
                    <a href="#h" className="endcall-btn" title="End Call">
                        <img src="/css/dist/theme01/images/end-call.png" className="img-fluid" alt="h" /> END<span className="time">04:21</span>
                    </a>
                </div>
            </div>
        )
    }
}
