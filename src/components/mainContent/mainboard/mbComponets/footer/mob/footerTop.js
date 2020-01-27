import React, { Component } from 'react'

export default class FooterTop extends Component {
    render() {
        return (
            <div className="footer-top">
                <div className="row align-items-center justify-content-between main-chat-input">
                    <div className="position-left">
                        <span className="photo-frame">
                            <a href="#change-avtar-popup" className="z-disable" id='changeavatar'>
                                <img src={require("../../../../../../assets/images/chat-photo.jpg")} className="img-fluid z-disable" alt="ss" />
                                <span className="status-signal">&nbsp;</span>
                            </a>
                        </span>
                        {/* <!--emojis dropup--> */}
                        <div className="btn-group dropup emojis ">
                            <span className="mob-emojis-toggle" aria-haspopup="true" aria-expanded="false" title="Emojis">
                                <i className="sprite emojis-ico"></i>
                            </span>
                        </div>
                        <div className="mob-txt-editor">
                            <a href="#q" title="text-Editor"><i className="sprite texteditor-ico"></i></a>
                        </div>
                    </div>
                    <div className="input-area">
                        <textarea className="chat-input" typeof="text" placeholder="Type a Message"></textarea>
                        {/* <!--<input className="chat-input" placeholder="Type a Message" />--> */}
                    </div>
                    <div className="position-right">
                        <a href="#3 " title="Voice"><i className="sprite voice-ico"></i></a>
                        <a href="#3 " title="Attachment"><i className="sprite attachment-ico"></i></a>
                        <a href="#3 " title="Photo"><i className="sprite photo-ico"></i></a>
                        <a href="#3 " title="Send Message"><i className="sprite send-ico"></i></a>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between private-chat-input" style={{ display: 'none' }}>
                    <div className="position-left">
                        <span className="photo-frame">
                            <a href="#change-avtar-popup" className="z-disable" id='changeavatar'>
                                <img src={require("../../../../../../assets/images/chat-photo.jpg")} className="img-fluid z-disable" alt="ss" />
                                <span className="status-signal">&nbsp;</span>
                            </a>
                        </span>
                        {/* <!--emojis dropup--> */}
                        <div className="btn-group dropup emojis ">
                            <span className="mob-emojis-toggle" aria-haspopup="true" aria-expanded="false" title="Emojis">
                                <i className="sprite emojis-ico"></i>
                            </span>
                        </div>
                        <div className="mob-txt-editor">
                            <a href="#q" title="text-Editor"><i className="sprite texteditor-ico"></i></a>
                        </div>
                    </div>
                    <div className="input-area">
                        <textarea className="chat-input" typeof="text" placeholder="Type a Message"></textarea>
                        {/* <!--<input className="chat-input" placeholder="Type a Message" />--> */}
                    </div>
                    <div className="position-right">
                        <a href="#3 " title="Voice"><i className="sprite voice-ico"></i></a>
                        <a href="#3 " title="Attachment"><i className="sprite attachment-ico"></i></a>
                        <a href="#3 " title="Photo"><i className="sprite photo-ico"></i></a>
                        <a href="#3 " title="Send Message"><i className="sprite send-ico"></i></a>
                    </div>
                </div>
                <div className="row align-items-center justify-content-between group-conversation-input" style={{ display: 'none' }}>
                    <div className="position-left">
                        <span className="photo-frame">
                            <a href="#change-avtar-popup" className="z-disable" id='changeavatar'>
                                <img src={require("../../../../../../assets/images/chat-photo.jpg")} className="img-fluid z-disable" alt="ss" />
                                <span className="status-signal">&nbsp;</span>
                            </a>
                        </span>
                        {/* <!--emojis dropup--> */}
                        <div className="btn-group dropup emojis ">
                            <span className="mob-emojis-toggle" aria-haspopup="true" aria-expanded="false" title="Emojis">
                                <i className="sprite emojis-ico"></i>
                            </span>
                        </div>
                        <div className="mob-txt-editor">
                            <a href="#q" title="text-Editor"><i className="sprite texteditor-ico"></i></a>
                        </div>
                    </div>
                    <div className="input-area">
                        <textarea className="chat-input" typeof="text" placeholder="Type a Message"></textarea>
                        {/* <!--<input className="chat-input" placeholder="Type a Message" />--> */}
                    </div>
                    <div className="position-right">
                        <a href="#3 " title="Voice"><i className="sprite voice-ico"></i></a>
                        <a href="#3 " title="Attachment"><i className="sprite attachment-ico"></i></a>
                        <a href="#3 " title="Photo"><i className="sprite photo-ico"></i></a>
                        <a href="#3 " title="Send Message"><i className="sprite send-ico"></i></a>
                    </div>
                </div>

            </div>

        )
    }
}
