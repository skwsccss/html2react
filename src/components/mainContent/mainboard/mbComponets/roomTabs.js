import React, { Component } from 'react'

export default class RoomTabs extends Component {
    render() {
        const { roomTabs } = this.props;
        const roomTabList = roomTabs.map((item, index) => (
            <li className="ui-state-default" key={index}>
                {item.tab.unreadMsg ? <span className="count-badge theme-bg">{item.tab.unreadMsg}</span> : ''}
                <a href={`#${item.roomID}`} role="tab" data-toggle="tab" className={`theme-txt-color chatting-room ${index === 0 ? 'default-tab' : ''} ${item.activated ? 'active' : ''}`}>{item.tab.name}</a>
                <button className="close-btn" title="Close"><i className="sprite close-ico"></i></button>
            </li >
        ))
        return (
            <div className="scroll-tabs-block">
                <ul className="nav nav-tabs" id="sortable">
                    {roomTabList}
                    <li className="ui-state-default private-chat-tabs"><a data-toggle="tab" href="#private-chatArea" role="tab" data-id="private-chatArea" className="theme-txt-color private-chatting-room chatting-room">HI</a><button className="p-chat-mini" title="Minimize"><i className="sprite minimize-tab-ico"></i></button><button className="close-btn p-chat-close" title="Close"><i className="sprite close-ico"></i></button></li>
                </ul>
            </div>
        )
    }
}
