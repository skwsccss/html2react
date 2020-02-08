import React, { Component } from 'react'

export default class ChangeGroupName extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform show" id="change-groupname-popup" tabIndex="-1" role="dialog" aria-labelledby="change-groupname-group-popup" aria-hidden="true">
                <div className="modal-dialog change-groupname-group-model actions-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Change Group Name</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center d-flex align-items-center justify-content-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/chage-group-name.png" className="img-fluid image-34" alt="change Groupname" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Change Group Name</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <input className="groupname-input" placeholder="Enter group name" type="text" />
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center mt-0 justify-content-center">
                                <a href="#save" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn order-1" data-toggle="tooltip" title="Save">Save</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn m-r-sm cancel-btn order-2" data-toggle="tooltip" title="Cancel">Cancel</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
