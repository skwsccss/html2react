import React, { Component } from 'react';
import WebHeader from './modules/webheader';
import MobileHeader from './modules/mobileheader';


class Header extends Component {
    render() {
        return (
            <header>
                <div className="container-fluid mob-lr-5">
                    <WebHeader />
                    <MobileHeader />
                </div>
            </header>
        )
    }
}
export default Header;