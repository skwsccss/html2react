import React, { Component } from 'react';

class Gift extends Component {
    render() {
        const { name, index } = this.props;
        return (
            <div className="col-2 text-center m-b-xs">
                <div className="gift-image" title={name}>
                    <a href="#ref"><img src={`/css/dist/theme01/images/gifts/0${index + 1}.png`} className="img-fluid" alt="noimg" /></a>
                </div>
                <div className="gift-name">{name}</div>
                <div className="gift-credit"><i className="sprite gift-credit-ico" title="Credits-ico"></i>1000</div>
            </div>
        );
    }
}

export default Gift;