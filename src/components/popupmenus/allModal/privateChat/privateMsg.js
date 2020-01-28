import React, { Component } from 'react'
import PrivateMsgList from './privatemsgList'
import PrivateFooter from './privateFooter'

export default class PrivateMsg extends Component {
    render() {
        return (
            <div className="private-msg-block">
                <PrivateMsgList />
                <PrivateFooter />
            </div>
        )
    }
}
