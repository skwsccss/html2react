import React, { Component } from 'react'
import Ban from './ban';

export default class ListBan extends Component {
    render() {
        const banData =
        {
            banIP: '1.2.3.4',
            duration: 'Days3',
            reason: 'Bad Name',
            deviceBan: 'Yes',
            room: 'All',
            started: 'a day ago',
            operator: 'lin zhengh',
        }
        const banList = [];
        for (let i = 0; i < 15; i++) {
            banList.push(banData);
        }
        const result = banList.map((item, index)=> (
            <Ban 
            key={index} 
            banIP={item.banIP} 
            duration={item.duration} 
            reason={item.reason} 
            deviceBan={item.deviceBan} 
            room={item.room} 
            started={item.started} 
            operator={item.operator} />
        ))
        return (
            <div className="tab-pane" id="list-ban" role="tabpanel" aria-labelledby="list-ban-tab">
                <div className="border-box pad-a-10">
                    <div className="col-6">
                        <div className="ban-duration position-set d-flex m-tb-10">
                            <div className="w-80">Select Room :</div>
                            <div className="duration-select">
                                <select className="z-disable">
                                    <option>All</option>
                                    <option>Room1</option>
                                    <option>Room2</option>
                                    <option>Room3</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <table id="banlistdata-table" className="display tablesaw tablesaw-stack banlist-table" data-tablesaw-mode="stack" style={{ width: "100%" }}>
                        <thead>
                            <tr>
                                <th>Ban User</th>
                                <th>Ban IP</th>
                                <th>Duration</th>
                                <th>Reason</th>
                                <th>Device Ban</th>
                                <th>Room</th>
                                <th>Start Time</th>
                                <th>Operator</th>
                            </tr>
                        </thead>
                        <tbody>
                            {result}
                        </tbody>
                    </table>
                </div>
                <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                                            <a className="btn lg-btn theme-bg mob-radius-btn z-disable delete-popup" href="#delete-popup" title="Delete Selected">Delete Selected</a>
                                            <a href="#deleteall" className="btn lg-btn theme-bg mob-radius-btn cancel-btn" title="Delete All">Delete All</a>
                                            <a href="#cancel" className="btn lg-btn dark-gray-bg mob-radius-btn cancel-btn" title="Cancel">Cancel</a>
                </div>
            </div>
        )
    }
}
