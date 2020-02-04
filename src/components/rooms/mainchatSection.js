import React, { Component } from 'react';
import GroupChatComponent from './groupChatComponent';

class MainChatSection extends Component {
    render() {
        const data = [1, 1, 1, 1, 1, 1, 11, 1, 11, 1, 1, 1, 11, 1, 11, 1, 1, 1, 11, 1, 11, 1, 1, 1, 11, 1, 11, 1, 1, 1]
        const list = data.map((item, index) => (
            <GroupChatComponent key={index} />
        ))
        return (
            <div id="main" className="room-page">
                <div className="container-fluid">
                    <div className="row no-gutters align-items-center main-top-section">
                        <div className="col-auto mr-auto">
                            <input className="search-group" type="text" placeholder="search group" />
                            <a href="#groupsearch" className="group-search-icon">  <img className="img-fluid" src="/images/search-black-ico.png" alt="noimg" /></a>
                        </div>
                        <div className="col-auto header-icons room-page-header">
                            <div className="online-user-data">
                                <span className="m-flex">Online user the last 24 hours</span>
                                <span className="ml-2 mr-2"> <i className="theme-user-group-ico"></i></span>
                                <span className="theme-txt-color">55,6544</span>
                            </div>
                        </div>
                    </div>
                    <div className="room-boxes-section">
                        <div className="row ">
                            {list}
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default MainChatSection;