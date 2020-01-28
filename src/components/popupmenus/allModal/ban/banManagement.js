import React, { Component } from 'react'
import MobTopHeader from "../mobTopheader";
import ListBan from './listBan';

export default class BanManagement extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links ui-widget ui-widget-content" id="banmanagment-popup" tabIndex="-1" role="dialog" aria-labelledby="banmanagment-popup" aria-hidden="true">
                <div className="modal-dialog banmanagment-model sm-modal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Ban Managment</strong><span className="mark-read-btn">
                                <button type="button" className="close add-ban-tab" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='Ban Management' />
                        <div className="modal-body">
                            <div className="ban-managment-popup">
                                <div className="row">
                                    <div className="sm-15-pad">
                                        <nav className="mob-tabs">
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item theme-txt-color nav-link z-disable active add-ban-tab" id="add-ban-tab" data-toggle="tab" href="#add-ban" role="tab" aria-controls="add-ban" aria-selected="true">Add</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable list-ban-tab" id="list-ban-tab" data-toggle="tab" href="#list-ban" role="tab" aria-controls="list-ban" aria-selected="false">List</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="tab-content">
                                        {/* <!--Add Ban--> */}
                                        <div className="tab-pane border-box show active" id="add-ban" role="tabpanel" aria-labelledby="add-ban-tab">
                                            <div className="box-space">
                                                <div className="row">
                                                    <div className="ban-duration mob-sm-select d-flex m-tb-10">
                                                        <div className="w-80">Select Room :</div>
                                                        <div className="duration-select">
                                                            <select className="z-disable">
                                                                <option>All</option>
                                                                <option>Room1</option>
                                                                <option>Room2</option>
                                                                <option>Room3</option>
                                                            </select>
                                                        </div>
                                                    </div>

                                                    <div className="custom-checkbox row">
                                                        <div className="col-sm-3 col-12 d-flex custom-control mob-cente-align">
                                                            <div className="ip-txt">
                                                                <input type="checkbox" className="custom-control-input z-disable" id="banip01" name="example1" />
                                                                <label className="custom-control-label" htmlFor="banip01">Ban IP :</label>
                                                            </div>
                                                        </div>
                                                        <div className="col-sm-7 col-12 d-flex">
                                                            <div className="ip-input bold-txt-bottom ">
                                                                <label className="radio-container ">
                                                                    <input type="radio" name="radio" className="z-disable" />
                                                                    <span className="checkmark theme-bg"></span>
                                                                </label>
                                                                <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" /><label className="m-b--5">.</label>
                                                                <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className="custom-checkbox row">
                                                        <div className="col-sm-3 col-12 d-flex custom-control">
                                                            &nbsp;
                                                    </div>
                                                        <div className="col-sm-7 col-12 d-flex">
                                                            <div className="ip-input bold-txt-bottom ">
                                                                <label className="radio-container m-l-7">
                                                                    <input type="radio" name="radio" className="z-disable" />
                                                                    <span className="checkmark theme-bg"></span>
                                                                </label>
                                                                <label className="from-to-label">From</label><input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" /><label className="m-b--5">.</label>
                                                                <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" />
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div className=" custom-checkbox row">
                                                        <div className="col-sm-3 col-12 d-flex custom-control">
                                                            &nbsp;
                                                    </div>
                                                        <div className="col-sm-7 col-12 d-flex">
                                                            <div className="ip-input bold-txt-bottom ">
                                                                <label className="radio-container m-l-7">
                                                                    <input type="radio" name="radio" className="z-disable" />
                                                                    <span className="checkmark theme-bg"></span>
                                                                </label>
                                                                <label className="from-to-label">To</label><input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" /><label className="m-b--5">.</label>
                                                                <input type="text" className="z-disable" /><label className="m-b--5">.</label><input type="text" className="z-disable" />
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ban-duration-box ">
                                                <div className="ban-duration  d-flex align-items-start">
                                                    <div className="w-80 font-13">Duration</div>
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
                                                            <div className="duration-select mob-sm-select sm-select">
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
                                            </div>
                                            <div className="ban-duration d-flex comment-area">
                                                <div className="col-3 d-flex custom-control">
                                                    Reason :
                                            </div>
                                                <div className="col-7 d-flex">
                                                    <div className="duration-label">
                                                        <textarea className="ban-reason-txt z-disable"></textarea>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-btn-group modal-btn-links">
                                                <a className="btn lg-btn theme-bg mob-radius-btn z-disable cancel-btn system-ban-popup" href="#system-ban-popup" title="Save & Apply">Save & Apply</a>
                                                <a href="#cancel" className="btn lg-btn dark-gray-bg mob-radius-btn cancel-btn" title="Cancel">Cancel</a>
                                            </div>
                                        </div>
                                        <ListBan />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
