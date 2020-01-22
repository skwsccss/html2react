import React, { Component } from 'react'

class RadioShow extends Component {
    render() {
        return (
            <div className="radio-show float-left">
                <div className="float-left">
                    <span href="" className="mob-header-btn gray-bg left-first-btn">
                        <i className="sprite radio-ico"></i>
                    </span>
                </div>
                <div className="radio-box">
                    <div className="d-flex align-items-center justify-content-between">
                        <div className="d-flex align-items-center">
                            <div id="radio_player" className="jp-jplayer"></div>
                            <div id="jp_container_2" className="jp-audio" role="application" aria-label="media player">
                                <div className="jp-type-single">
                                    <div className="jp-gui jp-interface d-flex align-items-center">
                                        <div className="jp-controls">
                                            <button className="jp-play" tabIndex="0">play</button>
                                        </div>

                                        <div className="radio-control">
                                            <div className="d-flex radio-txt">Radio Player</div>
                                            <div className="d-flex align-items-center">
                                                <div className="jp-volume-controls">
                                                    <button className="jp-mute" tabIndex="0">mute</button>
                                                    <div className="jp-volume-bar">
                                                        <div className="jp-volume-bar-value"></div>
                                                    </div>
                                                </div>
                                                <div className="jp-time-holder">
                                                    <div className="jp-current-time" role="timer" aria-label="time">&nbsp;</div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <span>
                            <span className="close-info"> X</span>
                        </span>
                    </div>
                </div>
            </div>
        )
    }
}
export default RadioShow;