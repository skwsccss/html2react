import React, { Component } from 'react'

export default class PressTalk extends Component {
    render() {
        return (
            <div className="press-to-talk">
                <div className="text-center mr-2">
                    <span className="btn-title">Press to talk</span>
                    <span className="sm-video-btn lock-btn">
                        <span className="voice-option mic-action" data-toggle="tooltip" title="Mic">
                            <img alt="press" src={"/css/dist/theme01/images/lg-mic-icon.png"} className="img-fluid lock-mic" />
                            <img alt="press" src={"/css/dist/theme01/images/lg-mic-on.png"} className="img-fluid unlock-mic" />
                        </span>
                        <span className="voice-lock lock-action" data-toggle="tooltip" title="Lock">
                            <img alt="press" src={"/css/dist/theme01/images/lg-lock-icon.png"} className="img-fluid lock-mic" />
                            <img alt="press" src={"/css/dist/theme01/images/lg-unlock.png"} className="img-fluid unlock-mic" />
                        </span>
                    </span>
                </div>
                <div className="text-center">
                    <span className="btn-title">Rais Hand</span>
                    <span className="sm-video-btn hand">
                        <span className="voice-option" data-toggle="tooltip" title="Mic"><img alt="press" src={"/hand.png"} className="img-fluid" /></span>
                    </span>
                </div>
            </div>
        )
    }
}
