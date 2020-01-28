import React, { Component } from 'react'
import PrivateMsg from './privateMsg'
import PrivateCall from './privateCall'

export default class BaseArea extends Component {
    render() {
        return (
            <div className="position-relative">
                <PrivateMsg />
                <PrivateCall />
            </div>
        )
    }
}
