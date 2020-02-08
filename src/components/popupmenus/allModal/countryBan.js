import React, { Component } from 'react'

export default class CountryBan extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links show transform" id="country-ban-popup" tabIndex="-1" role="dialog" aria-labelledby="country-ban-popup" aria-hidden="true">
                <div className="modal-dialog country-ban-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Countries Banned System</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters align-items-center">
                                <div className="col-12 d-flex justify-content-center col-md-2 m-text-center mob-col-12">
                                    <div className="img-box ban-image">
                                        <img src="/css/dist/theme01/images/ban-icon.png" className="img-fluid" alt="no img" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Countries Banned System</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-3 confirm-txt m-text-center">
                                    <div className="mob-t-4">
                                        <div className="sm-text-left">
                                            you have been banned by
                                    </div>
                                        <div className="sm-text-left">
                                            <span className="theme-txt-color">Country banned system</span>
                                        </div>
                                        <div className="sm-text-left">
                                            Reason : <span className="theme-txt-color">You are form a banned country</span>
                                        </div>
                                        <div className="sm-text-left">
                                            if you think there is a mistake contact us
                                    </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center justify-content-center mt-2">
                                <a href="#contactus" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn" data-toggle="tooltip" title="Contact Us">Contact Us</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
