import React, { Component } from 'react'

export default class HalfVideo extends Component {
    render() {
        return (
            <div className="half-video">
                <div className="video-model">
                    <div className="m-text-center full-screen">
                        <div className="video-box full-screen">
                            <div className="video-bg"></div>
                            <div className="video-username desk-hidden mob-display">
                                Kanyo cube
                                        </div>
                            <div className="resize-actions slider-resize">
                                <a href="#href" className="mobile-resize-icon" title="Full-Screen"><img src="/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                            <div className="actions">
                                <a className="icon-change" href="#href" title="Video">
                                    <img src="/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a className="icon-change" href="#href" title="Video">
                                    <img src="/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a href="#href" title="Gift"><img src="/images/lg-gift.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" title="User"><img src="/images/lg-user.png" className="img-fluid" alt="no" /></a>
                            </div>
                            <div className="resize-actions">
                                <a href="#href" className="hidden-mob" title="Zoom-In"><img src="/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" title="Zoom-Iut"><img src="/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" title="Full-Screen"><img src="/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
