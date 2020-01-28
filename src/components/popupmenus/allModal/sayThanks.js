import React, { Component } from 'react'

export default class SayThanks extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box small-box-popup" id="saythanks-popup" tabIndex="-1" role="dialog" aria-labelledby="saythanks-popup" aria-hidden="true">
                <div className="modal-dialog saythanks-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Gifts</strong><span className="mark-read-btn">
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
                                            <a href="#ref" title="Lolipop"><img src="/images/gifts/01.png" className="img-fluid" alt="noimg" /></a>
                                        </div>
                                        <div className="gift-name">Lolipop</div>
                                    </div>
                                    <div className="text-center m-b-xs font-20 msg-box">
                                        <strong className="theme-txt-color">Lin Zheng</strong> sent you a kiss gift You got 50 gold coins Say thanks to <strong className="theme-txt-color">Lin Zheng</strong>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn sm-btn theme-bg mob-radius-btn" title="Say Thanks">Say Thanks</button>
                            <button type="button" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" title="Close">Close</button>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
