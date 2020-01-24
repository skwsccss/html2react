import React, { Component } from 'react';
import AudioPlayer from 'react-h5-audio-player';
import 'react-h5-audio-player/lib/styles.css';

export default class RadioPlayer extends Component {
    render() {



        return (
            <div className="radio-player toggle-radio">
                <div className="d-flex align-items-center">
                    <div id="uniquePlayer-5" className="webPlayer light audioPlayer">
                        <AudioPlayer
                            src="https://s2.radio.co/s79d5660a8/listen"
                            onPlay={e => console.log("onPlay")}
                        />
                    </div>
                </div>
            </div>
        )
    }
}
