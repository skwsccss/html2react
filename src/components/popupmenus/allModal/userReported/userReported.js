import React, { Component } from 'react';
import MobTopHeader from '../mobTopheader';
import ReportedAction from './action';

export default class UserReported extends Component {
    render() {
        const data = {
            username: 'kanyo cube',
            reason: 'User bad image'
        }
        let list = []
        for (let i = 0; i < 10; i++) {
            list.push(data);
        }
        const result = list.map((item, index) => (
            <ReportedAction key={index} username={item.username} reason={item.reason} />
        ))
        return (
            <div className="modal01 fadeIn footer-links show transform" id="user-reported-popup" tabIndex="-1" role="dialog" aria-labelledby="purchase-popup" aria-hidden="true">
                <div className="modal-dialog user-reported-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>User Reported</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader  data-toggle="tooltip" title='USER REPORTED' />
                        <div className="modal-body">
                            <table className="repoted-table">
                                <thead>
                                    <tr>
                                        <th>User</th>
                                        <th>Reason</th>
                                        <th><span className="hidden-mob">What do you want to do</span><span className="desk-sm-hidden">Action</span></th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {result}
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
