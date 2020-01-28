import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class AnnouncementMsg extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links center-msg-box01" id="announcement-message-popup" tabIndex="-1" role="dialog" aria-labelledby="announcement-message-popup" aria-hidden="true">
                <div className="modal-dialog announcement-message-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Announcement</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title="ANNOUNCEMENT" />
                        <div className="modal-body">
                            <div className="send-announcement-popup">
                                <div className="sm-10-pad">
                                    <div className="announcement-top-section d-flex align-items-center">
                                        <a href="#gallery" className="gallery-icon mr-4">
                                            <img src="/images/announcement-icon.png" alt="no img" />
                                        </a>
                                        <div className="room-select-dropdown">
                                            <div className="d-flex align-items-center">
                                                <span className="sm-txt weight-500">Announcement to <span className="theme-txt-color"> User group name</span></span>
                                            </div>
                                            <div className="d-flex align-items-center mob-cente-align">
                                                <span className="sm-txt weight-500">From <span className="theme-txt-color"> Lin Zhengh</span></span>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="add-announcement-msg textarea-box-01 mt-3">
                                        <textarea
                                            defaultValue="Hello guys, here is the text of announcement Hello guys, here is the text of announcement Hello guys, here is the text of announcement  Hello guys, here is the text of announcement  Hello guys, here is the text of announcement etc......etc....."
                                        ></textarea>
                                    </div>

                                    <div className="modal-btn-group  modal-footer modal-btn-links mt-2 mb-3">
                                        <a href="#ok" className="btn sm-btn theme-bg mob-radius-btn cancel-btn m-order-2" title="Ok">OK</a>
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
