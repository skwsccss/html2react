import React, { Component } from 'react'
import MobTopHeader from '../mobTopheader'
import ChatPopupList from './list';

export default class OpenChatPopup extends Component {
    render() {
        const data = { username: 'Vlad', msg: 3 }
        const list = [];
        for (let i = 0; i < 10; i++) {
            list.push(data);
        }
        const result = list.map((item, index) => (
            <ChatPopupList key={index} username={item.username} msg={item.msg} />
        ))
        return (
            <div className="modal01 fadeIn openchat-list footer-links01 header-popup show transform" id="openchat-popup" tabIndex="-1" role="dialog" aria-labelledby="openchat-popup" aria-hidden="true">
                <div className="modal-dialog openchat-model sm-modal" role="document">
                    <div className="modal-content">
                        <MobTopHeader data-toggle="tooltip" title="CHATS" />
                        <div className="modal-body openchat-scroll">
                            <div className="openchat-box">
                                <div className="mob-delete-right">
                                    {result}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
