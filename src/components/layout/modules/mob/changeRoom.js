import React, { Component } from 'react'

class ChangeRoom extends Component {
    render() {
        return (
            <div className="m-l-sm room-dropdown">
                <div className="down-arrow">
                    <select id="chat-tabs">
                        <option value="room1">ROOM1</option>
                        <option value="room2" data-type="talk-room">ROOM2</option>
                        <option value="room3">ROOM3</option>
                        <option value="room4">ROOM4</option>
                        <option value="room5">ROOM5</option>
                    </select> 
                </div>
            </div>
        )
    }
}
export default  ChangeRoom;