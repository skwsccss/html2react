import React, { Component } from 'react'

export default class BanWindow extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links show transform" id="ban-popup" tabIndex="-1" role="dialog" aria-labelledby="ban-popup" aria-hidden="true">
                <div className="modal-dialog ban-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Ban Window</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <div className="modal-body">
                            <div className="row desk-hidden visible-sm">
                                <div className="w-60 text-center m-b-xs">
                                    <div className="gift-image v-c-60">
                                        <a href="#lolipop" data-toggle="tooltip" title="Lolipop"><img src="/css/dist/theme01/images/ban-icon.png" className="img-fluid p-2" alt="noimg" /></a>
                                    </div>
                                    <div className="gift-name">Ban Windows</div>
                                </div>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input z-disable" id="banuser" name="example1" />
                                <label className="custom-control-label" htmlFor="banuser">Ban User : Sun zhu</label>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <div className="ip-txt">
                                    <input type="checkbox" className="custom-control-input z-disable" id="banip" name="example1" />
                                    <label className="custom-control-label" htmlFor="banip">Ban IP :</label>
                                </div>
                                <div className="ip-input bold-txt-bottom ">
                                    <label className="radio-container ">
                                        <input type="radio" name="radio" className="z-disable" />
                                        <span className="checkmark theme-bg"></span>
                                    </label>
                                    <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" /><label className="m-b--5">.</label>
                                    <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" />
                                </div>
                            </div>
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input z-disable" id="bandevice" name="example1" />
                                <label className="custom-control-label" htmlFor="bandevice">Ban Computer, phone device</label>
                            </div>
                            <div className="ban-duration d-flex">
                                <div className="w-80">Duration</div>
                                <div className="duration-label">
                                    <div className="ip-input align-items-center">
                                        <label className="radio-container d-flex align-items-center">
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="txt-label">Forever</span>
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </div>
                                    <div className="ip-input align-items-center">
                                        <label className="radio-container m-r-0">
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                        <input type="text" defaultValue="3" className="z-disable" />
                                        <div className="duration-select">
                                            <select className="z-disable">
                                                <option>Hours</option>
                                                <option>Minutes</option>
                                                <option>Days</option>
                                                <option>Months</option>
                                            </select>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="ban-duration d-flex">
                                <div className="w-80">Reason :</div>
                                <div className="duration-label">
                                    <textarea className="ban-reason-txt z-disable"></textarea>
                                </div>
                            </div>
                            <div className="ban-duration d-flex m-tb-10">
                                <div className="w-80">Ban Type :</div>
                                <div className="duration-select">
                                    <select className="z-disable">
                                        <option>All Rooms</option>
                                        <option>Room1</option>
                                        <option>Room2</option>
                                        <option>Room3</option>
                                    </select>
                                </div>
                            </div>
                            <div className="btn-group popup-btns d-flex align-items-center justify-content-center">
                                <a className="btn sm-btn theme-bg mob-radius-btn m-r-sm z-disable country-ban-popup" href="#country-ban-popup" data-toggle="tooltip" title="Do It">Do It</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" data-toggle="tooltip" title="Close">Cancel</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
