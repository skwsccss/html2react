import React, { Component } from 'react'
import MobTopHeader from '../mobTopheader'
import VoiceCall from './voicecall'
import VideoCall from './videocall'
import BaseArea from './basic'

export default class PrivateChatPopup extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links height-match bot" id="privatechat-popup" tabIndex="-1" role="dialog" aria-labelledby="privatechat-popup" aria-hidden="true">
                <div className="modal-dialog privatechat-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Hi</strong>
                            <span className="mark-read-btn">
                                <span className="d-flex">
                                    <button type="button" data-id="privatechat-popup" className="maximize maximize-privateChat" data-dismiss="modal" aria-label="maximize" title="Maximize">
                                        <span aria-hidden="true"><img src="/images/maximize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="minimize chatbody-area" data-dismiss="modal" aria-label="minimize" title="Minimize">
                                        <span aria-hidden="true"><img src="/images/minimize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </span>
                            </span>
                        </span>
                        <MobTopHeader />
                        <div className="modal-body" id="chatbody-area">
                            <VoiceCall />
                            <VideoCall />
                            <BaseArea />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
