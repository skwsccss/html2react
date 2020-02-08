import React, { Component } from 'react'

export default class ReportSystem extends Component {
    render() {
        return (
            <span id="user-report-system" className="user-report-dropdown submenu width-count">
                <span className="user-name theme-bg">Kanyo cube<span className="detail-close-btn" data-toggle="tooltip" title="Close">X</span></span>
                <span className="menu-content-block">
                    <span className="white-bg">
                        <span className="row d-flex justify-content-center mb-1">
                            <span className="col-12 ">
                                <span className="d-flex justify-content-center ip-address">Report this user</span>
                            </span>
                        </span>
                        <span className="row d-flex mb-1">
                            <span className="col-12">
                                <label className="radio-container">
                                    <span>&nbsp;&nbsp;Uses a bad image</span>
                                    <input className="z-disable" type="radio" name="radio" />
                                    <span className="checkmark theme-bg"></span>
                                </label>
                            </span>
                        </span>
                        <span className="row d-flex mb-1">
                            <span className="col-12">
                                <label className="radio-container">
                                    <span>&nbsp;&nbsp;Publish a bad camera</span>
                                    <input className="z-disable" type="radio" name="radio" />
                                    <span className="checkmark theme-bg"></span>
                                </label>
                            </span>
                        </span>
                        <span className="row d-flex mb-1">
                            <span className="col-12">
                                <label className="radio-container">
                                    <span>&nbsp;&nbsp;Bad Username</span>
                                    <input className="z-disable" type="radio" name="radio" />
                                    <span className="checkmark theme-bg"></span>
                                </label>
                            </span>
                        </span>
                        <span className="row d-flex mb-1">
                            <span className="col-12">
                                <label className="radio-container">
                                    <span>&nbsp;&nbsp;Annoys me</span>
                                    <input className="z-disable" type="radio" name="radio" />
                                    <span className="checkmark theme-bg"></span>
                                </label>
                            </span>
                        </span>
                        <span className="modal-btn-group modal-btn-links">
                            <a className="btn sm-btn theme-bg mob-radius-btn z-disable" href="#s" data-toggle="tooltip" title="Send">Send</a>
                            <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn"href="#3" data-toggle="tooltip" title="Cancel">Cancel</a>
                        </span>
                    </span>
                </span>
            </span>
        )
    }
}
