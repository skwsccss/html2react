import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'
import MembershipPlan from './membershipPlan'

export default class UpgradeMembership extends Component {
    render() {
        const data = [
            {
                title: 'VIP',
                price: 3000,
            },
            {
                title: 'Premium',
                price: 2000,
            },
            {
                title: 'Plus',
                price: 2000,
            },
            {
                title: 'Diamond',
                price: 1000,
            },
            {
                title: 'VIP',
                price: 3000,
            },
            {
                title: 'Premium',
                price: 2000,
            },
            {
                title: 'Plus',
                price: 2000,
            },
            {
                title: 'Diamond',
                price: 1000,
            },
            {
                title: 'VIP',
                price: 3000,
            },
            {
                title: 'Premium',
                price: 2000,
            },
            {
                title: 'Plus',
                price: 2000,
            },
            {
                title: 'Diamond',
                price: 1000,
            }
        ]
        const membershiplist = data.map((item, index) => (
            <MembershipPlan title={item.title} price={item.price} key={index} color={index % 2 === 0 ? 'purple-bg' : 'green-bg'} />
        ))
        return (
            <div className="modal01 fadeIn footer-links" id="upgrade-popup" tabIndex="-1" role="dialog" aria-labelledby="upgrade-popup" aria-hidden="true">
                <div className="modal-dialog upgrade-model md-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between  hidden-sm">
                            <strong>Upgrade</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='UPGRADE' />
                        <div className="modal-body">
                            <div className="white-bg upgrade-details">
                                <div className="transparent-bg">
                                    <span><img src="/css/dist/theme01/images/vip-tag.png" className="img-fluid" alt="no img" /></span><span className="upgrade-msg">Upgrade membership to stand out from the crowd!</span>
                                </div>
                                <div className="plans-slider">
                                    <div id="owl-plans" className="owl-carousel owl-theme">
                                        {membershiplist}
                                    </div>
                                    <div className="radio-blocks">
                                        <div className="upgrad-info">
                                            <label className="radio-container">
                                                Upgrade for myself
                                        <input className="z-disable" type="radio" name="radio" />
                                                <span className="checkmark theme-bg"></span>
                                            </label>
                                        </div>
                                        <div className="upgrad-info d-flex align-items-center border-bottom">
                                            <label className="radio-container float-left">
                                                Upgrade for Other
                                        <input className="z-disable" type="radio" name="radio" />
                                                <span className="checkmark theme-bg"></span>
                                            </label>
                                            <input className="other-membership z-disable" type="text" placeholder="Sun Zhu" />
                                        </div>
                                    </div>
                                    <div className="buy-credits">
                                        <label className="float-left" htmlFor="friendname">Amount<em>*</em></label>
                                        <input type="text" className="z-disable form-control amount" id="friendname" placeholder="0" />
                                        <label className="float-left" htmlFor="friendname">Months</label>
                                    </div>
                                    <div className="upgrade-info-text">
                                        <div className="sm-fonts"><span className="credit-ttl">You need to pay :</span><span><i className="sprite gift-credit-ico" title="Credits-ico"></i> 1000</span></div>
                                        <div className="sm-fonts d-100-between"><div><span className="credit-ttl">Your credits :</span><span><i className="sprite gift-credit-ico" title="Credits-ico"></i> 0</span></div><button type="submit" href="#virtual-currency-popup" title="Buy-Credits" className="btn sm-btn theme-bg m-l-50 hidden-sm z-disable virtual-currency-popup"><i className="sprite white-cart-ico"></i>Buy Credits</button></div>
                                    </div>
                                    <div className="modal-footer modal-btn-links">
                                        <a title="Buy-Credits" href="#virtual-currency-popup" className="btn sm-btn d-flex theme-bg m-l-50 desk-hidden mob-radius-btn visible-sm z-disable virtual-currency-popup"><i className="sprite white-cart-ico"></i>Buy Credits</a>
                                        <a className="btn sm-btn theme-bg mob-radius-btn cancel-btn" data-dismiss="modal" title="Cancel" href="#cancel">Cancel</a>
                                        <a className="btn sm-btn dark-gray-bg mob-radius-btn z-disable upgrade-room-popup" href="#upgrade-room-popup" id="upgrade-btn" title="Upgrade">Upgrade</a>
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
