import React, { Component } from 'react'
import Emojis from '../../../mainContent/mainboard/mbComponets/footer/emojis'

export default class PrivateFooter extends Component {
    render() {
        return (
            <div className="modal-footer hidden-mob">
                <div className="fixed-footer">
                    <div className="row no-gutters mb-01 align-items-center justify-content-between white-bg">
                        <div className="col-auto ">
                            <Emojis />
                        </div>
                    </div>
                        <div className="row no-gutters align-items-center justify-content-between white-bg input-area">
                            <div className="col-12">
                                <span className="photo-frame">
                                    <a href="#change-avtar-popup" className="z-disable change-avtar-popup">
                                        <img src="/images/chat-photo.jpg" className="img-fluid z-disable" alt="nom" />
                                        <span className="status-signal">&nbsp;</span>
                                    </a>
                                </span>
                                <textarea className="chat-input" typeof="text"></textarea>
                                {/* <!--<input className="chat-input" />--> */}
                                <button className="sendbtn theme-bg">
                                    <span>SEND<img src="/images/send-arrow.png" className="img-fluid ml-2" alt="noimg" /></span>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                )
            }
        }
