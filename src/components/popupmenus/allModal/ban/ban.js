import React, { Component } from 'react'

export default class Ban extends Component {
    render() {
        const { banIP, duration, reason, deviceBan, room, started, operator } = this.props;
        return (
            <tr>
                <td className="ban-user"><b className="tablesaw-cell-label">Ban User</b><span className="tablesaw-cell-content"><img src="/images/ban-profile-pic.png" className="mr-1" alt="no img" />kanyo cube</span></td>
                <td><b className="tablesaw-cell-label">Ban IP</b><span className="tablesaw-cell-content">{banIP}</span></td>
                <td><b className="tablesaw-cell-label">Duration</b><span className="tablesaw-cell-content">{duration}</span></td>
                <td><b className="tablesaw-cell-label">Reason</b><span className="tablesaw-cell-content">{reason}</span></td>
                <td><b className="tablesaw-cell-label">Device Ban</b><span className="tablesaw-cell-content">{deviceBan}</span></td>
                <td><b className="tablesaw-cell-label">Room</b><span className="tablesaw-cell-content">{room}</span></td>
                <td><b className="tablesaw-cell-label">Start Time</b><span className="tablesaw-cell-content">{started}</span></td>
                <td><b className="tablesaw-cell-label">Operator</b><span className="tablesaw-cell-content">{operator}</span></td>
            </tr>
        )
    }
}
