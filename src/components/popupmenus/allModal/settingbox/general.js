import React, { Component } from 'react'

export default class GeneralTab extends Component {
    render() {
        return (
            <div className="tab-pane show active" id="general-setting" role="tabpanel" aria-labelledby="general-tab">
                <div className="border-box lg-space">
                    <div className="row no-gutters align-items-center m-tb-15">
                        <div className="col-8 text-right">
                            <span className="lg-txt">Accept private message from all</span>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center m-tb-15">
                        <div className="col-8 text-right">
                            <span className="xs-txt">Accept private message from Members only</span>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row no-gutters align-items-center m-tb-15">
                        <div className="col-8 text-right">
                            <span className="xs-txt">Accept private message from friends only</span>
                        </div>
                        <div className="col-4">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row no-gutters mt-3 align-items-center m-tb-15">
                        <div className="col-5 text-left">
                            <span className="lg-txt">Private chat mode</span>
                        </div>
                        <div className="col-7">
                            <div className="duration-select">
                                <select className="z-disable">
                                    <option>Popup box with picture</option>
                                    <option>Popup box without picture</option>
                                    <option>Only popup box</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters mt-3 align-items-center m-tb-15">
                        <div className="col-5 text-left">
                            <span className="lg-txt">Select Language</span>
                        </div>
                        <div className="col-7">
                            <div className="duration-select">
                                <select className="z-disable">
                                    <option>English</option>
                                    <option>Spanish</option>
                                    <option>Arabic</option>
                                    <option>Russian</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div className="row no-gutters mt-3 m-tb-15">
                        <div className="col-12 text-left d-flex align-items-center m-justify-between">
                            <span className="lg-txt">Change the background color of public chat</span>
                            <span className="change-bg public-chat-bg">
                                <span id="bcPicker1" className="color-picker display-inline"></span>
                            </span>
                        </div>
                    </div>
                    <div className="row no-gutters mt-1 m-tb-15">
                        <div className="col-12 text-left d-flex align-items-center m-justify-between">
                            <span className="lg-txt">Change the main design color</span>
                            <div className="btn-group">
                                <button type="button" className="btn change-bg main-design-bg dropdown-toggle down-arrow-none ml-2" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"></button>
                                <div className="dropdown-menu dropdown-menu-right p-2">
                                    <span className="theme-color change-bg original mr-1 ml-0" id="theme01"></span>
                                    <span className="theme-color change-bg blue mr-1 ml-0" id="blue"></span>
                                    <span className="theme-color change-bg dark-blue mr-1 ml-0" id="dark-blue"></span>
                                    <span className="theme-color change-bg purple mr-1 ml-0" id="purple"></span>
                                    <span className="theme-color change-bg vinous mr-1 ml-0" id="vinous"></span>
                                </div>
                            </div>
                            {/* <!--<span className="change-bg main-design-bg">
                            </span>--> */}
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
