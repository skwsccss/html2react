import React, { Component } from 'react'
import MobTopHeader from '../mobTopheader'
import VirtualCurrency from './vcurrency'

export default class VCurrencyShop extends Component {
    render() {
        return (
            <div className="modal01 fadeIn footer-links" id="virtual-currency-popup" tabIndex="-1" role="dialog" aria-labelledby="virtual-currency-popup" aria-hidden="true">
                <div className="modal-dialog virtual-currency-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Virtual Currency Shop</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title="VIRTUAL CURRENCY" />
                        <div className="modal-body">
                            <div className="virtual-currency-popup">
                                <div className="row mb-3">
                                    <div className="col-12">
                                        <div className="main-heading">
                                            Enjoy a lot of features such as buying memberships, upgrading your level or sending gifts
                                            and more by purchasing a virtual credit
                                    </div>
                                    </div>
                                </div>
                                <div className="row">
                                    <div className="col-12 col-md-2 mob-cente-align">
                                        <div className="inner-heading">
                                            <div> <img src="/images/xlg-credit-icon.png" alt="noimage" /></div>
                                            <div className="xs-text">
                                                Buy credit to upgrade your account or your friends account
                                        </div>
                                        </div>
                                        <div className="inner-heading">
                                            <div> <img src="/images/xlg-gift-box.png" alt="noimage" /></div>
                                            <div className="xs-text"> Buy credit to Send gift to your friends</div>
                                        </div>
                                    </div>
                                    <div className="col-12 col-md-10 curr-scroll">
                                        <VirtualCurrency />
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
