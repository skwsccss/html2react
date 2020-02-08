import React, { Component } from 'react'

export default class MuteWindow extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box show transform" id="mute-window-popup" tabIndex="-1" role="dialog" aria-labelledby="ban-popup" aria-hidden="true">
                <div className="modal-dialog mute-window-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Mute Window</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/lg-mute-icon.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Mute Windows</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <div className="mob-m-t10">Are you sure need mute</div>
                                    <div className="theme-txt-color mob-m-t10">Lin Zhengh</div>
                                    <div className="custom-control custom-checkbox">
                                        <span className="sm-text-left">
                                            Duration mute in minutes max is 15 minutes
                                    </span>  <span className="ip-input bold-txt-bottom"><input type="text" className="z-disable" /></span>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-footer modal-btn-links popup-btns d-flex align-items-center justify-content-center">
                                <a className="btn sm-btn theme-bg mob-radius-btn m-r-sm z-disable background-process-hide mute-system-popup" href="#mute-system-popup" data-toggle="tooltip" title="Do It">Do It</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" data-toggle="tooltip" title="Cancel">Cancel</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
