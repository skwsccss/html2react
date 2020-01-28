import React, { Component } from 'react'

export default class SoundSetting extends Component {
    render() {
        return (
            <div className="tab-pane" id="sound-setting" role="tabpanel" aria-labelledby="sound-tab">
                <div className="border-box pad-a-15">
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when public message arrives</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when group message arrives</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when private message arrives</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when you send a message</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when user enters the room</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when user quit the room</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when you got a gift</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when you got membership upgrade</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row mob-no-gutter align-items-center">
                        <div className="col-9 m-lr-0">
                            <span className="xs-txt">Play sound alert when you got firend request</span>
                        </div>
                        <div className="col-3 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
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
