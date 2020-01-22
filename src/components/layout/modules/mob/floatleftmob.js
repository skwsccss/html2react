import React, { Component } from 'react'
import RadioShow from './sub/radioshow'
import RoomsLeft from './sub/roomsLeft'
import UserLeft from './sub/usersLeft'
import MobMoreMenu from './sub/mobMoreMenu'

class FloatLeft extends Component {
    render() {
        return (
            <div className="float-left mob-center">
                <RadioShow />
                <RoomsLeft />
                <UserLeft />
                <MobMoreMenu />
            </div>
        )
    }
}
export default FloatLeft;