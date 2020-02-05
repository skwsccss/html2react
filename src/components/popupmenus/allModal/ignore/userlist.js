import React, { Component } from 'react'

export default class IgnoreUsers extends Component {
    render() {
        const { username, index } = this.props;
        return (
            <li className="pink-text">
                <div className="custom-control custom-checkbox">
                    <input type="checkbox" className="custom-control-input z-disable" id={`${username}${index}`} name={`${username}${index}`} />
                    <label className="custom-control-label" htmlFor={`${username}${index}`}>
                        <span className="profile-avtar">
                            <img src="/css/dist/theme01/images/chat-photo.jpg" className="img-fluid mCS_img_loaded" alt="no img" />
                            <span className="status-signal">&nbsp;</span>
                        </span>
                        <span className="xs-text">{username}</span>
                    </label>
                </div>
            </li>
        )
    }
}
