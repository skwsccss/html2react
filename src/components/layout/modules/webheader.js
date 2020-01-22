import React, { Component } from 'react'
import 'font-awesome/css/font-awesome.min.css';
import '../../../styles/style.css'

class WebHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '1'
        }
        this.radioChange = this.radioChange.bind(this);
        this.click = this.click.bind(this);
    }
    radioChange(e) {
        this.setState({
            checked: e.target.value
        });
        console.log(this.state.checked);
    }
    click() {
        console.log('clicked');
    }
    render() {
        return (
            <div className="navbar row top-header align-items-center">
                <div className="col-auto mr-auto"><img src={require("../../../assets/images/logo.png")} className="img-fluid" alt="logo" /></div>
                <div className='col-auto header-icons d-flex'>
                    <div className="btn-group hide-show-btn" id="status" data-toggle="buttons">
                        <label className={`btn btn-default btn-on btn-xs ${this.state.checked === '1' ? 'active' : ''}`}>
                            <input type="radio" value="1" name="multifeatured_module[module_id][status]"
                                checked={this.state.checked === '1'} onChange={this.radioChange}
                            />Show
                        </label>
                        <label className={`btn btn-default btn-on btn-xs ${this.state.checked === '0' ? 'active' : ''}`}>
                            <input type="radio" value="0" name="multifeatured_module[module_id][status]"
                                checked={this.state.checked === '0'} onChange={this.radioChange}
                            />Hide
                        </label>
                    </div>
                    <a className="icons-rounded target-menu" title="User Reported" href="#user-reported-popup" onClick={this.click}><i className="fa fa-user-times"></i></a>
                    <a href="#create-group-popup" onClick={this.click} className="icons-rounded target-menu" title="Create Group"><i className="fa fa-user-plus"></i></a>
                    <a href="#gift-popup" onClick={this.click} className="icons-rounded target-menu" title="Gift"><i className="fa fa-gift"></i></a>

                    <a className="icons-rounded target-menu notific-top" href="#notification-popup" id="notification-menu" title="Notification" onClick={this.click}>
                        <i className="fa fa-bell"></i>
                    </a>
                    <a href="#openchat-popup" id="opencaht-menu" onClick={this.click} className="icons-rounded target-menu openchat-list-box" title="Open Chat">
                        <i className="fa fa-comments"></i>
                    </a>
                    <a href="#video01-popup" onClick={this.click} className="icons-rounded" title="Video Call"><i className="sprite video-ico"></i></a>
                    <a href="#video01-popup" onClick={this.click} className="icons-rounded" title="Voice Call"><i className="fa fa-phone"></i></a>
                    <a href="#settingbox-popup" className={"icons-rounded"} title="Settings" onClick={this.click}><i className="fa fa-cog"></i></a>
                    <a href="#about-app-popup" className="icons-rounded" title="About App" onClick={this.click}><i className="fa fa-info-circle "></i></a>
                </div>
            </div>
        )
    }
}
export default WebHeader;