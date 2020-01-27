import React, { Component } from 'react'

export default class MsgInput extends Component {
    render() {
        return (
            <div className="footer-middle">
                <div className="row align-items-center justify-content-between">
                    <div className="col-12">
                        <span className="photo-frame">
                            <a href="#change-avtar-popup">
                                <img src={require("../../../../../../assets/images/chat-photo.jpg")} className="img-fluid" alt="msginput" />
                                <span className="status-signal">&nbsp;</span>
                            </a>
                        </span>
                        <textarea className="chat-input" typeof="text"></textarea>
                        {/* <input className="chat-input" /> */}
                        <button className="sendbtn theme-bg"><i className="sprite plane-ico"></i></button>
                    </div>
                </div>
            </div>
        )
    }
}
