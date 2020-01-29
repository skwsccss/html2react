import React, { Component } from 'react'
import MobVideoContainer from './mobVideoContainer'
import PositionRelative from './posRelative'

export default class GroupConvBody extends Component {
    render() {
        return (
            <div className="modal-body" id="groupconversation-area">
                <MobVideoContainer />
                <PositionRelative />
            </div>
        )
    }
}
