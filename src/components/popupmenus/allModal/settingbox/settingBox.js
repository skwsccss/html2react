import React, { Component } from 'react';
import MobTobHeader from '../mobTopheader';
import GeneralTab from './general';
import SoundSetting from './sound';
import CacheSetting from './cache';
import PasswordSetting from './password';

export default class SettingBox extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links ui-widget show transform" id="settingbox-popup" tabIndex="-1" role="dialog" aria-labelledby="settingbox-popup" aria-hidden="true">
                <div className="modal-dialog settingbox-model sm-modal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Setting Box</strong><span className="mark-read-btn">
                                <button type="button" className="close add-ban-tab" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTobHeader  data-toggle="tooltip" title='Setting Box' />
                        <div className="modal-body">
                            <div className="setting-popup">
                                <div className="row">
                                    <div className="sm-15-pad">
                                        <nav className="mob-tabs">
                                            <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                                <a className="nav-item theme-txt-color nav-link z-disable active" id="general-tab" data-toggle="tab" href="#general-setting" role="tab" aria-controls="general-setting" aria-selected="true">General</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable" id="sound-tab" data-toggle="tab" href="#sound-setting" role="tab" aria-controls="sound-setting" aria-selected="false">Sound</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable" id="cache-tab" data-toggle="tab" href="#cache-setting" role="tab" aria-controls="cache-setting" aria-selected="false">Cache</a>
                                                <a className="nav-item theme-txt-color nav-link z-disable" id="password-tab" data-toggle="tab" href="#password-setting" role="tab" aria-controls="password-setting" aria-selected="false">Password</a>
                                            </div>
                                        </nav>
                                    </div>
                                    <div className="tab-content" id="nav-tabContent">
                                        <GeneralTab /> 
                                        <SoundSetting />
                                        <CacheSetting />
                                        <PasswordSetting />
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
