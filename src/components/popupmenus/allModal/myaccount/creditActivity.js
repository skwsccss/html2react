import React, { Component } from 'react'

export default class CreditActivity extends Component {
    render() {
        const data = [1, 1, 11, 11, 1, 1, , 1, 2, 23, 2];
        const regard = data.map((item, index) => (
            <tr key={index}>
                <td><b className="tablesaw-cell-label">Order Id</b><span className="tablesaw-cell-content">a2a2a2a2:4444:0000:dddd:44 </span></td>
                <td><b className="tablesaw-cell-label">Date</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                <td><b className="tablesaw-cell-label">Operator</b><span className="tablesaw-cell-content">Paypal</span></td>
                <td><b className="tablesaw-cell-label">Cash</b><span className="tablesaw-cell-content">000.00</span></td>
                <td><b className="tablesaw-cell-label">Credit</b><span className="tablesaw-cell-content">105</span></td>
                <td><b className="tablesaw-cell-label">Status</b><span className="tablesaw-cell-content">Approved</span></td>
            </tr>
        ))
        const giftin = data.map((item, index) => (
            <tr key={index}>
                <td><b className="tablesaw-cell-label">Room ID</b><span className="tablesaw-cell-content">1</span></td>
                <td><b className="tablesaw-cell-label">Date</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                <td><b className="tablesaw-cell-label">Sender</b><span className="tablesaw-cell-content">Lin Zhengh</span></td>
                <td><b className="tablesaw-cell-label">Credits</b><span className="tablesaw-cell-content">320</span></td>
                <td><b className="tablesaw-cell-label">Amount</b><span className="tablesaw-cell-content">4</span></td>
                <td><b className="tablesaw-cell-label">Thumbnail</b><span className="tablesaw-cell-content"><img src={`/images/gifts/0${index % 4 + 1}.png`} className="img-fluid" alt="no" /></span></td>
            </tr>
        ))
        const giftout = data.map((item, index) => (
            <tr key={index}>
                <td><b className="tablesaw-cell-label">Room ID</b><span className="tablesaw-cell-content">1</span></td>
                <td><b className="tablesaw-cell-label">Date</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                <td><b className="tablesaw-cell-label">Receiver</b><span className="tablesaw-cell-content">Lin Zhengh</span></td>
                <td><b className="tablesaw-cell-label">Credits</b><span className="tablesaw-cell-content">320</span></td>
                <td><b className="tablesaw-cell-label">Amount</b><span className="tablesaw-cell-content">4</span></td>
                <td><b className="tablesaw-cell-label">Thumbnail</b><span className="tablesaw-cell-content"><img src={`/images/gifts/0${index % 4 + 2}.png`} className="img-fluid" alt="no" /></span></td>
            </tr>
        ))
        const upgradecredit = data.map((item, index) => (
            <tr key={index}>
                    <td><b className="tablesaw-cell-label">Created time</b><span className="tablesaw-cell-content">2018 - 11 - 01 17:58</span></td>
                    <td><b className="tablesaw-cell-label">Duration</b><span className="tablesaw-cell-content">9000</span></td>
                    <td><b className="tablesaw-cell-label">Operator</b><span className="tablesaw-cell-content">admin</span></td>
                    <td><b className="tablesaw-cell-label">Receiver</b><span className="tablesaw-cell-content">Lin Zhengh</span></td>
                    <td><b className="tablesaw-cell-label">Level</b><span className="tablesaw-cell-content">Plus</span></td>
                    <td><b className="tablesaw-cell-label">Credit</b><span className="tablesaw-cell-content">3,000,000</span></td>
            </tr>
        ))
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
                                    {regard}
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="giftin" role="tabpanel" aria-labelledby="giftin-tab">
                            <table id="giftin-table" className="myaccount-datatable display tablesaw tablesaw-stack" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Room ID</th>
                                        <th>Date</th>
                                        <th>Sender</th>
                                        <th>Credits</th>
                                        <th>Amount</th>
                                        <th>Thumbnail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {giftin}
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="giftout" role="tabpanel" aria-labelledby="giftout-tab">
                            <table id="giftout-table" className="myaccount-datatable display tablesaw tablesaw-stack" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Room ID</th>
                                        <th>Date</th>
                                        <th>Receiver</th>
                                        <th>Credits</th>
                                        <th>Amount</th>
                                        <th>Thumbnail</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {giftout}
                                </tbody>
                            </table>
                        </div>
                        <div className="tab-pane" id="upgrade-credit" role="tabpanel" aria-labelledby="upgrade-credit-tab">
                            <table id="upgradecredit-table" className="myaccount-datatable display tablesaw tablesaw-stack" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                                <thead>
                                    <tr>
                                        <th>Created time</th>
                                        <th>Duration</th>
                                        <th>Operator</th>
                                        <th>Receiver</th>
                                        <th>Level</th>
                                        <th>Credit</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {upgradecredit}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
