import React, { Component } from 'react'
import ProfileSection from './profileSection'
import MobPadTabs from './mobPadTabs'

export default class ProfileMainMenu extends Component {
    render() {
        return (
            <span className="menu-content-block">
                <ProfileSection />
                <MobPadTabs />
            </span>
        )
    }
}
