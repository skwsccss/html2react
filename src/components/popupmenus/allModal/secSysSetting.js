import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class SecSysSetting extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links ui-widget" id="security-setting-popup" tabIndex="-1" role="dialog" aria-labelledby="security-setting-popup" aria-hidden="true">
                <div className="modal-dialog security-setting-model sm-modal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Security System Settings</strong><span className="mark-read-btn">
                                <button type="button" className="close add-ban-tab" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='SECURITY SYSTEM SETTINGS' />
                        <div className="modal-body">
                            <div className="security-setting-popup">
                                <div className="row">
                                    <div className="tab-content" id="nav-tabContent">
                                        <div className="tab-pane show active">
                                            <div className="lg-space border-seprator">
                                                <div className="row no-gutters align-items-center justify-content-center mob-content-start bor-btm">
                                                    <div className="col-10 text-left d-flex align-items-center justify-content-center mob-content-start">
                                                        <span className="float-left m-r-xs"><img className="shield-image" src="/images/security-shield.png" alt="no img" /></span>
                                                        <span className="lg-txt float-left">Security Settings for</span>
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
                                            <div className="lg-space">
                                                <div className="row no-gutters align-items-center mt-3 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">Activate the wait system</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>

                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="xs-txt">Number of minutes waiting for guest</span>
                                                        <input type="text" className="security-input-xs" />
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="xs-txt">Number of minutes waiting for Registered</span>
                                                        <input type="text" className="security-input-xs" />
                                                    </div>
                                                </div>

                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">Time interval between two messages</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="xs-txt">Number of miliseconds interval between two messages</span>
                                                        <input type="text" className="security-input-md" />
                                                    </div>
                                                </div>


                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">Mute user if sending the same message</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="xs-txt">Number of same messages can be sent before mute</span>
                                                        <input type="text" className="security-input-md" />
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="xs-txt">Number of mute minutes if mute by send same message</span>
                                                        <input type="text" className="security-input-md" />
                                                    </div>
                                                </div>

                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">Maximum number of messages per X time</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2">
                                                    <div className="col-12 d-flex align-items-center">
                                                        <span className="xs-txt">Number of messages</span>
                                                        <input type="text" className="security-input-md" />
                                                        <span className="xs-txt pl-2">can be sent per</span>
                                                        <input type="text" className="security-input-md" />
                                                        <span className="xs-txt pl-2">seconds</span>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">Hide user login and exit system messages</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle black-btn active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                                <div className="row no-gutters align-items-center mt-2 m-justify-between">
                                                    <div className="col-12 d-flex align-items-center m-justify-between">
                                                        <span className="lg-txt">make this room for registered user only</span>
                                                        <button type="button" className="btn btn-xs btn-toggle on-off-toggle black-btn active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                                            <div className="handle"></div>
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                                                <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-2 z-disable background-process-hide exceed-limit-popup" href="#exceed-limit-popup" title="Save & Apply">Save & Apply</a>
                                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" title="Cancel">Cancel</a>
                                            </div>
                                        </div>
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
