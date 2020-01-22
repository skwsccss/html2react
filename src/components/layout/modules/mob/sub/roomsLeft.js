import React, { Component } from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types'


import MobRoomList from './mobRoomList';
import { fetchRoom } from '../../../../../actions/fetchAction';

class RoomsLeft extends Component {

    constructor(props) {
        super(props);

        this.fetchData = this.fetchData.bind(this);
    }
    fetchData() {
        this.props.fetchRoom();
    }
    render() {
        const {
            rooms
        } = this.props;

        return (
            <div className="float-left relative-position">
                <button className="mob-header-btn theme-bg room-btn" onClick={this.fetchData}>
                    <i className="sprite home-ico"></i> ROOMS
                </button>
                <MobRoomList
                    rooms={rooms}
                />
            </div>
        )
    }
}

RoomsLeft.propTypes = {
    rooms: PropTypes.object.isRequired,
    fetchRoom: PropTypes.func.isRequired
}

const mapStateToProps = (state) => ({
    rooms: state.rooms,
    loading: state.loading
})

const mapDispatchToProps = ({
    fetchRoom,
});

const ComponentMapped = connect(
    mapStateToProps,
    mapDispatchToProps
)(RoomsLeft);

export default ComponentMapped;