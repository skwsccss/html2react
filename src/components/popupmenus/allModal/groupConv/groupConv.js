import React, { Component } from 'react'
import AvatarInfo from './avatarInfo'
import GroupConvList from './groupconvlist';
import GroupConvBody from './groupconvbody';

export default class GroupConversation extends Component {
    render() {
        const data = { name: 'Vlad' }
        let list = [];
        for (let i = 0; i < 20; i++) {
            list.push(data);
        }
        const result = list.map((item, index) => (
            <GroupConvList key={index} name={item.name} />
        ))
        return (
            <div className="modal01 fadeIn footer-links height-match bot show transform" id="groupconversation-popup" tabIndex="-1" role="dialog" aria-labelledby="groupconversation-popup" aria-hidden="true">
                <div className="modal-dialog groupconversation-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between">
                            <strong>Group Conversation</strong>
                            <span className="mark-read-btn">
                                <span className="d-flex">
                                    <button type="button" className="maximize" data-dismiss="modal" aria-label="maximize"  data-toggle="tooltip" title="Maximize">
                                        <span aria-hidden="true"><img src="/css/dist/theme01/images/maximize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="minimize groupconversation-area" data-dismiss="modal" aria-label="minimize"  data-toggle="tooltip" title="Minimize">
                                        <span aria-hidden="true"><img src="/css/dist/theme01/images/minimize-icon.png" className="img-fluid" alt="no img" /></span>
                                    </button>
                                    <button type="button" className="close" data-dismiss="modal" aria-label="Close"  data-toggle="tooltip" title="Close">
                                        <span aria-hidden="true">X</span>
                                    </button>
                                </span>
                            </span>
                        </span>
                        <div className="row  mob-top-header align-items-center header-shadow">
                            <div className="col-12 d-flex align-items-center mob-space-between">
                                <div className="profile-mob">
                                    <div className="float-left back-btn ">
                                        <span><i className="back-icon back-arrow"></i></span>
                                    </div>
                                    <AvatarInfo />
                                </div>
                                <div className="section-title theme-txt-color">
                                    &nbsp;
                                </div>
                                <div className="moremenu d-flex align-items-center">
                                    <a href="#create-group-popup" className="float-left icons-rounded create-group-popup"  data-toggle="tooltip" title="Create Group"><i className="sprite user-add-ico z-disable"></i></a>
                                    <a href="#videocall" className="theme-bg group-video-call icons-rounded"  data-toggle="tooltip" title="Video Call"><i className="sprite video-ico z-disable"></i></a>
                                    <a href="#voicecall" className="float-left icons-rounded"  data-toggle="tooltip" title="Voice Call"><i className="sprite call-ico z-disable"></i></a>
                                    <button className="mob-header-btn group-user-btn theme-bg active">
                                        <i className="sprite user-fill-ico"></i>
                                    </button>
                                    <div className="mobile-user-list01 group-user-list popup-box remove-overflow talk-mode" id="user-mob">
                                        <div className="row align-items-center justify-content-between theme-light-bg no-gutter">
                                            <div className="col-12 search-bar">
                                                <div className="search-input show">
                                                    <input placeholder="User search" type="text" />
                                                    <button  data-toggle="tooltip" title="Search Menu"><i className="sprite search-ico"></i></button>
                                                </div>
                                                {/* <!--Searchbar Dropdown--> */}
                                                <span className="btn-group dropdown">
                                                    <span className="search-menu" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false"  data-toggle="tooltip" title="User Menu"><i className="sprite search-menu-ico"></i></span>
                                                    <span className="dropdown-menu">
                                                        <a className="dropdown-item" href="#male"><i className="sprite male-search-ico"></i>Show only male</a>
                                                        <a className="dropdown-item" href="#female"><i className="sprite female-search-ico"></i>Show only female</a>
                                                        <a className="dropdown-item" href="#mic"><i className="sprite mic-search-ico"></i>Show only mic</a>
                                                    </span>
                                                </span>
                                                <span className="userlist-close">X</span>
                                            </div>
                                        </div>
                                        <div className="user-list-scroll01">
                                            <div className="m-l-sm m-t-sm"> AVAILABLE NOW</div>
                                            <ul className="user-list01 group-list-data">
                                                {result}
                                            </ul>
                                            <div className="press-to-talk">
                                                <div className="text-center mr-2">
                                                    <span className="btn-title">Press to talk</span>
                                                    <span href="#mic" className="sm-video-btn lock-btn">
                                                        <span className="voice-option mic-action"  data-toggle="tooltip" title="Mic">
                                                            <img src="/css/dist/theme01/images/lg-mic-icon.png" className="img-fluid lock-mic" alt="no img" />
                                                            <img src="/css/dist/theme01/images/lg-mic-on.png" className="img-fluid unlock-mic" alt="no img" />
                                                        </span>
                                                        <span className="voice-lock lock-action"  data-toggle="tooltip" title="Lock">
                                                            <img src="/css/dist/theme01/images/lg-lock-icon.png" className="img-fluid lock-mic" alt="no img" />
                                                            <img src="/css/dist/theme01/images/lg-unlock.png" className="img-fluid unlock-mic" alt="no img" />
                                                        </span>
                                                    </span>

                                                </div>
                                                <div className="text-center">
                                                    <span className="btn-title">Rais Hand</span>
                                                    <span href="#video" className="sm-video-btn hand">
                                                        <span className="voice-option"  data-toggle="tooltip" title="Mic"><img src="/css/dist/theme01/images/hand.png" className="img-fluid imagePath" alt="no img" /></span>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="float-left moremenu mobmore-menu">
                                        <div className="btn-group dropleft">
                                            <div className="room-more-menu dropdown-toggle" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="sprite header-more-ico"></i>
                                            </div>
                                            <div className="dropdown-menu mobile-head-moremenu">
                                                <a className="dropdown-item red-txt z-disable change-groupname-popup" href="#change-groupname-popup"  data-toggle="tooltip" title="Change Groupname"><img src="/css/dist/theme01/images/rename-icon.png" className="mr-2" alt="no img" />Change Groupname</a>
                                                <a className="dropdown-item red-txt z-disable delete-popup" href="#delete-popup"  data-toggle="tooltip" title="Delete this Group"><img src="/css/dist/theme01/images/delete-icon.png" className="mr-2" alt="no img" />Delete this Group</a>
                                                <a className="dropdown-item red-txt z-disable report-group-popup" href="#report-group-popup"  data-toggle="tooltip" title="Report this Group"><img src="/css/dist/theme01/images/report-icon.png" className="mr-2" alt="no img" />Report this Group</a>
                                                <a className="dropdown-item red-txt z-disable exit-group-popup" href="#exit-group-popup"  data-toggle="tooltip" title="Exit the Group"><img src="/css/dist/theme01/images/exit-icon.png" className="mr-2" alt="no img" />Exit the Group</a>
                                            </div>
                                        </div>
                                        {/* <!--<a href="">
                                            <i className="sprite header-more-ico"></i>
                                        </a>--> */}
                                    </div>
                                </div>
                            </div>
                        </div>
                        <GroupConvBody />
                    </div>
                </div>
            </div>
        )
    }
}
