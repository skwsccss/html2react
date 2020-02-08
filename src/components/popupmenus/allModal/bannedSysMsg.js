import React, { Component } from 'react'

export default class BannedSysMsg extends Component {
    render() {
        return (
            // < !--banned system message popup-- >
            <div className="modal01 fadeIn footer-links show transform" id="system-ban-popup" tabIndex="-1" role="dialog" aria-labelledby="system-ban-popup" aria-hidden="true">
                <div className="modal-dialog system-ban-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Banned System</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 d-flex justify-content-center col-md-2 m-text-center mob-col-12">
                                    <div className="img-box ban-image">
                                        <img src="/css/dist/theme01/images/ban-icon.png" className="img-fluid " alt="here" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Banned System</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-3 confirm-txt m-text-center">
                                    <div className="mob-t-4">
                                        <div className="sm-text-left">
                                            you have been banned by <span className="theme-txt-color"> Lin Zhengh</span>
                                        </div>
                                        <div className="sm-text-left">
                                            Reason : <span className="theme-txt-color">Bad picture</span>
                                        </div>
                                        <div className="sm-text-left">
                                            you will be able to login again <span className="theme-txt-color"> MIN 05:00</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center justify-content-center mt-2">
                                <a href="#ok" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn" data-toggle="tooltip" title="Ok">OK</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
