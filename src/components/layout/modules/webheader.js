import React, { Component } from 'react';
import { OpenModal, HideModal } from "../../../actions/modalConductorAction";
import { connect } from 'react-redux'
import PropTypes from 'prop-types'

// import 'font-awesome/css/font-awesome.min.css';
import '../../../styles/style.css'

class WebHeader extends Component {

    constructor(props) {
        super(props);
        this.state = {
            checked: '1'
        }
        this.radioChange = this.radioChange.bind(this);
        this.open = this.open.bind(this)

    }
    open(name) {
        this.props.OpenModal(name)
    }
    radioChange(e) {
        this.setState({
            checked: e.target.value
        });
        console.log(this.state.checked);
    }
    render() {
        return (
            <div className="navbar row top-header align-items-center">
                <div className="col-auto mr-auto"><img src="/css/dist/theme01/images/logo.png" className="img-fluid" alt="logo" /></div>
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
                    <a className="icons-rounded target-menu user-reported-popup" data-toggle="tooltip" title="User Reported" href="#user-reported-popup" onClick={() => { this.open('SEND_GIFT') }}><i className="sprite ban-user-ico"></i></a>
                    <a href="#create-group-popup" className="icons-rounded target-menu create-group-popup" data-toggle="tooltip" title="Create Group"><i className="sprite user-add-ico"></i></a>
                    <a href="#gift-popup" className="icons-rounded target-menu gift-popup" data-toggle="tooltip" title="Gift"><i className="sprite  gift-box-ico"></i></a>

                    <a className="icons-rounded target-menu notific-top notification-popup-notification-menu" href="#notification-popup" id="notification-menu" data-toggle="tooltip" title="Notification">
                        <i className="sprite notification-ico"></i>
                    </a>
                    <a href="#openchat-popup" id="opencaht-menu" className="icons-rounded target-menu openchat-list-box openchat-popup-opencaht-menu" data-toggle="tooltip" title="Open Chat">
                        <i className="openchat-ico"></i>
                    </a>
                    <a href="#video01-popup" className="theme-bg icons-rounded video-popup" data-toggle="tooltip" title="Video Call"><i className="sprite video-ico"></i></a>
                    <a href="#video01-popup" className="icons-rounded video-popup" data-toggle="tooltip" title="Voice Call"><i className="sprite call-ico"></i></a>
                    <a href="#settingbox-popup" className={"icons-rounded settingbox-popup"} data-toggle="tooltip" title="Settings"><i className="sprite setting-ico"></i></a>
                    <a href="#about-app-popup" className="icons-rounded about-app-popup" data-toggle="tooltip" title="About App"><i className="sprite aboutapp-ico"></i></a>
                </div>
            </div>
        )
    }
}

WebHeader.propsTypes = {
    OpenModal: PropTypes.func.isRequired,
    HideModal: PropTypes.func.isRequired
}

const mapDispatchToProps = ({
    OpenModal,
    HideModal
})

const WebHeaderMapped = connect(null, mapDispatchToProps)(WebHeader)
export default WebHeaderMapped;