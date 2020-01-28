import React, { Component } from 'react'

export default class PrivateMsgRec extends Component {
    render() {
        return (
            // <!--private message request popup-->
            <div className="modal01 fadeIn footer-links  center-msg-box" id="private-message-request" tabIndex="-1" role="dialog" aria-labelledby="private-message-request" aria-hidden="true">
                <div className="modal-dialog private-message-request sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Private Message</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters align-items-center  justify-content-center">
                                <div className="col-12 d-flex justify-content-center col-md-2 m-text-center mob-col-12">
                                    <div className="img-box ban-image">
                                        <img src="/images/private-msg-icon.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Private Message</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-3 confirm-txt m-text-center">
                                    <div className="mob-t-4">
                                        <div className="sm-text-left">
                                            <strong>you have been private message from <span className="theme-txt-color">Lin Zhengh</span></strong>
                                            <div className="sm-text-left">
                                                <div className="custom-control custom-checkbox">
                                                    <input type="checkbox" className="custom-control-input z-disable" id="accept" name="accept" />
                                                    <label className="custom-control-label" htmlFor="accept">Remember for all private from this user</label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-btn-group modal-footer modal-btn-links popup-btns d-flex align-items-center justify-content-center mt-2">
                                    <a className="btn sm-btn mob-lg-btn theme-bg mob-radius-btn m-r-sm input-change order-1 z-disable hide-other-model privatechat-popup" href="#privatechat-popup" title="Accept&Open">Accept & Open</a>
                                    <a href="#reject" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn order-2" title="Reject">Reject</a>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
