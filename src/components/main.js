import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { fetchPosts } from "../actions/postActions";
// import PropTypes from "prop-types";

import Header from './layout/header';
import MainContent from './mainContent/mainContent';
import MoreMenuPopup from './popupmenus/allModal/moreMenuPopup';


class MainPage extends Component {



    render() {
        return (
            <div className='page_container' id="containment-wrapper">
                <Header />
                <MainContent />
                <MoreMenuPopup />
            </div>
        )
    }
}

export default MainPage;