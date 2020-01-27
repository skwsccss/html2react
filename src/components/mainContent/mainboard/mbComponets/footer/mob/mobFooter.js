import React, { Component } from 'react'
import FooterTop from './footerTop'
import MobMsgInput from './msgInput'

export default class MobileFooter extends Component {
    render() {
        return (
            <footer className="mob-display mob-footer">
                <FooterTop />
                <MobMsgInput />
            </footer>
        )
    }
}
