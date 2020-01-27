import React, { Component } from 'react'
import Emojis from './emojis'

export default class MsgTool extends Component {
    render() {
        return (
            <div className="footer-top ">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto ">
                        <Emojis />
                        <a href="#1" title="Photo"><i className="sprite photo-ico"></i></a>
                        <a href="#1" title="Text-Editor"><i className="sprite texteditor-ico"></i></a>
                        <a href="#1" title="Attachment"><i className="sprite attachment-ico"></i></a>
                        <a href="#1" title="Voice"><i className="sprite voice-ico"></i></a>
                    </div>
                    <div className="col-auto float-right">
                        <button className="openbtn" title="Slidetoggle Button"><i className="sprite right-ico"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}
