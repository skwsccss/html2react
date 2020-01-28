import React, { Component } from 'react'

export default class ReceiveUpgrade extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box" id="receiveupgrade-popup" tabIndex="-1" role="dialog" aria-labelledby="receiveupgrade-popup" aria-hidden="true">
                <div className="modal-dialog receiveupgrade-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Upgrade</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="white-bg upgrade-details">
                                <div className="say-thanks-box d-flex">
                                    <div className="w-60 text-center m-b-xs">
                                        <div className="gift-image v-c-60">
                                            <a href="#lolipop" title="Lolipop"><img src="/images/vip-upgrade.png" className="img-fluid" alt="no img" /></a>
                                        </div>
                                        <div className="gift-name visible-sm desk-hidden">Lolipop</div>
                                    </div>
                                    <div className="text-center m-b-xs font-20 msg-box">
                                        <strong className="theme-txt-color">Lin Zheng</strong> upgrade your account to VIP say thanks to <strong className="theme-txt-color">Lin Zheng</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn sm-btn theme-bg mob-radius-btn z-disable purchase-popup" href="#purchase-popup" title="Say Thanks">Say Thanks</button>
                            <button type="button" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" title="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
