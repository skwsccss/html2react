import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { fetchPosts } from "../actions/postActions";
// import PropTypes from "prop-types";

import Header from './layout/header';


class MainPage extends Component {

    componentWillMount() {
        // this.props.fetchPosts()
    }

    render() {
        return (
            <div className='page_container' id="containment-wrapper">
                <Header />
                <div class="main-wrapper">
                    {/* user menu popup */}
                    <span id="user-dropdown" class="dropdown-menu user-list-dropdown">

                    </span>
                    {/* change status menu */}
                    <span class="dropdown-menu change-status sidebar-status-menu width-count">

                    </span>
                    {/* Main sidebar */}
                    <div id="mySidebar" class="sidebar active">

                    </div>
                </div>

            </div>
        )
    }
}

export default MainPage;