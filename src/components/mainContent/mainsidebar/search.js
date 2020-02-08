import React, { Component } from 'react'

export default class SidebarSearch extends Component {

    constructor(props) {
        super(props);
        this.state = {
            toggleMenu: false
        }
        this.toggleSearchMenu = this.toggleSearchMenu.bind(this);
    }
    toggleSearchMenu() {
        this.setState({ toggleMenu: !this.state.toggleMenu })
        console.log(this.state.toggleMenu);
    }
    render() {
        var toggle = this.state.toggleMenu;
        return (
            <div className="row align-items-center justify-content-between theme-light-bg no-gutter">
                <div className="col-12 search-bar">
                    <div className="search-input user-search show">
                        <input placeholder="Search People" type="text" />
                        <button data-toggle="tooltip" title="Search"><i className="sprite search-ico"></i></button>
                    </div>
                    <div className="search-input friend-search">
                        <input placeholder="Friend search" type="text" />
                        <button data-toggle="tooltip" title="Search Menu"><i className="sprite search-ico"></i></button>
                    </div>
                    <div className="search-input room-search">
                        <input placeholder="Room search" type="text" />
                        <button data-toggle="tooltip" title="Search Menu"><i className="sprite search-ico"></i></button>
                    </div>
                    <span className={`btn-group dropdown`}>
                        <span className={`search-menu`} data-toggle="dropdown" aria-haspopup="true" aria-expanded={toggle} data-toggle="tooltip" title="Search Menu" onClick={this.toggleSearchMenu}><i className="sprite search-menu-ico"></i></span>
                        <span className={`dropdown-menu`} >
                            <a className="dropdown-item" href="#q"><i className="sprite male-search-ico"></i>Show only male</a>
                            <a className="dropdown-item" href="#q"><i className="sprite female-search-ico"></i>Show only female</a>
                            <a className="dropdown-item" href="#q"><i className="sprite mic-search-ico"></i>Show only with mic</a>
                        </span>
                    </span>
                </div>
            </div>
        )
    }
}
