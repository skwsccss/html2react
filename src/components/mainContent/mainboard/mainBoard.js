import React, { Component } from 'react'
import MainChat from './mbComponets/mainChat'
import WebFooter from './mbComponets/webFooter'
import MobileFooter from './mbComponets/mobFooter'

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
