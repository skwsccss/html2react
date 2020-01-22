import React, { Component } from 'react';
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

import MobUserList from './mobUserList';
import { fetchUsers } from '../../../../../actions/fetchAction';




class UserLeft extends Component {
    constructor(props) {
        super(props);
        this.fetchData = this.fetchData.bind(this);
    }
    fetchData() {
        this.props.fetchUsers();
        console.log(this.props.users);
    }
    render() {
        const { users } = this.props;
        return (
            <div className="float-left relative-position">
                <button className="mob-header-btn theme-bg user-btn" onClick={this.fetchData}>
                    <i className="sprite user-fill-ico"></i>  USERS
                </button>
                <MobUserList
                    users={users}
                />
            </div>
        )
    }
}

UserLeft.propTypes = {
    users: PropTypes.array.isRequired,
    fetchUsers: PropTypes.func.isRequired
}
const mapStateToProps = (state) => ({
    users: state.users.users,
})

const mapDispatchToProps = ({
    fetchUsers,
});

const UserLeftMapped = connect(mapStateToProps, mapDispatchToProps)(UserLeft)

export default UserLeftMapped;