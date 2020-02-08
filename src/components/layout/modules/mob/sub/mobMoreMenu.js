import React, { Component } from 'react';


export default class MobMoreMenu extends Component {
    constructor(props) {
        super(props);
        this.clicked = this.clicked.bind(this);
    }
    clicked() {
        console.log('clicked');
    }
    render() {
        return (
            <div className="float-left moremenu mobmore-menu">
                <div className="btn-group dropleft">
                    <div className="room-more-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                        <i className="sprite header-more-ico"></i>
                    </div>
                    <div className="dropdown-menu mobile-head-moremenu">
                        <a className="dropdown-item" href="#1" data-toggle="tooltip" title="Moderated Chat"><i className="sprite mchat-ico mr-2"></i>Turn on moderatated chat</a>
                        <div className="btn-group dropdown-item hide-show-btn" id="status" data-toggle="buttons">
                            <label className="btn btn-default btn-on btn-xs active">
                                <input type="radio" value="1" name="multifeatured_module[module_id][status]" defaultChecked="checked" />Show
                            </label>
                            <label className="btn btn-default btn-off btn-xs ">
                                <input type="radio" value="0" name="multifeatured_module[module_id][status]" />Hide
                            </label>
                        </div>
                        <a className="dropdown-item" href="#security-setting-popup" onClick={this.clicked} data-toggle="tooltip" title="Security Setting"><i className="sprite security-ico mr-2"></i>Secutiry option</a>
                        <a className="dropdown-item" href="#2" data-toggle="tooltip" title="Clear Screen"><i className="sprite clear-ico mr-2"></i>Clear screen for all</a>
                        <a className="dropdown-item" href="#send-announcement-popup" onClick={this.clicked} data-toggle="tooltip" title="Send Announcment"><i className="sprite announcement-ico mr-2"></i>Send announcment</a>
                        <a className="dropdown-item" href="#banmanagment-popup" onClick={this.clicked} data-toggle="tooltip" title="Ban Management">
                            <i className="sprite ban-managment-ico mr-2"></i>Ban management
                        </a>
                        <a className="dropdown-item" href="#1" data-toggle="tooltip" title="Stop Scrolling"><i className="sprite scroll-ico mr-2"></i>Stop scrolling</a>
                        <a className="dropdown-item" href="#1" data-toggle="tooltip" title="Clear Screen"><i className="sprite clear-ico mr-2"></i>Clear screen for all</a>
                        <a className="dropdown-item" href="#1" data-toggle="tooltip" title="Turn Off Sound"><i className="sprite sound-ico mr-2"></i>Turn off sound</a>
                    </div>

                </div>
            </div>
        )
    }
}
