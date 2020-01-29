import React, { Component } from 'react'
import HalfVideo from './halfVideo'

export default class GroupConverstationFull extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links height-match full-screen-calling" id="full-groupconversation-popup" tabIndex="-1" role="dialog" aria-labelledby="full-groupconversation-popup" aria-hidden="true">
                <div className="modal-dialog full-groupconversation-model sm-modal" role="document">
                    <div className="modal-content">
                        <div className="back-btn ">
                            <span><img src="/images/white-back-arrow.png" className="img-fluid back-arrow" alt="no" /></span>
                        </div>
                        <div className="col-h-4">
                            <HalfVideo />
                            <HalfVideo />
                        </div>
                        <div className="col-h-4">
                            <HalfVideo />
                            <HalfVideo />
                        </div>
                        <div className="col-h-4">
                            <HalfVideo />
                            <HalfVideo />
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
