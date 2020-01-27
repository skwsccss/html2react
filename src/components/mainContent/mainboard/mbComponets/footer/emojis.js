import React, { Component } from 'react';
import EmojiPicker from 'emoji-picker-react';

export default class Emojis extends Component {
    render() {
        // const [chosenEmoji, setChosenEmoji] = useState(null);
        // const onEmojiClick = (event, emojiObject) => {
        //     setChosenEmoji(emojiObject);
        // }
        return (
            <div className="btn-group dropup emojis">
                <span className="emojis-toggle" aria-haspopup="true" aria-expanded="false" title="Emojis">
                    <i className="sprite emojis-ico"></i>
                </span>
                <div className="dropdown-menu emojis-list">
                    <EmojiPicker />
                </div>
            </div>
        )
    }
}
