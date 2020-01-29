import React, { Component } from 'react'

export default class GroupConvList extends Component {
    render() {
        const { name } = this.props;
        return (
            <li className="blue-text">
                <span className="arrow-right-caret"></span>
                <span>
                    <img src="/images/gold-taj.png" className="img-fluid imagePath" title="User-Level1" alt="no img" />
                </span>
                <span className="profile-avtar">
                    <img src="/images/chat-photo.jpg" className="img-fluid" alt="no img" />
                    <span className="away-signal">&nbsp;</span>
                </span>
                <span>{name}</span>
                <span className="float-right">
                    <a href="#video01-popup" className="calling-icon">
                        <img src="/images/video.png" title="Video-Call" className="img-fluid m-t-xs m-r-sm call-popup imagePath" alt="no img" />
                    </a>
                    <img src="/images/men.png" title="Men" className="img-fluid m-t-xs imagePath" alt="no img" />
                </span>
            </li>
        )
    }
}
