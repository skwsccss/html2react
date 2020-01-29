import React, { Component } from 'react'
import OwlSliderList from './sliderList'

export default class OwlSlider extends Component {
    render() {

        let list = [1, 2, 3, 4, 5];
        const result = list.map((item, index) => (
            <OwlSliderList key={index} />
        ))
        return (
            <div id="owl-videoslider" className="owl-carousel owl-theme video-slider">
                <div className="item">
                    {result}
                </div>
            </div>
        )
    }
}
