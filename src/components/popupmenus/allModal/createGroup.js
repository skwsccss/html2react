import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class CreateGroup extends Component {
    render() {
        const data = ['a', 'a', 'a', 'a', 'a', 'a']
        const memberlist = data.map((item, index) => (
            <span className="group-members" key={index}>
                <img src="/images/group-pics.png" alt="nno" />
                <a href="#member" className="remove-friend">X</a>
            </span>
        ))
        const grouplist = data.map((item, index) => (
            <li className={index % 2 === 0 ? `pink-text` : 'blue-text'} key={index}>
                <div>
                    <span className="profile-avtar">
                        <img src="/images/chat-photo.jpg" className="img-fluid mCS_img_loaded" alt="noimg" />
                        <span className="status-signal">&nbsp;</span>
                    </span>
                    <span className="xs-text">kanyo cube</span>
                </div>
                <div className="hidden-mob btn-right-position">
                    <div className="modal-btn-group modal-btn-links">
                        <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-3" href="#add" title="Add">Add</a>
                    </div>
                </div>
                <div className="desk-hidden mob-display center-checkbox">
                    <div className="custom-control custom-checkbox">
                        <input type="checkbox" className="custom-control-input z-disable" id={`${item}${index}`} name="example" />
                        <label className="custom-control-label" htmlFor={`${item}${index}`}></label>
                    </div>
                </div>
            </li>
        ))
        return (
            <div className="modal01 fadeIn footer-links" id="create-group-popup" tabIndex="-1" role="dialog" aria-labelledby="create-group-popup" aria-hidden="true">
                <div className="modal-dialog create-group-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Create Group</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='CREATE GROUP' />
                        <div className="modal-body">
                            <div className="create-group-popup">
                                <div className="sm-10-pad">
                                    <div className="group-top-section d-flex">
                                        <span className="gallery-icon">
                                            <a href="#none"><img src="/images/camera.png" alt="cameraimg" /></a>
                                        </span>
                                        <span className="add-group-friend">
                                            <input type="text" />
                                            <span className="add-emojis">
                                                <i className="sprite emojis-ico"></i>
                                            </span>
                                        </span>
                                    </div>
                                    <div className="row add-friend-group">
                                        <div className="col-12 col-sm-8">
                                            {memberlist}
                                        </div>
                                        <div className="col-4 col-sm-4 hidden-mob">
                                            <div className="modal-btn-group modal-btn-links">
                                                <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-3 groupconversation-popup" href="#groupconversation-popup" title="Done">Done</a>
                                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" title="Cancel">Cancel</a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <div className="tab-pane show active" id="ignore-user" role="tabpanel" aria-labelledby="ignore-user-tab">
                                        <div className="search-ignore-list ">
                                            <div className="align-items-center m-tb-15">
                                                <div className="search-bar theme-light-bg">
                                                    <div className="search-input show">
                                                        <input placeholder="user search" type="text" />
                                                        <button title="Search"><i className="sprite search-ico"></i></button>
                                                    </div>
                                                    {/* <!--Searchbar Dropdown--> */}
                                                    <span className="btn-group dropdown">
                                                        <span className="search-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Search Menu"><i className="sprite search-menu-ico"></i></span>
                                                        <span className="dropdown-menu dropdown-menu-right">
                                                            <a className="dropdown-item" href="#show"><i className="sprite male-search-ico"></i>Show only male</a>
                                                            <a className="dropdown-item" href="#show"><i className="sprite female-search-ico"></i>Show only female</a>
                                                            <a className="dropdown-item" href="#show"><i className="sprite mic-search-ico"></i>Show only mic</a>
                                                        </span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <ul className="add-group-list">
                                            {grouplist}
                                        </ul>
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
