import React, { Component } from 'react'
import ChangeStatus from '../popupmenus/changeStatus/changeStatus'
import UserMenu from '../popupmenus/usermenu/userMenu'
import MainSidebar from './mainsidebar/mainSidebar'
import MainBoard from './mainboard/mainBoard'

export default class MainContent extends Component {
    render() {
        return (
            <div className="main-wrapper">
                <ChangeStatus />
                <UserMenu />
                <MainSidebar />
                <MainBoard />
            </div>
        )
    }
}
