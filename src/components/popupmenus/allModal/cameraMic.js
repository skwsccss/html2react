import React, { Component } from 'react'

export default class CameraMic extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box small-box-popup" id="camera-request-popup" tabIndex="-1" role="dialog" aria-labelledby="camera-request-popup" aria-hidden="true">
                <div className="modal-dialog camera-request-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Request Camers - mic</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="details-box">
                                <div className="camera-request-box d-flex align-items-center">
                                    <div className="w-60 text-center m-b-xs">
                                        <div className="mob-border v-c-60">
                                            <img src="/images/camera-mic-icon.png" className="img-fluid" alt="noimg" />
                                        </div>
                                        <div className="popup-label desk-hidden mob-display">Request Camera - mic</div>
                                    </div>
                                    <div className="txt-block">
                                        <div className="m-b-xs font-20 msg-box">
                                            <strong className="theme-txt-color"></strong> You have a new friend request from <br /><strong className="theme-txt-color">Lin Zheng</strong>
                                        </div>
                                        <div className="sm-txt">
                                            If this request is ignored you can return it from
                                            the list of notification later
                                    </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-btn-group modal-footer modal-btn-links popup-btns d-flex align-items-center justify-content-center">
                            <a href="#accept" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn" title="Accept">Accept</a>
                            <a href="#reject" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" title="Reject">Reject</a>
                            <a href="#ignore" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" title="Ignore">Ignore</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
