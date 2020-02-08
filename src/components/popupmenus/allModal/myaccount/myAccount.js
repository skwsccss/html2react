import React, { Component } from 'react'
import MobTopHeader from '../mobTopheader'
import MyProfile from './myprofile'
import EditProfile from './editprofile'
import CreditActivity from './creditActivity'

export default class MyAccount extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links ui-widget show transform" id="myaccount-popup" tabIndex="-1" role="dialog" aria-labelledby="myaccount-popup" aria-hidden="true">
                <div className="modal-dialog myaccount-model sm-modal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>My Account</strong><span className="mark-read-btn">
                                <button type="button" className="close add-ban-tab'" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader  data-toggle="tooltip" title="MY ACCOUNT" />
                        <div className="modal-body">
                            <div className="myaccount-popup">
                                <div className="row">
                                    <div className="sm-15-pad">
                                        <nav className="mob-tabs">
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item theme-txt-color nav-link active" id="my-profile-tab" data-toggle="tab" href="#my-profile" role="tab" aria-controls="my-profile" aria-selected="true">My Profile</a>
                                                <a className="nav-item theme-txt-color nav-link" id="edit-profile-tab" data-toggle="tab" href="#edit-profile" role="tab" aria-controls="edit-profile" aria-selected="false">Edit Profile</a>
                                                <a className="nav-item theme-txt-color nav-link " id="credit-activities-tab" data-toggle="tab" href="#credit-activities" role="tab" aria-controls="credit-activities" aria-selected="false">Credit Activities</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="tab-content" id="nav-tabContent">
                                        <MyProfile />
                                        <EditProfile />
                                        <CreditActivity />
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
