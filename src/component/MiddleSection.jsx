import React from "react";

function MiddleSection() {
    return (
        <div className="content col-lg-6">

            <div id="blog" className="single-post">

                <div className="post-item">
                    <div className="post-item-wrap">
                        <div className="post-image">

                        </div>
                        <div className="post-item-description">
                            <h2>Patients Section</h2>
                            <div className="post-meta">
                                <span className="post-meta-date" id="currentdate"></span>


                                    </div>
                                    <div className="container">
                                <div className="row">
                                    <div className="col-md-12">
                                        <ul className="nav nav-tabs mr-auto" id="myTab" role="tablist">

                                            <li className="nav-item">
                                                <a className="nav-link " id="contact-tab" data-toggle="tab"
                                                    href="#Prescreptions" role="tab" aria-controls="contact"
                                                    aria-selected="false">Prescreptions</a>
                                            </li>
                                            <li className="nav-item">
                                                <a className="nav-link" id="contact-tab" data-toggle="tab"
                                                    href="#Disease" role="tab" aria-controls="contact"
                                                    aria-selected="false">Disease</a>
                                            </li>

                                            <li style={{ marginLeft: 15 + "%" }}>
                                                <form className="form-inline my-2 my-lg-0">
                                                    <input className="form-control mr-sm-2" type="search"
                                                        id="searchforpatient" placeholder="Search for Patient"
                                                        aria-label="Search" />
                                                        <button className="btn btn-outline-success my-2 my-sm-0"
                                                            type="button" id="searchforbutton"><i
                                                                className="fa fa-search"></i></button>
                                                        </form>
                                                    </li>
                                                </ul>


                                        <div className="tab-content" id="myTabContent"
                                            style={{ maxHeight: 80 +'%' , overflow: 'scroll', marginTop: 0.5 + "em" }}>
                                                <div className="tab-pane fade" id="Prescreptions" role="tabpanel"
                                                    aria-labelledby="Prescreptions-tab">
                                                    <table className="table  table-bordered">
                                                        <thead className="table-dark">
                                                            <tr>
                                                                <th>#</th>
                                                                <th>Date</th>
                                                                <th>Open</th>
                                                                <th>Disburse</th>
                                                            </tr>
                                                        </thead>
                                                        <tbody id="prescreptionTable" className="empty">

                                                        </tbody>
                                                    </table>

                                                </div>
                                                <div className="tab-pane fade" id="Disease" role="tabpanel"
                                                    aria-labelledby="Disease-tab">
                                                    <table className="table">
                                                        <thead className="table-dark">
                                                            <tr>
                                                                <th>Name</th>
                                                                <th>Detected From</th>

                                                            </tr>
                                                        </thead>
                                                        <tbody id="chronicDisease" className="empty">

                                                        </tbody>
                                                    </table>
                                                </div>
                                            </div>

                                            </div>

                                    </div>

                                </div>

                            </div>

                        </div>
                    </div>

                </div>
            </div>





    );
}

export default MiddleSection;
