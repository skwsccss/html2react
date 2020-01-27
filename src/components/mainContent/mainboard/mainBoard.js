import React, { Component } from 'react'
import MainChat from './mbComponets/chat/mainChat'
import WebFooter from './mbComponets/footer/web/webFooter'
import MobileFooter from './mbComponets/footer/mob/mobFooter'

export default class MainBoard extends Component {
    render() {
        return (
            <div id="main" className="active chat-window">
                <MainChat />
                <WebFooter />
                <MobileFooter />
            </div>
        )
    }
}
