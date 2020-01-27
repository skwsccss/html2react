import React, { Component } from 'react'

export default class ChatBoard extends Component {
    render() {
        const { content } = this.props;
        const msgList = content.map((item, index) => (
            item.systemMsg ?
                <div className="col-12 m-b-sm d-flex align-items-end mb-1" key={index}>
                    <div className="chat-line system-msg">
                        <span>
                            <i className=
                                {`sprite md-icon 
                            ${item.type === 'sys' ? 'system-msg-ico' :
                                        item.type === 'gift' ? 'gift-box01-ico' :
                                            item.type === 'mod' ? 'chat-popup-ico' :
                                                `${item.type}-ico`}
                            `}></i>
                            <b className="theme-txt-color">{item.typeTxt} : </b>
                        </span>
                        <span className="m-tl-5"> {item.msg}</span>
                    </div>
                </div> :
                <div className="col-12 m-b-sm d-flex align-items-end" key={index}>
                    <div className="profile-pics btn-group dropright">
                        <span className="dropdown-open">
                            <img src={require(`../../../../../assets/images/profile-pics/0${index % 2 === 0 ? 1 : 2}.png`)} className="img-fluid rounded-circle b-user-pics" alt="userImg" />
                            <span className="arrow-left-caret"></span>
                        </span>
                    </div>
                    <div className="chat-line gray-bg-line d-inline-block">
                        <span className="d-flex justify-content-between align-items-center m-full-block">
                            <span className="d-flex m-left-block">
                                <span className="">
                                    <span className="dropdown-open">
                                        <b className="b-user-name">{item.userName} :</b>
                                        <span className="arrow-left-caret"></span>
                                    </span>
                                </span>
                                <span>&nbsp;{item.msg}</span>
                            </span>
                            <span className="float-right font-12 m-right-block">
                                {item.time}
                            </span>
                        </span>
                        <span className="perm-btn-block font-12">
                            {
                                item.accoption.map((option, key) => (
                                    <button className="chat-accept-btn" title={option} key={key}>
                                        <img src={require(`../../../../../assets/images/${option !== 'Rejection' ? 'accept' : 'reject'}-icon.png`)} alt="butnimage" /><span className="action-txt"> {option}</span>
                                    </button>
                                ))}
                        </span>
                    </div>
                </div>
        ))
        return (
            <div className="row">
                {msgList}
            </div>
        )
    }
}
