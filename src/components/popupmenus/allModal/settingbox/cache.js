import React, { Component } from 'react'

export default class CacheSetting extends Component {
    render() {
        return (
            <div className="tab-pane" id="cache-setting" role="tabpanel" aria-labelledby="cache-tab">
                <div className="border-box pad-a-15">
                    <div className="row m-tb-15 align-items-center">
                        <div className="col-md-5 col-sm-8 col-10 m-lr-0">
                            <span className="xs-txt">Remember my username</span>
                        </div>
                        <div className="col-md-7 col-sm-4 col-2 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row m-tb-15 align-items-center">
                        <div className="col-md-5 col-sm-8 col-10 m-lr-0">
                            <span className="xs-txt">Remember my Password</span>
                        </div>
                        <div className="col-md-7 col-sm-4 col-2 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row m-tb-15 align-items-center">
                        <div className="col-md-5 col-sm-8 col-10 m-lr-0">
                            <span className="xs-txt">Remember my avatar</span>
                        </div>
                        <div className="col-md-7 col-sm-4 col-2 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row m-tb-15 align-items-center">
                        <div className="col-md-5 col-sm-8 col-10 m-lr-0">
                            <span className="xs-txt">Remember my font setting</span>
                        </div>
                        <div className="col-md-7 col-sm-4 col-2 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row m-tb-15 align-items-center">
                        <div className="col-md-5 col-sm-8 col-10 m-lr-0">
                            <span className="xs-txt">Save all my private chat</span>
                        </div>
                        <div className="col-md-7 col-sm-4 col-2 m-lr-0">
                            <button type="button" className="btn btn-xs btn-toggle on-off-toggle active" data-toggle="button" aria-pressed="false" autoComplete="off">
                                <div className="handle"></div>
                            </button>
                        </div>
                    </div>
                    <div className="row m-tb-15 no-gutters mt-3 align-items-center">
                        <div className="col-9 text-left">
                            <span className="lg-txt">Delete all my conversation</span>
                        </div>
                        <div className="col-3 modal-btn-links">
                            <a href="#doit" className="btn doit-btn theme-bg mob-radius-btn cancel-btn" title="Do It">Do it</a>
                        </div>
                    </div>
                    <div className="row m-tb-15 no-gutters mt-3 align-items-center">
                        <div className="col-9 text-left">
                            <span className="lg-txt">Delete all my friend conversation</span>
                        </div>
                        <div className="col-3 modal-btn-links">
                            <a href="#doit" className="btn doit-btn theme-bg mob-radius-btn cancel-btn" title="Do It">Do it</a>
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
