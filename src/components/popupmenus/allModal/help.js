import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'
import QuestionBlock from './QAblock';

export default class Help extends Component {
    render() {
        const data = [1, 1, 11, 1, 1, 1, 1];
        const result = data.map((item, index) => (
            <QuestionBlock key={index} />
        ))
        return (
            <div className="modal01 fadeIn footer-links transform center-transform" id="help-popup" tabIndex="-1" role="dialog" aria-labelledby="help-popup" aria-hidden="true">
                <div className="modal-dialog content-model sm-modal" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Help</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title="Help" />
                        <div className="modal-body">
                            <div className="row no-gutters">
                                <div className="col-12 col-md-12 pl-0 mob-t-4 pb-3 confirm-txt m-text-center desk-pad-10">
                                    <h2 className="mob-model-title qa-main-title">Q & A</h2>
                                    {result}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
