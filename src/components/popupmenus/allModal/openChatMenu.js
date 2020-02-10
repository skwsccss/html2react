import React, { Component } from 'react'

export default class OpenChatMenu extends Component {
    render() {
        return (
            <div id="chat-dropdown" className="dropdown-menu chat-dropdown-menu">
                <div className="user-name theme-bg">Kanyo cube<span className="detail-close-btn target-menu">X</span></div>
                <a href="#deleteprivate" className="dropdown-item target-menu " title="Delete Private Chat"><img className="img-fluid mr-2" src="/css/dist/theme01/images/dustbin.png" alt="dustbin" />Delete private chat</a>
                <a className="dropdown-item target-menu change-groupname-popup" href="#change-groupname-popup" title="Rename Group"><img className="img-fluid mr-2" src="/css/dist/theme01/images/pencil.png" alt="noimg" />Rename Group</a>
                <a className="dropdown-item target-menu exit-group-popup" href="#exit-group-popup" title="Exit Group"><img className="img-fluid mr-2" src="/css/dist/theme01/images/door.png" alt="noimg" />Exit Group</a>
                <a href="#deletegroup" className="dropdown-item target-menu " title="Delete Group Chat"><img className="img-fluid mr-2" src="/css/dist/theme01/images/dustbin.png" alt="noimg" />Delete group chat</a>
            </div>
        )
    }
}
