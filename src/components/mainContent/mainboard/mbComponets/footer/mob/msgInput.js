import React, { Component } from 'react'

export default class MobMsgInput extends Component {
    render() {
        return (
            <div className="footer-middle d-flex align-items-center justify-content-between">
                <div className="col-2-5 footer-menu d-flex justify-content-center">
                    <a href="#q" title="Room Area" className="room-footer-menu" id="closeAllPopup">
                        <div className="text-center menu-btns active">
                            <span><i className="sprite room-menu-ico"></i></span>
                            <span>ROOMS</span>
                        </div>
                    </a>
                </div>
                <div className="col-2-5 footer-menu d-flex justify-content-center">
                    <a href="#q" title="Live Area" data-id="#video-popup">
                        <div className="text-center menu-btns">
                            <span><i className="sprite live-ico"></i></span>
                            <span>LIVE</span>
                        </div>
                    </a>
                </div>
                <div className="col-2-5 footer-menu d-flex justify-content-center">
                    <a href="#q" title="Chat List" data-id="#openchat-popup">
                        <div className="text-center menu-btns">
                            <span><i className="sprite chat-add-ico"></i></span>
                            <span>CHATS</span>
                        </div>
                    </a>
                </div>
                <div className="col-2-5 footer-menu d-flex justify-content-center">
                    <a href="#q" title="Chat List" data-id="#friends-popup">
                        <div className="text-center menu-btns">
                            <span><i className="sprite friends-menu-ico"></i></span>
                            <span>FRIENDS</span>
                            <span className="count-badge theme-bg">99+</span>
                        </div>
                    </a>
                </div>
                <div className="col-2-5 footer-menu d-flex justify-content-center">
                    <a href="#q" title="Moremenu-Popup" data-id="#moremenu-popup">
                        <div className="text-center menu-btns">
                            <span><i className="sprite more-menu-ico"></i></span>
                            <span>MORE</span>
                        </div>
                    </a>
                </div>
            </div>
        )
    }
}
