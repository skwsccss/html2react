import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'

export default class ContactUs extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links transform center-transform show" id="contactus-popup" tabIndex="-1" role="dialog" aria-labelledby="contactus-popup" aria-hidden="true">
                <div className="modal-dialog content-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Contact Us</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader data-toggle="tooltip" title="Contact Us" />
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-12 pl-2 m-pl-0 confirm-txt m-text-center">
                                    <div className="mob-t-4">
                                        <div className="d-flex align-content-center justify-content-between">
                                            <h2 className="mob-model-title">Contact Us</h2>
                                            <span>
                                                <a href="#whatsapp" target="_blank" data-toggle="tooltip" title="whatsapp"><i className="whatsapp-ico mr-2"></i></a>
                                                <a href="#facebook" target="_blank" data-toggle="tooltip" title="facebook"><i className="facebook-ico"></i></a>
                                            </span>
                                        </div>
                                        <div className="text-left">
                                            <p> About the App Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from, making it over 2000 years old.</p>
                                            <form>
                                                <div className="form-group">
                                                    <label htmlFor="name"><i className="c-user-ico mr-2"></i>NAME</label>
                                                    <input type="text" className="form-control" id="name" placeholder="Your name" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="email"><i className="c-envelope-ico mr-2"></i>EMAIL</label>
                                                    <input type="email" className="form-control" id="email" placeholder="Your email" />
                                                </div>
                                                <div className="form-group">
                                                    <label htmlFor="message"><i className="c-support-ico mr-2"></i>MESSAGE</label>
                                                    <textarea className="form-control" id="message" placeholder="Your message"></textarea>
                                                </div>
                                            </form>

                                        </div>
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
