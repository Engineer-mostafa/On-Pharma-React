import React from "react";

function RightSection() {
    return (
        <div className="sidebar  col-lg-3"
            style={{ position: "relative", overflow: "visible", boxSizing: "border-box", minHeight: 1 + "px" }}>
            <div className="theiaStickySidebar"
                style={{ paddingTop: 0 + "px", paddingBottom: 1 + "px", position: "static", transform: 'none' }}>
                <div className="widget  widget-newsletter" style={{ marginBottom: 8 + "px" , paddingBottom: 21 + "px"}}>

                    <div className="input-group">
                        <input type="search" aria-required="true" name="q" id="additemtotheorder"
                            className="form-control widget-search-form" placeholder="item" style={{
                                maxWidth: 9+ "em",
                                marginRight: 4 + "px" }} />

                            <div className="input-group-append">
                            <input type="number" id="qadditemtomystock" className="form-control" name="Bdate"
                                placeholder="Quantity" required=""
                                style={{ maxWidth: 7.7 + "em", borderTopLeftRadius: 0, borderBottomLeftRadius: 0 }} />


                            </div>
                                <div className="input-group-append">
                            <button className="btn" type="button" style={{ marginLeft: 10 + "px" }} id="additembutton"><i
                                        className="fas fa-plus fa-spin"></i></button>

                                </div>
                            </div>

                        </div>
                <div className="widget" style={{ marginBottom: 28 + "px", paddingBottom: 22 + "px" }}>
                            <div className="tabs">
                                <ul className="nav nav-tabs" id="tabs-posts" role="tablist"
                            style={{ borderBottom: 0 + "px"}}>
                                    <li className="nav-item">
                                        <a className="nav-link active" id="home-tab" data-toggle="tab" href="#order"
                                            role="tab" aria-controls="popular" aria-selected="true">Order <i
                                                className="fas fa-cash-register"></i> </a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="profile-tab" data-toggle="tab" href="#Chat" role="tab"
                                            aria-controls="featured" aria-selected="false">Chat <i
                                                className="far fa-comment-dots"> </i></a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" id="contact-tab" data-toggle="tab" href="#AllToday"
                                            role="tab" aria-controls="recent" aria-selected="false">All Today <i
                                                className="fas fa-chart-pie"></i></a>
                                    </li>
                                </ul>
                        <div className="tab-content" id="tabs-posts-content"
                            style={{ maxHeight: 320 + "px" }}>


                                    <div className="tab-pane fade show active" id="order" role="tabpanel"
                                        aria-labelledby="popular-tab">

                                    </div>


                                    <div className="tab-pane fade" id="Chat" role="tabpanel" aria-labelledby="featured-tab">
                                        <h2>Comming Soon</h2>
                                    </div>


                                    <div className="tab-pane fade" id="AllToday" role="tabpanel"
                                        aria-labelledby="recent-tab">
                                        <div className="post-thumbnail-list" id="alltodatForm">
                                            <h2>Comming Soon</h2>

                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>


                        <div className="widget widget-tweeter" data-username="envato" data-limit="2">
                            <button type="button" className="btn btn-primary btn-lg btn-block" id="cash">Cash</button>
                        </div>

                    </div>
                </div>


    );
}

export default RightSection;



