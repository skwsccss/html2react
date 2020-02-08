import React, { Component } from 'react'

export default class Notice extends Component {
    render() {
        return (
            <div className="modal01 fadeIn show footer-links transform center-transform" id="notice-popup" tabIndex="-1" role="dialog" aria-labelledby="notice-popup" aria-hidden="true">
                <div className="modal-dialog notice-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Notice</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/notice-icon.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Notice</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">

                                    <div className="mob-t-4">
                                        <div className="sm-text-left">
                                            Would you like to be invisible in this room?
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center justify-content-center">
                                <button href="#yes" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn order-1" data-toggle="tooltip" title="Yes">Yes</button>
                                <button className="btn sm-btn dark-gray-bg mob-radius-btn m-r-sm cancel-btn order-2" data-toggle="tooltip" title="No">NO</button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
