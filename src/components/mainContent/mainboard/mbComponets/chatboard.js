import React, { Component } from 'react'

export default class ChatBoard extends Component {
    render() {
        const { content } = this.props;
        const msgList = content.map((item, index) => (
            item.systemMsg ?
                <div className="col-12 m-b-sm d-flex align-items-end mb-1">

                </div> :

                <div className="col-12 m-b-sm d-flex align-items-end">

                </div>
        ))
        return (
            <div className="row">
                <h1>This is the ChatBoard</h1>
            </div>
        )
    }
}
