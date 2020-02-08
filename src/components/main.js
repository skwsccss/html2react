import React, { Component } from 'react'
// import { connect } from "react-redux";
// import { fetchPosts } from "../actions/postActions";
// import PropTypes from "prop-types";
import { BrowserRouter as Router } from "react-router-dom";

import Header from './layout/header';
import MainContent from './mainContent/mainContent';

import ModalConductor from './popupmenus/allModal/Modals';

class MainPage extends Component {
    render() {
        return (
            <Router>
                <div className='page_container' id="containment-wrapper">
                    <Header />
                    <MainContent />
                    <ModalConductor />
                </div>
            </Router>
        )
    }
}

export default MainPage;