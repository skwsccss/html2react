import React, { Component } from 'react'
import Emojis from '../../../mainContent/mainboard/mbComponets/footer/emojis'

export default class PrivateFooter extends Component {
    render() {
        return (
            <div className="modal-footer hidden-mob">
                <div className="fixed-footer">
                    <div className="row no-gutters mb-01 align-items-center justify-content-between white-bg">
                        <div className="col-auto ">
                            <Emojis index='01' />
                            <a href="/"  data-toggle="tooltip" title="Photo"><i className="sprite photo-ico"></i></a>
                            <a href="/"  data-toggle="tooltip" title="Text-Editor"><i className="sprite texteditor-ico"></i></a>
                            <a href="/"  data-toggle="tooltip" title="Attachment"><i className="sprite attachment-ico"></i></a>
                            <a href="/"  data-toggle="tooltip" title="Voice"><i className="sprite voice-ico"></i></a>
                        </div>
                        <div className="col-auto float-right d-flex">
                            <a href="#create-group-popup" className="ficons-rounded create-group-popup"  data-toggle="tooltip" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                            <a href="#camera-request-popup" className="theme-bg ficons-rounded camera-request-popup"  data-toggle="tooltip" title="Video Call"><i className="sprite video-ico z-disable"></i></a>
                            <a href="#voice-call" className="ficons-rounded"  data-toggle="tooltip" title="Voice Call"><i className="sprite call-ico z-disable"></i></a>
                            <button className="videocall-window"  data-toggle="tooltip" title="Show Video"><i className="sprite right-ico"></i></button>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center justify-content-between white-bg input-area">
                        <div className="col-12">
                            <span className="photo-frame">
                                <a href="#change-avtar-popup" className="z-disable change-avtar-popup">
                                    <img src="/css/dist/theme01/images/chat-photo.jpg" className="img-fluid z-disable" alt="nom" />
                                    <span className="status-signal">&nbsp;</span>
                                </a>
                            </span>
                            <textarea className="chat-input" typeof="text"></textarea>
                            {/* <!--<input className="chat-input" />--> */}
                            <button className="sendbtn theme-bg">
                                <span>SEND<img src="/css/dist/theme01/images/send-arrow.png" className="img-fluid ml-2" alt="noimg" /></span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
