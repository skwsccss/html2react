import React, { Component } from 'react'

export default class ShowRealInfo extends Component {
    render() {
        return (
            <span id="real-info" className="real-info-dropdown submenu width-count">
                <span className="user-name theme-bg">Kanyo cube<span className="detail-close-btn" title="Close">X</span></span>
                <span className="menu-content-block">
                    <span className="white-bg">
                        <span className="row d-flex justify-content-center mb-1">
                            <span className="col-12 ">
                                <span className="d-flex justify-content-center ip-ttl">IP Address details</span>
                                <span className="d-flex justify-content-center ip-address">176.27.22.144</span>
                            </span>
                        </span>
                        <span className="row d-flex justify-content-center">
                            <span className="col-5 real-info-ttl">
                                Country
                                </span>
                            <span className="col-7 real-info-detail">
                                <img src="/images/country-flag.jpg" className="mr-1" alt="no-img" /> Jordan
                                </span>
                        </span>
                        <span className="row d-flex justify-content-center">
                            <span className="col-5 real-info-ttl">
                                City
                                </span>
                            <span className="col-7 real-info-detail">
                                Amman
                                </span>
                        </span>
                        <span className="row d-flex justify-content-center">
                            <span className="col-5 real-info-ttl">
                                Region
                                </span>
                            <span className="col-7 real-info-detail">
                                Amman Governorate
                                </span>
                        </span>
                    </span>
                </span>
            </span>
        )
    }
}
