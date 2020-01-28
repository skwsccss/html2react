import React, { Component } from 'react'

export default class ExceedLimit extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box" id="exceed-limit-popup" tabIndex="-1" role="dialog" aria-labelledby="exceed-limit-popup" aria-hidden="true">
                <div className="modal-dialog exceed-limit-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Security System</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/images/lg-security-shield.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Security System</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <div className="mob-m-t10 pl-2"><strong>You have exceed the message limit</strong></div>
                                    <div className="sm-txt">you can not write more than <span className="theme-txt-color"> 3 </span> messages in <span className="theme-txt-color"> 40 </span> seconds </div>
                                    <div className="sm-txt">Do not want to wait? <a className="theme-txt-color z-disable upgrade-popup" href="#upgrade-popup"title="Upgrade Account"> Upgrade your account</a></div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-footer modal-btn-links popup-btns d-flex pl-2 align-items-center justify-content-center">
                                <a className="btn sm-btn theme-bg mob-radius-btn m-r-sm z-disable background-process-hide wait-system-popup" href="#wait-system-popup"title="Well i understand that">Well i understand that</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
