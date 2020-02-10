import React, { Component } from 'react'
import IgnoreUsers from './userlist'

export default class IgnoreUserList extends Component {
    render() {
        const data = [
            { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' }, { username: 'adsfalk' },
        ]
        const result = data.map((item, index) => (
            <IgnoreUsers username={item.username} index={index} key={index} />
        ))
        return (
            <div className="tab-pane show active" id="ignore-user" role="tabpanel" aria-labelledby="ignore-user-tab">
                <div className="search-ignore-list ">
                    <div className="align-items-center m-tb-15">
                        <div className="search-bar theme-light-bg">
                            <div className="search-input show">
                                <input placeholder="user search" type="text" />
                                <button title="Search"><i className="sprite search-ico"></i></button>
                            </div>
                            {/* <!--Searchbar Dropdown--> */}
                            <span className="btn-group dropdown">
                                <span className="search-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" title="Search Menu"><i className="sprite search-menu-ico"></i></span>
                                <span className="dropdown-menu dropdown-menu-right">
                                    <a className="dropdown-item" href="#show"><i className="sprite male-search-ico"></i>Show only male</a>
                                    <a className="dropdown-item" href="#show"><i className="sprite female-search-ico"></i>Show only female</a>
                                    <a className="dropdown-item" href="#show"><i className="sprite mic-search-ico"></i>Show only mic</a>
                                </span>
                            </span>
                        </div>
                    </div>
                </div>
                <ul className="ignore-list">
                    {result}
                </ul>
                <div className="modal-btn-group modal-btn-links mt-2 mb-3">
                    <a className="btn sm-btn theme-bg mob-radius-btn z-disable m-order-3" href="#Delete-selected" title="Delete Selected">Delete Selected</a>
                    <a className="btn sm-btn theme-bg mob-radius-btn cancel-btn m-order-2" href="#Delete-all" title="Delete All">Delete All</a>
                    <a className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn m-order-1" href="#cancel" title="Cancel">Cancel</a>
                </div>
            </div>
        )
    }
}
