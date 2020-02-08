import React, { Component } from 'react';
import RoomHeader from './layout/roomHeader';
import RoomMain from './rooms/roomMain';
import ModalConductor from './popupmenus/allModal/Modals'
import Login from './popupmenus/allModal/login';
import Register from './popupmenus/allModal/Register';

class RoomPage extends Component {
    render() {
        return (
            <div className="page_container" id="containment-wrapper">
                <RoomHeader />
                <RoomMain />
                <ModalConductor />
                <Login />
                <div className="login-mob-bg">&nbsp;</div>
                <Register />
            </div>
        );
    }
}

export default RoomPage;