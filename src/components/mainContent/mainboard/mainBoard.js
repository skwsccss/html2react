import React, { Component } from 'react'
import MainChat from './mbComponets/chat/mainChat'
import WebFooter from './mbComponets/footer/web/webFooter'
import MobileFooter from './mbComponets/footer/mob/mobFooter'
import EmojiPicker from 'emoji-picker-react';


export default class MainBoard extends Component {
    render() {
        return (
            <div id="main" className="active chat-window">
                <MainChat />
                <WebFooter />
                <div className="dropdown-menu mob-emojis-list">
                    <EmojiPicker />
                </div>
                <MobileFooter />
            </div>
        )
    }
}
