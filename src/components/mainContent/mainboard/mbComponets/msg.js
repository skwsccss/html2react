import React, { Component } from 'react'

export default class Message extends Component {
    render() {
        const { content } = this.props;
        console.log(content);
        return (
            <div className={`col-12 m-b-sm d-flex align-items-end ${content}`}>
                <h4>this is the message component</h4>
            </div>
        )
    }
}
