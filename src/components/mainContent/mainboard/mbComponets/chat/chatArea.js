import React, { Component } from 'react'
import ChatBoard from './chatboard';

export default class ChatArea extends Component {
    render() {
        const { roomTabs } = this.props;
        const List = roomTabs.map((item, index) => (
            <div key={index} role="tabpanel"
                className=
                {`tab-pane ${item.activated ? 'active' : ''} ${item.roomID} 
                    content box ${item.activated ? 'show' : ''}
                    mob-bottom-scroll ${index === 0 ? 'default-pane' : ''} ${index !== 0 ? 'scroll-section' : ''}`}
                aria-labelledby={index === 0 ? item.roomID : ''}
                id={item.roomID}>
                {item.roomID}
                <ChatBoard
                    content={item.chatContent} />
            </div>
        ))
        return (
            <div id="chat-area" className="tab-content before-border">
                {List}
            </div>
        )
    }
}
