import React, { Component } from 'react'

export default class PrivateMsgList extends Component {
    render() {
        const data = ['1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1', '1',];
        const result = data.map((item, index) => (
            <div className="col-12 m-b-sm d-flex align-items-start" key={index}>
                <div className="profile-pics btn-group dropright">
                    <span className="dropdown-open">
                        <img src="/images/profile-pics/02.png" className="img-fluid rounded-circle b-user-pics mCS_img_loaded" alt="noimg" />
                        <span className="arrow-left-caret"></span>
                    </span>
                </div>
                <div className="chat-line darkgray-bg-line d-flex justify-content-between align-items-center m-full-block">
                    <span className="d-flex m-left-block">
                        <span className="btn-group">
                            <span className="dropdown-open" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                <b>Lín  Zhèng :</b>
                                <span className="arrow-left-caret"></span>
                            </span>
                        </span>
                        <span>&nbsp;Hello Everyone!!</span>
                    </span>
                    <span className="float-right font-12 m-right-block">05:00 PM</span>
                </div>
            </div>
        ))
        return (
            <div className="scroll-privatechat privatechat-scroll">
                {result}
            </div>
        )
    }
}
