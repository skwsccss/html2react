import React, { Component } from 'react'

export default class CreditActivity extends Component {
    render() {
        return (
            <div className="tab-pane my-account-data" id="credit-activities" role="tabpanel" aria-labelledby="cache-tab">
                <div className="border-box pad-a-10 mob-white-bg">
                    <nav className="mob-tabs">
                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                            <a className="nav-item theme-txt-color nav-link active" id="recharge-tab" data-toggle="tab" href="#recharge" role="tab" aria-controls="recharge" aria-selected="true">Recharge</a>
                            <a className="nav-item theme-txt-color nav-link" id="giftin-tab" data-toggle="tab" href="#giftin" role="tab" aria-controls="giftin" aria-selected="false">Gift In</a>
                            <a className="nav-item theme-txt-color nav-link" id="giftout-tab" data-toggle="tab" href="#giftout" role="tab" aria-controls="giftout" aria-selected="false">Gift Out</a>
                            <a className="nav-item theme-txt-color nav-link" id="upgrade-credit-tab" data-toggle="tab" href="#upgrade-credit" role="tab" aria-controls="upgrade-credit" aria-selected="false">Upgrade</a>
                        </div>
                    </nav>
                    <div className="tab-content" id="nav-tabContent">
                        <div className="tab-pane show active" id="recharge" role="tabpanel" aria-labelledby="recharge-tab">
                            <table id="recharge-table" className="myaccount-datatable display tablesaw tablesaw-stack" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Date</th>
                                        <th>Operator</th>
                                        <th>Cash</th>
                                        <th>Credit</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b className="tablesaw-cell-label">Room ID</b><span className="tablesaw-cell-content">1</span></td>
                                        <td><b className="tablesaw-cell-label">Date</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                                        <td><b className="tablesaw-cell-label">Receiver</b><span className="tablesaw-cell-content">Lin Zhengh</span></td>
                                        <td><b className="tablesaw-cell-label">Credits</b><span className="tablesaw-cell-content">320</span></td>
                                        <td><b className="tablesaw-cell-label">Amount</b><span className="tablesaw-cell-content">4</span></td>
                                        <td><b className="tablesaw-cell-label">Thumbnail</b><span className="tablesaw-cell-content"><img src="/images/gifts/01.png" className="img-fluid" alt="noimg" /></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="upgrade-credit" role="tabpanel" aria-labelledby="upgrade-credit-tab">
                            <table  id="upgradecredit-table" className="myaccount-datatable display tablesaw tablesaw-stack" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Order ID</th>
                                        <th>Date</th>
                                        <th>Operator</th>
                                        <th>Cash</th>
                                        <th>Credit</th>
                                        <th>Status</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr>
                                        <td><b className="tablesaw-cell-label">Room ID</b><span className="tablesaw-cell-content">1</span></td>
                                        <td><b className="tablesaw-cell-label">Date</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                                        <td><b className="tablesaw-cell-label">Receiver</b><span className="tablesaw-cell-content">Lin Zhengh</span></td>
                                        <td><b className="tablesaw-cell-label">Credits</b><span className="tablesaw-cell-content">320</span></td>
                                        <td><b className="tablesaw-cell-label">Amount</b><span className="tablesaw-cell-content">4</span></td>
                                        <td><b className="tablesaw-cell-label">Thumbnail</b><span className="tablesaw-cell-content"><img src="/images/gifts/01.png" className="img-fluid" alt="noimg" /></span></td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
