import React, { Component } from 'react'

export default class UpgradeRoom extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform show" id="upgrade-room-popup" tabIndex="-1" role="dialog" aria-labelledby="upgrade-room-popup" aria-hidden="true">
                <div className="modal-dialog upgrade-room-model actions-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Choose Room</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-2 m-text-center d-flex align-items-center justify-content-center mob-col-12">
                                    <div className="img-box">
                                        <img src="/css/dist/theme01/images/change-room-icon.png" className="img-fluid image-34" alt="no" />
                                    </div>
                                    <div className="desk-hidden visible-sm margin-b-5"><div className="gift-name">Choose Room</div></div>
                                </div>
                                <div className="col-12 col-md-10 pl-2 confirm-txt m-text-center">
                                    <div className="mob-t-4 d-flex align-items-center upgrade-room-select">
                                        <span className="lg-txt float-left">Choose Room</span>
                                        <div className="duration-select m-l-xs">
                                            <select className="z-disable">
                                                <option>Room1</option>
                                                <option>Room2</option>
                                                <option>Room3</option>
                                                <option>Room4</option>
                                                <option>Room5</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links popup-btns d-flex align-items-center mt-0 justify-content-center">
                                <a href="#done" className="btn sm-btn theme-bg mob-radius-btn m-r-sm cancel-btn order-1" data-toggle="tooltip" title="Done">Done</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn m-r-sm cancel-btn order-2" data-toggle="tooltip" title="Cancel">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
