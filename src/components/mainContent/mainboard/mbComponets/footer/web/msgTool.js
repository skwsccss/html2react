import React, { Component } from 'react'
import Emojis from '../emojis'

export default class MsgTool extends Component {
    render() {
        return (
            <div className="footer-top ">
                <div className="row align-items-center justify-content-between">
                    <div className="col-auto ">
                        <Emojis index={''}/>
                        <a href="#1" data-toggle="tooltip" title="Photo"><i className="sprite photo-ico"></i></a>
                        <a href="#1" data-toggle="tooltip" title="Text-Editor"><i className="sprite texteditor-ico"></i></a>
                        <a href="#1" data-toggle="tooltip" title="Attachment"><i className="sprite attachment-ico"></i></a>
                        <a href="#1" data-toggle="tooltip" title="Voice"><i className="sprite voice-ico"></i></a>
                    </div>
                    <div className="col-auto float-right">
                        <button className="openbtn" data-toggle="tooltip" title="Slidetoggle Button"><i className="sprite right-ico"></i></button>
                    </div>
                </div>

            </div>
        )
    }
}
