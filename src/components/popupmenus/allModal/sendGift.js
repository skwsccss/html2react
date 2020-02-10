import React, { Component } from 'react'
import MobTopHeader from './mobTopheader'
import Gift from './gift';

export default class SendGift extends Component {
    render() {
        const gifts = ['Lolipop', 'Heart', 'Claps', 'Flower', 'Lolipop', 'Heart', 'Claps', 'Flower', 'Lolipop', 'Heart', 'Claps', 'Flower']
        const result = gifts.map((item, index) => (
            <Gift name={item} index={index % 4} key={index} />
        ))
        return (
            <div className="modal01 fadeIn footer-links ui-widget" id="gift-popup" tabIndex="-1" role="dialog" aria-labelledby="gift-popup" aria-hidden="true">
                <div className="modal-dialog gift-model sm-modal modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <span className="box-title theme-bg justify-content-between hidden-sm">
                            <strong>Hi</strong><span className="mark-read-btn">
                                <button type="button" className="close" data-dismiss="modal" aria-label="Close" title="Close">
                                    <span aria-hidden="true">X</span>
                                </button>
                            </span>
                        </span>
                        <MobTopHeader title='Send Gift' alt="noimg" />
                        <div className="modal-body">
                            <div className="gift-popup">
                                <div className="row">
                                    <nav className="mob-tabs">
                                        <div className="nav nav-tabs nav-fill" id="nav-tab" role="tablist">
                                            <a className="nav-item theme-txt-color nav-link z-disable active" id="default-tab" data-toggle="tab" href="#default" role="tab" aria-controls="default" aria-selected="true">Default</a>
                                            <a className="nav-item theme-txt-color nav-link z-disable" id="jewelry-tab" data-toggle="tab" href="#jewelry" role="tab" aria-controls="jewelry" aria-selected="false">Jewelry</a>
                                            <a className="nav-item theme-txt-color nav-link z-disable" id="luxurious-tab" data-toggle="tab" href="#luxurious" role="tab" aria-controls="luxurious" aria-selected="false">Luxurious</a>
                                        </div>
                                    </nav>
                                    <div className="tab-content border-box" id="nav-tabContent">
                                        {/* <!--default Gifts--> */}
                                        <div className="tab-pane show active" id="default" role="tabpanel" aria-labelledby="default-tab">
                                            {/* <!--paggination--> */}
                                            <ul id="default-gift" className="pagination justify-content-end">
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="first-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="prev-page"></i></a>
                                                </li>
                                                <li className="page-item active z-disable">
                                                    <a href="#page01" className="page-link theme-bg">1</a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link">
                                                        2
                                                </a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"><i className="next-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"> <i className="last-page"></i></a>
                                                </li>
                                            </ul>
                                            {/* <!--gift paggination container--> */}
                                            <div className="pagination-container hide five-row show fadeIn" id="page01">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                            <div className="pagination-container hide five-row fadeIn" id="page02">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="tab-pane" id="jewelry" role="tabpanel" aria-labelledby="jewelry-tab">
                                            {/* <!--paggination--> */}
                                            <ul id="jewelry-gift" className="pagination justify-content-end">
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="first-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="prev-page"></i></a>
                                                </li>
                                                <li className="page-item active z-disable">
                                                    <a href="#page01" className="page-link theme-bg">1</a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link">
                                                        2
                                                </a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"><i className="next-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"> <i className="last-page"></i></a>
                                                </li>
                                            </ul>
                                            {/* <!--gift paggination container--> */}
                                            <div className="pagination-container hide five-row show fadeIn" id="page01">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                            <div className="pagination-container hide five-row fadeIn" id="page02">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="tab-pane" id="luxurious" role="tabpanel" aria-labelledby="luxurious-tab">
                                            {/* <!--paggination--> */}
                                            <ul id="luxurious-gift" className="pagination justify-content-end">
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="first-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page01" className="page-link bg-none"><i className="prev-page"></i></a>
                                                </li>
                                                <li className="page-item active z-disable">
                                                    <a href="#page01" className="page-link theme-bg">1</a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link">
                                                        2
                                                </a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"><i className="next-page"></i></a>
                                                </li>
                                                <li className="page-item z-disable">
                                                    <a href="#page02" className="page-link bg-none"> <i className="last-page"></i></a>
                                                </li>
                                            </ul>
                                            {/* <!--gift paggination container--> */}
                                            <div className="pagination-container hide five-row show fadeIn" id="page01">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                            <div className="pagination-container hide five-row fadeIn" id="page02">
                                                <div className="row">
                                                    {result}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="send-block border-box m-t-sm gift-popup">
                                <div className="row">
                                    <div className="col-sm-2 col-3 text-center m-b-xs">
                                        <div className="gift-image">
                                            <a href="#ref" title="Lolipop"><img src="/css/dist/theme01/images/gifts/01.png" className="img-fluid" alt="no img" /></a>
                                        </div>
                                        <div className="gift-name">Lolipop</div>
                                        <div className="gift-credit"><i className="sprite gift-credit-ico" title="Credits-ico"></i>1000</div>
                                    </div>
                                    <div className="col-sm-10 col-9">
                                        <form className="gift-send-form">
                                            <div className="form-group">
                                                <label htmlFor="friendname1">Receiver<em>*</em></label>
                                                <input type="text" className="form-control z-disable" id="friendname1" placeholder="Sun Zhu" />
                                            </div>
                                            <div className="form-group">
                                                <label htmlFor="amount">Amount<em>*</em></label>
                                                <input type="text" className="form-control z-disable" id="amount" placeholder="1" />
                                            </div>
                                            <div className="form-group credit-info-txt">
                                                <div className="sm-fonts"><span className="credit-ttl">You need to pay :</span><span><i className="sprite gift-credit-ico" title="Credits-ico"></i> 1000 Credits</span></div>
                                                <div className="sm-fonts d-100-between mob-full-width">
                                                    <div><span className="credit-ttl">Your credits :</span><span><i className="sprite gift-credit-ico" title="Credits-ico"></i> 0</span></div>
                                                    <a title="Buy-Credits" href="#virtual-currenc-popup" className="btn sm-btn center-btn theme-bg mob-radius-btn float-right z-disable virtual-currency-popup"><i className="sprite white-cart-ico"></i>Buy Credits</a>
                                                </div>
                                            </div>
                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="modal-btn-group modal-btn-links">
                                <a className="btn sm-btn theme-bg mob-radius-btn z-disabe saythanks-popup" href="#saythanks-popup" title="Send">Send</a>
                                <a href="#cancel" className="btn sm-btn dark-gray-bg mob-radius-btn cancel-btn" data-dismiss="modal" title="Cancel">Cancel</a>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
}
