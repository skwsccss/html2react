import React, { Component } from 'react'

export default class ReportedAction extends Component {
    render() {
        const { username, reason, } = this.props;
        return (
            <tr>
                <td className="ban-user"><span className="user-reported-pics"><img src="/css/dist/theme01/images/ban-profile-pic.png" className="mr-1" alt="no img" /><span className="status-signal">&nbsp;</span></span>{username}</td>
                <td>{reason}</td>
                <td className="action-center">
                    <div>
                        <a className="action-btn background-process-hide z-disable mute-window-popup" href="#mute-window-popup" title="Mute"><i className="sprite mute-ico"></i>Mute</a>
                        <a className="action-btn z-disable kick-window-popup" href="#kick-window-popup" title="Kick"><i className="sprite kick-ico"></i>Kick</a>
                        <a className="action-btn z-disable ban-popup" href="#ban-popup" title="ban"><i className="sprite ban-ico"></i>Ban</a>
                        <a href="#viewprofile" className="action-btn popup mob-profile-window z-disable" title="View Profile"><i className="sprite profile-ico"></i>View Profile<span className="arrow-right-caret"></span></a>
                    </div>
                </td>
            </tr>
        )
    }
}
