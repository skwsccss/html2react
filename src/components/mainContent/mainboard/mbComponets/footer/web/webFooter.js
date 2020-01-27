import React, { Component } from 'react'
import MsgTool from './msgTool'
import MsgInput from './MsgInput'

export default class WebFooter extends Component {
    render() {
        return (
            <div className="open web-footer">
                <MsgTool />
                <MsgInput />
            </div>
        )
    }
}
