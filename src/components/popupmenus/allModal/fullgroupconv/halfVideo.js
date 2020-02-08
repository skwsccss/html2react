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
                                <a href="#href" className="mobile-resize-icon" data-toggle="tooltip" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                            <div className="actions">
                                <a className="icon-change" href="#href" data-toggle="tooltip" title="Video">
                                    <img src="/css/dist/theme01/images/lg-video.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/css/dist/theme01/images/video-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a className="icon-change" href="#href" data-toggle="tooltip" title="Video">
                                    <img src="/css/dist/theme01/images/lg-voice.png" className="img-fluid enable-icon" alt="no" />
                                    <img src="/css/dist/theme01/images/sound-off.png" className="img-fluid disable-icon" alt="no" />
                                </a>
                                <a href="#href" data-toggle="tooltip" title="Gift"><img src="/css/dist/theme01/images/lg-gift.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" data-toggle="tooltip" title="User"><img src="/css/dist/theme01/images/lg-user.png" className="img-fluid" alt="no" /></a>
                            </div>
                            <div className="resize-actions">
                                <a href="#href" className="hidden-mob" data-toggle="tooltip" title="Zoom-In"><img src="/css/dist/theme01/images/plus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" data-toggle="tooltip" title="Zoom-Iut"><img src="/css/dist/theme01/images/minus-icon.png" className="img-fluid" alt="no" /></a>
                                <a href="#href" className="hidden-mob" data-toggle="tooltip" title="Full-Screen"><img src="/css/dist/theme01/images/full-screen-icon.png" className="img-fluid" alt="no" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
