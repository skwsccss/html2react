import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default class Emojis extends Component {
    render() {
        const {index} = this.props;
        return (
            <div className="btn-group dropup emojis">
                <span className={`emojis-toggle${index}`} aria-haspopup="true" aria-expanded="false" data-toggle="tooltip" title="Emojis">
                    <i className="sprite emojis-ico"></i>
                </span>
                <div className={`dropdown-menu emojis-list${index}`}>
                    <EmojiPicker />
                </div>
            </div>
        )
    }
}
