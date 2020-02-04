import React, { Component } from 'react';
import MobileFooter from '../mainContent/mainboard/mbComponets/footer/mob/mobFooter';
import MainChatSection from './mainchatSection';
 
class RoomMain extends Component {
    render() { 
        return (
            <div className="main-wrapper room-list-section">
                <MainChatSection />
                <MobileFooter />
            </div>
        );
    }
}
 
export default RoomMain;