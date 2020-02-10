import React, { Component } from 'react'

export default class PasswordSetting extends Component {
    render() {
        return (
            <div className="tab-pane" id="password-setting" role="tabpanel" aria-labelledby="password-tab">
                <div className="border-box pad-a-13">
                    <div className="row">
                        <div className="col-12 align-items-center justify-content-center d-flex alert alert-danger" role="alert">
                            Sorry please use a strong password
                    </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-6 change-pwd-txt">
                            Old password
                    </div>
                        <div className="col-6">
                            <input className="pwd-input" type="text" />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-6 change-pwd-txt">
                            New password
                    </div>
                        <div className="col-6">
                            <input className="pwd-input" type="text" />
                        </div>
                    </div>
                    <div className="row align-items-center mb-3">
                        <div className="col-6 change-pwd-txt">
                            Retype new password
                    </div>
                        <div className="col-6">
                            <input className="pwd-input" type="text" />
                        </div>
                    </div>
                </div>
                <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                    <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-3" href="#save" title="Save & Apply">Save & Apply</a>
                    <a href="#Apply" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-2" title="Apply">Apply</a>
                    <a href="#Cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" title="Cancel">Cancel</a>
                </div>
            </div>
        )
    }
}
