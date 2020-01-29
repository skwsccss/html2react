import React, { Component } from 'react'
import OwlSlider from './owlSlider'
import OwnVideo from './ownVideo'

export default class MobVideoContainer extends Component {
    render() {
        return (
            <div className="mob-video-container">
                <OwlSlider />
                <OwnVideo />
            </div>
        )
    }
}
