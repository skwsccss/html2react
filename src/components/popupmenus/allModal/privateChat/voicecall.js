import React, { Component } from 'react'

export default class VoiceCall extends Component {
    render() {
        return (
            <div className="voice-calling hide">
                <div className="resize-actions slider-resize">
                    <a href="#full-screen" className="mobile-resize-icon calling-full-screen" title="Full-Screen"><img src="/images/full-screen-icon.png" className="img-fluid z-disable" alt="no img"  /></a>
                    <div className="back-btn calling-back hide-back-btn">
                        <span><img src="/images/white-back-arrow.png" className="img-fluid back-arrow"  alt="no img" /></span>
                    </div>
                </div>
                <div className="voice-pics">
                    <div><img src="/images/voice-pics.jpg" alt="no img"  /></div>
                    <div className="calling-detail"><div>Lin Zhengh</div><div className="time">4:21</div></div>
                </div>
                <div className="calling-action">
                    <a className="icon-change" href="#volume" title="Volume">
                        <img src="/images/volume.png" className="img-fluid enable-icon" alt="no img" />
                        <img src="/images/volume-off.png" className="img-fluid disable-icon"  alt="no img" />
                    </a>
                    <a href="#endcall" className="endcall-btn" title="End Call"><img src="/images/end-call.png" className="img-fluid" alt="no img"  /> END CALL</a>
                    <a className="icon-change" href="#mutemic" title="Mutemic">
                        <img src="/images/mic-off.png" className="img-fluid enable-icon" alt="no img"  />
                        <img src="/images/mic-on.png" className="img-fluid disable-icon"  alt="no img" />
                    </a>
                </div>
            </div>
        )
    }
}
