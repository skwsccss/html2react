import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class SendAnnouncement extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box01" id="send-announcement-popup" tabIndex="-1" role="dialog" aria-labelledby="send-announcement-popup" aria-hidden="true">
                <div className="modal-dialog send-announcement-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Send Announcement</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='SEND ANNOUNCEMENT' />
                        <div className="modal-body">
                            <div className="send-announcement-popup">
                                <div className="sm-10-pad">
                                    <div className="announcement-top-section d-flex">
                                        <a href="#announcement" className="gallery-icon mr-4">
                                            <img src="/images/announcement-icon.png" alt="no-img" />
                                        </a>
                                        <div className="room-select-dropdown">
                                            <div className="mb-2 d-flex align-items-center">
                                                <label>To Room</label>
                                                <div className="duration-select m-l-xs">
                                                    <select className="z-disable">
                                                        <option>All</option>
                                                        <option>Room1</option>
                                                        <option>Room2</option>
                                                        <option>Room3</option>
                                                        <option>Room4</option>
                                                        <option>Room5</option>
                                                    </select>
                                                </div>
                                            </div>
                                            <div className="mb-2 d-flex align-items-center">
                                                <label>User Group</label>
                                                <div className="duration-select m-l-xs">
                                                    <select className="z-disable">
                                                        <option>All</option>
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
                                    <div className="announcement-block">
                                        <div className="add-media">
                                            <span className="announcement-emojis-toggle d-block" title="Emojis">
                                                <i className="sprite emojis-ico"></i>
                                            </span>
                                            <span>
                                                <a href="#text" title="Text-Editor"><i className="sprite texteditor-ico"></i></a>
                                            </span>
                                            <span>
                                                <a href="#text" title="Voice"><i className="sprite voice-ico"></i></a>
                                            </span>
                                        </div>
                                    </div>

                                    <div className="add-announcement-msg">
                                        <textarea></textarea>
                                    </div>

                                    <div className="modal-btn-group  modal-footer modal-btn-links mt-2 mb-3">
                                        <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-2 z-disable background-process-hide announcement-message-popup" href="#announcement-message-popup" title="Send">Send</a>
                                        <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" title="Cancel">Cancel</a>
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
