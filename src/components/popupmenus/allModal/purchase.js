import React, { Component } from 'react'
import MobTopHeader from './mobTopheader';

export default class Purchase extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links" id="purchase-popup" tabIndex="-1" role="dialog" aria-labelledby="purchase-popup" aria-hidden="true">
                <div className="modal-dialog purchase-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Complete Your Purchase</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='COMPLETE PURCHASE' />
                        <div className="modal-body">
                            <div className="row align-items-center mob-box-white">
                                <div className="col-6 font-20 theme-txt-color bold-500">
                                    <span>Plan :</span><span className="mob-black-txt"><img src="/images/lg-credit.png" className="img-fluid m-l-sm m-r-sm" alt="noimg" />1000</span>
                                </div>
                                <div className="col-6">
                                    <span className="theme-txt-color bold-500">Price :</span><span className="mob-black-txt"><img src="/images/lg-credit.png" className="img-fluid m-l-sm m-r-sm" alt="noimg" /><strong className="bold-500">50</strong> USD</span>
                                </div>
                            </div>
                            <p>You can complete your purchase with the following payment methods</p>
                            <em>By click and ‘checkout’ , i agree with terms of services</em>
                            <div className="row align-items-center justify-content-center m-t-sm m-b-sm hidden-sm">
                                <img src="/images/payment.png" className="img-fluid" alt="noimg" />
                            </div>
                            <div className="row align-items-center justify-content-center m-t-sm m-b-sm visible-sm desk-hidden">
                                <ul className="payment-options">
                                    <li>
                                        <label className="radio-container">
                                            <img src="css/dist/theme01/images/paypal.png" className="img-fluid" alt="noimg" />
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="radio-container">
                                            <img src="css/dist/theme01/images/master-card.png" className="img-fluid" alt="noimg" />
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="radio-container">
                                            <img src="css/dist/theme01/images/visa.png" className="img-fluid" alt="noimg" />
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="radio-container">
                                            <img src="css/dist/theme01/images/maestro.png" className="img-fluid" alt="noimg" />
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </li>
                                    <li>
                                        <label className="radio-container">
                                            <img src="css/dist/theme01/images/american-express.png" className="img-fluid" alt="noimg" />
                                            <input type="radio" name="radio" className="z-disable" />
                                            <span className="checkmark theme-bg"></span>
                                        </label>
                                    </li>

                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
