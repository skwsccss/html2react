import React, { Component } from 'react'

export default class MembershipPlan extends Component {
    render() {
        const { title, price, color } = this.props;
        return (
            <div className="item">
                <div className={`membership-box ${color}`}>
                    <div className="plan-header">
                        <span className="d-flex align-items-center">
                            <img src="/css/dist/theme01/images/vip.png" className="img-fluid plan-icon" alt="noimg" />{title}
                        </span>
                        <span className="pointer-icon" title="VIP Membership plans"><img src="/css/dist/theme01/images/info.png" className="img-fluid" alt="no img" /></span>
                    </div>
                    <div className="select-plans">
                        <label className="radio-container">
                            <span className="theme-txt-color">
                                <i className="sprite gift-credit-ico" title="Credits-ico"></i>{price} /
                            </span>
                            <span>&nbsp;Month</span>
                            <input className="z-disable" type="radio" name="radio" />
                            <span className="checkmark theme-bg"></span>
                        </label>
                    </div>
                    <ul>
                        <li>Membership Features</li>
                        <li>Membership Features</li>
                        <li>Membership Features</li>
                        <li>Membership Features</li>
                    </ul>
                </div>
            </div>
        )
    }
}
