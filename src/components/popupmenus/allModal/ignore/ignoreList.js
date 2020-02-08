import React, { Component } from 'react';
import MobTopHeader from '../mobTopheader';
import IgnoreUserList from './ignoreUser';
import IgnorePublicVideo from './ignorePublicVideo';
import IgnorePrivateVideo from './ignorePrivateVideo';

export default class IgnoreList extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links show transform" id="ignore-list-popup" tabIndex="-1" role="dialog" aria-labelledby="ignore-list-popup" aria-hidden="true">
                <div className="modal-dialog ignore-list-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Ignore List</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader  data-toggle="tooltip" title='IGNORE LIST' />
                        <div className="modal-body">
                            <div className="ignore-list-popup">
                                <div className="sm-15-pad">
                                    <nav className="mob-tabs">
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item theme-txt-color xs-tabs nav-link z-disable active" id="ignore-user-tab" data-toggle="tab" href="#ignore-user" role="tab" aria-controls="ignore-user" aria-selected="true">Users</a>
                                            <a className="nav-item theme-txt-color xs-tabs nav-link z-disable" id="public-videos-tab" data-toggle="tab" href="#ignore-public-videos" role="tab" aria-controls="ignore-public-videos" aria-selected="false">Public videos</a>
                                            <a className="nav-item theme-txt-color xs-tabs nav-link z-disable" id="private-videos-tab" data-toggle="tab" href="#ignore-private-videos" role="tab" aria-controls="ignore-private-videos" aria-selected="false">Private videos</a>
                                        </div>
                                    </nav>
                                </div>
                                <div className="tab-content" id="nav-tabContent">
                                    <IgnoreUserList />
                                    <IgnorePublicVideo />
                                    <IgnorePrivateVideo />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
